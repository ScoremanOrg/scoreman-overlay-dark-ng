const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('**/!serverconfig', createProxyMiddleware({
        target: 'http://localhost:8080/!serverconfig',
        changeOrigin: true
    }));
}