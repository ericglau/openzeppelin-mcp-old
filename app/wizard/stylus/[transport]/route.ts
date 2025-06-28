import { createMcpHandler } from "@vercel/mcp-adapter";
import { registerStylusTools } from "@openzeppelin/wizard-mcp/src/stylus/tools";
import wizardMcpPackage from "@openzeppelin/wizard-mcp/package.json";

const serverOptions = {
  serverInfo: {
    name: "OpenZeppelin Stylus Wizard MCP Server",
    version: wizardMcpPackage.version,
  },
  capabilities: {
    tools: {
      listChanged: true,
    },
    instructions: `
A tool for generating secure Stylus smart contracts using OpenZeppelin's standardized templates.
It can generate and return to the client in plain text the code of ERC20, ERC721 and ERC1155 tokens contracts with configurable features.
Outputs production-ready code following security best practices.
`,
  },
};

const serverConfig = {
  basePath: "/wizard/stylus",
  verboseLogs: true,
  maxDuration: 60,
};

const handler = createMcpHandler(
  async (server) => {
    registerStylusTools(server);
  },
  serverOptions,
  serverConfig
);

export const GET = handler;
export const POST = handler;
export const DELETE = handler;
