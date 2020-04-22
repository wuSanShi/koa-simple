const Koa = require('koa');
const middlewareRegister = require('./middlewareRegister');
const webpackConfig = require('./webpack.service');
const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware');
const app = new Koa();
require('babel-polyfill');

var compiler = webpack(webpackConfig);
app.env = 'production';
const devMiddlewareInstance = devMiddleware(compiler, {
    noInfo: true,
    publicPath: '/build/',
    stats: {
        colors: true
    }
})
const hotMiddlewareInstance = hotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
})

middlewareRegister(app);
app.use(devMiddlewareInstance);
app.use(hotMiddlewareInstance);
app.listen(8080, () => {
    console.log('This server is running at http://localhost:' + 8080)
})
