import { createMcpHandler } from "@vercel/mcp-adapter";
import { registerCairoTools } from "@openzeppelin/wizard-mcp/src/cairo/tools";
import { getTitleText } from "@/contracts/prompts";
import { getInstructionsText } from "@/contracts/prompts";
import wizardMcpPackage from "@openzeppelin/wizard-mcp/package.json";

const LANGUAGE = "Cairo";

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
  basePath: "/contracts/cairo",
  verboseLogs: true,
  maxDuration: 60,
};

const handler = createMcpHandler(
  async (server) => {
    registerCairoTools(server);
  },
  serverOptions,
  serverConfig
);

export const GET = handler;
export const POST = handler;
export const DELETE = handler;
