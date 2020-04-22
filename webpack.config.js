const path = require('path');
const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const envify = require('process-envify');
const env = require('./env');
const rootPath = path.join(__dirname, 'src');
module.exports = ({ prod } = {}) => ({
    mode: 'development',
    context: rootPath,
    entry:      ['./platforms/server/index.js'],
    output: {
        path:     path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.ts'],
    },
    resolve: {
        alias: {
            '@root':    rootPath,
            '@core':    path.join(rootPath, 'core'),
            '@utils':   path.join(rootPath, 'utils'),
            '@server':  path.join(rootPath, 'platforms/server'),
        },
    },
    node: {
        __filename: false,
        __dirname: false
    },
    plugins: [
        new webpack.DefinePlugin(envify(env)),
        !prod && new webpack.HotModuleReplacementPlugin(),
        !prod && new NodemonPlugin(),
    ].filter(Boolean),
    devtool: prod ? 'hidden-source-map' : 'cheap-module-eval-source-map',
});
