const CracoLessPlugin = require('craco-less');
const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias');
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app/*': path.join(path.resolve(__dirname, './src/*'))
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAliasPlugin,
      options: {
        alias: configPaths('./tsconfig.paths.json')
      }
    }
  ],
};
