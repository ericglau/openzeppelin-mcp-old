import { testApiHandler } from "next-test-api-route-handler";
import * as appHandler from "@/contracts/solidity/[transport]/route";
import {
  TEST_CLIENT_INITIALIZATION_REQUEST,
  TEST_CLIENT_INITIALIZED_REQUEST,
  TEST_CLIENT_TOOLS_LIST_REQUEST,
  parseJsonData,
} from "../common";
import { getTitleText, getInstructionsText } from "@/contracts/prompts";
import contractsMcpPackage from "@openzeppelin/contracts-mcp/package.json";

const SOLIDITY_TOOLS_NAMES = [
  "solidity-erc20",
  "solidity-erc721",
  "solidity-erc1155",
  "solidity-stablecoin",
  "solidity-rwa",
  "solidity-account",
  "solidity-governor",
  "solidity-custom",
];

it("GET Method not allowed", async () => {
  await testApiHandler({
    appHandler,
    params: { transport: "mcp" },
    url: "/contracts/solidity/mcp",
    test: async ({ fetch }) => {
      const response = await fetch({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      expect(response.ok).toBe(false);
      expect(response.status).toBe(405);
    },
  });
});

it("Server should initialize a client session and serve Solidity tools", async () => {
  await testApiHandler({
    appHandler,
    params: { transport: "mcp" },
    url: "/contracts/solidity/mcp",
    test: async ({ fetch }) => {
      // Initialize the client session
      const responseIitialize = await fetch(TEST_CLIENT_INITIALIZATION_REQUEST);
      const responseInitialized = await fetch(TEST_CLIENT_INITIALIZED_REQUEST);
      expect(responseInitialized.ok).toBe(true);

      // Assert title, version and instructions
      const responseInitializeText = parseJsonData(
        await responseIitialize.text()
      );
      expect(getTitleText("Solidity")).toBe(
        responseInitializeText["result"]["serverInfo"]["name"]
      );
      expect(contractsMcpPackage.version).toBe(
        responseInitializeText["result"]["serverInfo"]["version"]
      );
      expect(getInstructionsText("Solidity")).toBe(
        responseInitializeText["result"]["capabilities"]["instructions"]
      );

      // Assert that avaiable tools are the Solidity tools
      const responseToolsList = await fetch(TEST_CLIENT_TOOLS_LIST_REQUEST);
      const toolsList = parseJsonData(await responseToolsList.text())["result"][
        "tools"
      ];
      const toolsNames = toolsList.map((tool) => tool.name);
      expect(toolsNames).toEqual(expect.arrayContaining(SOLIDITY_TOOLS_NAMES));
      expect(SOLIDITY_TOOLS_NAMES).toEqual(expect.arrayContaining(toolsNames));
    },
  });
});
