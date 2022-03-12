const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  setupFilesAfterEnv: ['<rootDir>/src/lib/jest/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/src/lib/jest/cssTransform.js',
  },
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/src/components/$1',

    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',

    // Components
    '@/common/(.*)': '<rootDir>/src/components/common/$1',
    '@/page/(.*)': '<rootDir>/src/components/page/$1',

    // Layouts
    '@/layout/*': '<rootDir>/src/layout/*',

    // Config
    '@/apis': '<rootDir>/src/config/apis',
    '@/constants': '<rootDir>/src/config/constants',

    // Hooks
    '@/hooks/(.*)': '<rootDir>/src/hooks/$1',

    // Lib
    '@/redux/(.*)': '<rootDir>/src/lib/redux/$1',

    // Services
    '@/firebase': '<rootDir>/src/lib/firebase',
    '@/bugsnag': '<rootDir>/src/lib/bugsnag',

    // Styles
    '@/globalStyle/(.*)': '<rootDir>/src/styles/global/$1',
    '@/override/(.*)': '<rootDir>/src/styles/override/$1',

    // Utils
    '@/helpers': '<rootDir>/src/utils/helpers',
    '@/tracker': '<rootDir>/src/utils/tracker',
    '@/lstorage': '<rootDir>/src/utils/lstorage',
    '@/request': '<rootDir>/src/utils/request',

    // Node modules
    '@/node-modules': '<rootDir>/node_modules',
  },
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
