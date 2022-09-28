// jest.config.js
module.exports = {
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/*.stories.tsx',
    '!**/*.props.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/src/pages/api/**',
    '!<rootDir>/src/types/**',
    '!<rootDir>/src/backend/controllers/**',
    '!**/*fileSystem.ts',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
    '@mocks/(.*)$': '<rootDir>/src/__mocks__/mockData.js',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@hocs/(.*)$': '<rootDir>/src/hocs/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@themes/(.*)$': '<rootDir>/src/themes/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@self-types/(.*)$': '<rootDir>/src/types/$1',
    '^@themes$': '<rootDir>/src/themes',
    '^@mocks/(.*)$': '<rootDir>/src/__mocks__/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
  },
  // Add more setup options before each test is run
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}
