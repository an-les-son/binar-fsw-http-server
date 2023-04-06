const http = require("http");
const fs = require("fs");
const PORT = 4000;

function onRequest(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./index.html", null, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.write("something not found");
    } else {
      response.write(data);
    }
    response.end();
  });
}

http.createServer(onRequest).listen(PORT);
