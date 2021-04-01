const CracoLessPlugin = require('craco-less');
const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        alias: configPaths('./tsconfig.paths.json')
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#389e0d' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
