import http from "http";
import fs from "fs";

http.createServer((req, res)=>{
  fs.readFile( __dirname + '/demofile1.html' , (err, data)=>{
    res.writeHead(200,{ 'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);