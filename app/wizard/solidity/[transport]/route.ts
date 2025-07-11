import { createMcpHandler } from "@vercel/mcp-adapter";
import { registerSolidityTools } from "@openzeppelin/wizard-mcp/src/solidity/tools";
import { getTitleText } from "@/wizard/prompts";
import { getInstructionsText } from "@/wizard/prompts";
import wizardMcpPackage from "@openzeppelin/wizard-mcp/package.json";

const LANGUAGE = "Solidity";

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
  basePath: "/wizard/solidity",
  verboseLogs: true,
  maxDuration: 60,
};

const handler = createMcpHandler(
  async (server) => {
    registerSolidityTools(server);
  },
  serverOptions,
  serverConfig
);

export const GET = handler;
export const POST = handler;
export const DELETE = handler;
