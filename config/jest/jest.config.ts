import path from 'path';

export default {
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: 'jest',
    },
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTest.ts'],
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
};
