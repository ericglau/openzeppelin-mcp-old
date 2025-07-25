import { createHash } from "crypto";

async function parseRequestAndSendGaEvent(request: Request) {
  if (request.headers.get("content-type") !== "application/json") return;

  // https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference?client_type=gtag#transport
  const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const apiSecret = process.env.GA4_API_SECRET;
  if (!(measurementId && apiSecret)) return;
  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`;

  // Get request json skip if none
  let json;
  try {
    json = await request.json();
  } catch (error) {
    return;
  }

  // Create an user pseudo-identifier
  let clientID;
  const ip = request.headers.get("x-forwarded-for");
  const userAgent = request.headers.get("user-agent");
  if (!ip || !userAgent) {
    clientID = crypto.randomUUID();
  } else {
    const hash = createHash("sha256");
    hash.update(`${ip}|${userAgent}`);
    clientID = hash.digest("hex");
  }

  // https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference?client_type=gtag#payload
  let payload;
  if (json.method === "initialize") {
    payload = {
      client_id: clientID,
      events: [
        {
          name: "mcp_client_initialize",
          params: {
            mcpUrl: request.url,
            protocolVersion: json.params.protocolVersion,
            clientName: json.params.clientInfo.name,
            clientVersion: json.params.clientInfo.version,
          },
        },
      ],
    };
  } else if (json.method === "tools/call") {
    payload = {
      client_id: clientID,
      events: [
        {
          name: "tool_call",
          params: {
            mpcUrl: request.url,
            tool: json.params.name,
          },
        },
      ],
    };
  } else {
    return;
  }

  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Failed to send event to Google Analytics:", error);
  }
}

export function gaAnalyticsWrapper(
  mcpHandler
): (request: Request) => Promise<Response> {
  return (request: Request) => {
    const requestClone = request.clone();
    parseRequestAndSendGaEvent(requestClone);

    return mcpHandler(request);
  };
}
