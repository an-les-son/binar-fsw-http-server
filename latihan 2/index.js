const http = require("http");
const PORT = 4000;

// function yang ada dalam parameter namanya callback
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    // nambahin rute / routes
    const url = req.url;
    if (url == "/") {
      res.write("ini dari routes utama");
      res.end();
    } else if (url == "/anjar") {
      res.write("ini dari routes anjar");
      res.end();
    } else if (url == "/oki") {
      res.write("ini dari routes oki");
      res.end();
    }
  })
  .listen(PORT, () => {
    console.log("server is listening to port", PORT);
  });
