import path from 'path';
import { defineConfig, rspack } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import CompressionPlugin from 'compression-webpack-plugin';
import { dependencies } from './package.json';

const deps = {
  ...dependencies,
};

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
    historyApiFallback: true,
    compress: false,
    port: 9010,
  },
  moduleFederation: {
    options: {
      name: 'rm',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteModule': './src/Desktop',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        '@ant-design/cssinjs': {
          singleton: true,
        },
        "@repro/some-app": {
          singleton: true
        }
      },
    },
  },
  tools: {
    htmlPlugin: {
      publicPath: '/',
    },
    // rspack: {
    //   plugins: [
    //     new CompressionPlugin(),
    //   ],
    // },
  },
});
