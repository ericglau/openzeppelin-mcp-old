import { createMcpHandler } from "@vercel/mcp-adapter";
import { registerSolidityTools } from "@ericglau/wizard-mcp/src/solidity/tools";
import { z } from "zod";
import { version } from "../../../package.json";

const serverOptions = {
  serverInfo: {
    name: "OpenZeppelin Solidity Wizard MCP Server",
    version: version,
  },
  capabilities: {
    tools: {
      listChanged: true,
    },
    instructions: `\
A tool for generating secure Solidity smart contracts using OpenZeppelin's standardized templates.
It can generate and return to the client in plain text the code of ERC20/ERC721/ERC1155 tokens, governance contracts, stablecoin tokens, RWA tokens and custom contracts with configurable security features, access controls, and upgrade mechanisms.
Outputs production-ready code following security best practices.
`,
  },
};

const serverConfig = {
  basePath: "",
  verboseLogs: true,
  maxDuration: 60,
};

// Create handler once to prevent duplicate tool registration
const handler = createMcpHandler(
  async (server) => {
    // TODO Delete this, is an example tool maybe we can add a
    server.tool(
      "secret_fetcher",
      "used to fetch a secret only known by the  MCP server",
      {
        salt: z.string().describe("Salt to mix with the secret"),
      },
      async ({ salt }) => ({
        content: [
          {
            type: "text",
            text: `Secret: ${salt}-Pr0tect1ng-Th3-Gl0bal-Economy!`,
          },
        ],
      })
    );

    registerSolidityTools(server);
  },
  serverOptions,
  serverConfig
);

// Export the same handler instance for all HTTP methods
export const GET = handler;
export const POST = handler;
export const DELETE = handler;
