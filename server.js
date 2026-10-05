const http = require('http');

const PORT = process.env.PORT || 3000;
const NAME = 'limen-test';
const VERSION = '1.0.0';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && req.url === '/health') {
    res.statusCode = 200;
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  if (req.method === 'GET' && (req.url === '/' || req.url === '')) {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        hello: 'Limen seat test',
        name: NAME,
        version: VERSION,
      })
    );
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'not found' }));
});

server.listen(PORT, () => {
  console.log(`${NAME} v${VERSION} listening on http://localhost:${PORT}`);
});
