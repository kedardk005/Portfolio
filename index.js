console.log('Hello, World!');
console.log('Server is running...');

// Basic HTTP server
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Basic App</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>Your app is now running successfully!</p>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
