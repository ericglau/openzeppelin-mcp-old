import { testApiHandler } from "next-test-api-route-handler";
import * as appHandler from "@/contracts/stylus/[transport]/route";
import {
  TEST_CLIENT_INITIALIZATION_REQUEST,
  TEST_CLIENT_INITIALIZED_REQUEST,
  TEST_CLIENT_TOOLS_LIST_REQUEST,
  parseJsonData,
} from "./common";
import { getTitleText, getInstructionsText } from "@/contracts/prompts";
import wizardMcpPackage from "@openzeppelin/wizard-mcp/package.json";

const STYLUS_TOOLS_NAMES = ["stylus-erc20", "stylus-erc721", "stylus-erc1155"];

it("GET Method not allowed", async () => {
  await testApiHandler({
    appHandler,
    params: { transport: "mcp" },
    url: "/contracts/stylus/mcp",
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

it("Server should initialize a client session and serve Stylus tools", async () => {
  await testApiHandler({
    appHandler,
    params: { transport: "mcp" },
    url: "/contracts/stylus/mcp",
    test: async ({ fetch }) => {
      // Initialize the client session
      const responseIitialize = await fetch(TEST_CLIENT_INITIALIZATION_REQUEST);
      const responseInitialized = await fetch(TEST_CLIENT_INITIALIZED_REQUEST);
      expect(responseInitialized.ok).toBe(true);

      // Assert title, version and instructions
      const responseInitializeText = parseJsonData(
        await responseIitialize.text()
      );
      expect(getTitleText("Stylus")).toBe(
        responseInitializeText["result"]["serverInfo"]["name"]
      );
      expect(wizardMcpPackage.version).toBe(
        responseInitializeText["result"]["serverInfo"]["version"]
      );
      expect(getInstructionsText("Stylus")).toBe(
        responseInitializeText["result"]["capabilities"]["instructions"]
      );

      // Assert that avaiable tools are the Stylus tools
      const responseToolsList = await fetch(TEST_CLIENT_TOOLS_LIST_REQUEST);
      const toolsList = parseJsonData(await responseToolsList.text())["result"][
        "tools"
      ];
      const toolsNames = toolsList.map((tool) => tool.name);
      expect(toolsNames).toEqual(expect.arrayContaining(STYLUS_TOOLS_NAMES));
      expect(STYLUS_TOOLS_NAMES).toEqual(expect.arrayContaining(toolsNames));
    },
  });
});
