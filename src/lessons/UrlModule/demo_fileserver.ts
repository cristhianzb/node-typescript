import http from "http";
import url from "url";
import fs from "fs";

http.createServer((req, res) => {
  const q = url.parse(req.url + "", true);
  const filename = __dirname + q.pathname;  
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    return res.end();
  });
}).listen(8080);
