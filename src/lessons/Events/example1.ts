import fs from "fs";

const rs = fs.createReadStream(__dirname + '/demofile.txt');
rs.on('open', ()=>{
  console.log("the file is open")
});