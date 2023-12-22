const { createServer } = require('http');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Target URL of your API
const apiTarget = process.env.API_URL_SITASI;

// Proxy middleware configuration
const apiProxy = createProxyMiddleware('/v1', {
    target: apiTarget,
    changeOrigin: true,
    // ... tambahkan konfigurasi lainnya jika diperlukan
});

// Create a simple server that forwards requests to the proxy
createServer((req, res) => {
    // You can apply more advanced logic here if needed
    apiProxy(req, res);
}).listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});
