/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  projects: [
    {
      displayName: "components",
      testEnvironment: "jest-environment-jsdom",
      testMatch: ["<rootDir>/__tests__/components/**/*.test.[jt]s?(x)"],
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
      },
    },
    {
      displayName: "api",
      testEnvironment: "node",
      testMatch: ["<rootDir>/__tests__/api/**/*.test.[jt]s?(x)"],
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
      },
    },
  ],
};
