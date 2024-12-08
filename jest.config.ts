import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  transformIgnorePatterns: [
    "node_modules/(?!(some-esm-module|another-esm-module)/)",
  ],
  projects: [
    {
      displayName: "frontend",
      testEnvironment: "jest-environment-jsdom",
      testMatch: ["<rootDir>/__tests__/components/**/*.test.[jt]s?(x)"],
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
      },
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
    },
    {
      displayName: "backend",
      testEnvironment: "node",
      testMatch: ["<rootDir>/__tests__/api/**/*.test.[jt]s?(x)"],
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
      },
      transform: {
        "^.+\\.(ts|tsx)$": [
          "ts-jest",
          {
            tsconfig: "<rootDir>/tsconfig.json",
          },
        ],
      },
      extensionsToTreatAsEsm: [".ts"],
    },
  ],
};

export default createJestConfig(customJestConfig);
