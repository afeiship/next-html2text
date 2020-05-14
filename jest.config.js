// https://jestjs.io/docs/en/configuration
module.exports = {
  verbose: true,
  testRegex: [/\.spec.js/],
  setupFilesAfterEnv: ['./jest.setup.js'],
  //preset: "jest-puppeteer",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
