import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "node",

  // Configuration added because .js .ts resolution errors
  moduleNameMapper: {
    // Map .js imports to .ts files
    "^(.+)\\.js$": "$1",
  },
  // Ensure Jest can resolve TypeScript files
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  // Transform TypeScript files
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // Add .ts to the resolve extensions
  resolver: undefined, // Use default resolver with extensions below

  testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(spec|test).ts"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
