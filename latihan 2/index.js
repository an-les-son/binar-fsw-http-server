const http = require("http");
const fs = require("fs");
const PORT = 4000;

// function yang ada dalam parameter namanya callback
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    // nambahin rute / routes
    const url = req.url;
    if (url == "/") {
      fs.readFile("./index.html", null, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("something not found");
        } else {
          res.write(data);
        }
        res.end();
      });
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
