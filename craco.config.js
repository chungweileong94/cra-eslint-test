const path = require('path');

module.exports = {
  eslint: {
    loaderOptions: {
      emitWarning: false,
    },
  },
  babel: {
    plugins: ['@babel/plugin-proposal-optional-chaining'],
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
      },
    },
  },
};
