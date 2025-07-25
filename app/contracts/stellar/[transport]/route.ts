import { createMcpHandler } from "mcp-handler";
import { registerStellarTools } from "@openzeppelin/wizard-mcp/src/stellar/tools";
import { getTitleText } from "@/contracts/prompts";
import { getInstructionsText } from "@/contracts/prompts";
import wizardMcpPackage from "@openzeppelin/wizard-mcp/package.json";
import { gaAnalyticsWrapper } from "@/libraries/ga-analytics-wrapper";

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
  basePath: "/contracts/stellar",
  verboseLogs: true,
  maxDuration: 60,
};

const mcpHandler = createMcpHandler(
  async (server) => {
    registerStellarTools(server);
  },
  serverOptions,
  serverConfig
);

const handler = gaAnalyticsWrapper(mcpHandler);

export const GET = handler;
export const POST = handler;
export const DELETE = handler;
