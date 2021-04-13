module.exports = {
  roots: [
    "<rootDir>/src",
    "<rootDir>/tests"
  ],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.js$": "babel-jest"
  },
  moduleNameMapper: {
    "^app/(.*)$": "<rootDir>/src/app/$1",
    "\\.(css|less|sass|scss)$": "<rootDir>/tests/__mocks__/styleMock.js",
    "\\.svgi$": "<rootDir>/tests/__mocks__/svgrMock.js",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js'],
  globals: {
    'ts-jest':
      {
        isolatedModules: true,
        tsConfig: {
          typeRoots: ["node_modules/@types"]
        }
      }
  }
}