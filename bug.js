const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common mistake: forgetting to set the Content-Type header
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});