import { createMcpHandler } from "@vercel/mcp-adapter";
import { registerStellarTools } from "@openzeppelin/wizard-mcp/src/stellar/tools";
import { getTitleText } from "@/wizard/prompts";
import { getInstructionsText } from "@/wizard/prompts";
import wizardMcpPackage from "@openzeppelin/wizard-mcp/package.json";

const LANGUAGE = "Stellar";

const serverOptions = {
  serverInfo: {
    name: getTitleText(LANGUAGE),
    version: wizardMcpPackage.version,
  },
  capabilities: {
    tools: {
      listChanged: true,
    },
    instructions: getInstructionsText(LANGUAGE),
  },
};

const serverConfig = {
  basePath: "/wizard/stellar",
  verboseLogs: true,
  maxDuration: 60,
};

const handler = createMcpHandler(
  async (server) => {
    registerStellarTools(server);
  },
  serverOptions,
  serverConfig
);

export const GET = handler;
export const POST = handler;
export const DELETE = handler;
