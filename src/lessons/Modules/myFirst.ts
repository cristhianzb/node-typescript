import  http  from "http";
import * as dt from "./demo_modules";

http.createServer((req, res)=>{
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);