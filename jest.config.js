module.exports = {
  verbose: false,
  collectCoverage: false,
  coverageDirectory: './coverage/',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 95,
      functions: 100,
      lines: 100,
    },
  },
};
