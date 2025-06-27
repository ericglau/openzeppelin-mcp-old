import { createMcpHandler } from "@vercel/mcp-adapter";
import { registerCairoTools } from "@ericglau/wizard-mcp/src/cairo/tools";
import wizardMcpPackage from "@ericglau/wizard-mcp/package.json";

const serverOptions = {
  serverInfo: {
    name: "OpenZeppelin Cairo Wizard MCP Server",
    version: wizardMcpPackage.version,
  },
  capabilities: {
    tools: {
      listChanged: true,
    },
    instructions: `
A tool for generating secure Cairo smart contracts using OpenZeppelin's standardized templates.
It can generate and return to the client in plain text the code of ERC20/ERC721/ERC1155 tokens, account contracts, multisig contracts,  governance contracts, vesting tokens and custom contracts with configurable features.
Outputs production-ready code following security best practices.
`,
  },
};

const serverConfig = {
  basePath: "/wizard/cairo",
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
