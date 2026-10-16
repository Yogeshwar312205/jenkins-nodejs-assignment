const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head><title>Jenkins Assignment</title></head>
      <body>
        <h1>Node.js Application Deployed!</h1>
        <p>Built and tested using Jenkins CI/CD.</p>
      </body>
    </html>
  `);
});

if (require.main === module) {
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running at http://localhost:${PORT}`);
  });
}

module.exports = { server };