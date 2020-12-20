import fs from "fs";

fs.unlink(__dirname + '/mynewfile2.txt', (err)=>{
  if(err) throw err;
  console.log('File deleted!');
});