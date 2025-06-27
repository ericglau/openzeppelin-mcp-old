import { createMcpHandler } from "@vercel/mcp-adapter";
import { registerSolidityTools } from "@ericglau/wizard-mcp/src/solidity/tools";

const serverOptions = {
  serverInfo: {
    name: "OpenZeppelin Solidity Wizard MCP Server",
    version: "0.0.1",
  },
  capabilities: {
    tools: {
      listChanged: true,
    },
    instructions: `
A tool for generating secure Solidity smart contracts using OpenZeppelin's standardized templates.
It can generate and return to the client in plain text the code of ERC20/ERC721/ERC1155 tokens, governance contracts, stablecoin tokens, RWA tokens and custom contracts with configurable security features, access controls, and upgrade mechanisms.
Outputs production-ready code following security best practices.
`,
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
