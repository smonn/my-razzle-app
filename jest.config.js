const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    ...tsjPreset.transform,
    "\\.css$": "<rootDir>/node_modules/razzle/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|css|json)$)":
      "<rootDir>/node_modules/razzle/config/jest/fileTransform.js",
  },
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
