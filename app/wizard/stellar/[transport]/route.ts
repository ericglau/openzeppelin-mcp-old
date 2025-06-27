import { createMcpHandler } from "@vercel/mcp-adapter";
import { registerStellarTools } from "@ericglau/wizard-mcp/src/stellar/tools";
import wizardMcpPackage from "@ericglau/wizard-mcp/package.json";

const serverOptions = {
  serverInfo: {
    name: "OpenZeppelin Stellar Wizard MCP Server",
    version: wizardMcpPackage.version,
  },
  capabilities: {
    tools: {
      listChanged: true,
    },
    instructions: `
A tool for generating secure Stellar smart contracts using OpenZeppelin's standardized templates.
It can generate and return to the client in plain text the code of fungible and non fungible tokens with configurable features.
Outputs production-ready code following security best practices.
`,
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
