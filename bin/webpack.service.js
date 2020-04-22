const path = require('path');
const rootPath = path.join(__dirname, '../src');
module.exports = {
    mode:       'development',
    entry:      [ 'eventsource-polyfill' 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',],
    output: {
        path:     path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
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
    devtool: 'cheap-module-eval-source-map',
}