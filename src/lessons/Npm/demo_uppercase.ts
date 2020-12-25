import {upperCase} from "upper-case";
import http from "http";

http.createServer((req, res) =>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(upperCase("hello world!!"));
  res.end();
}).listen(8080);
