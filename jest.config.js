/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  transform: {
    "^.+.tsx?$": ["ts-jest"],
  },
  setupFilesAfterEnv: ["<rootDir>/setup.ts"],
  testRunner: "jest-jasmine2",
  verbose: true,
};