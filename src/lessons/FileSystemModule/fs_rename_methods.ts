import fs from "fs";

fs.rename(__dirname + '/mynewfile1.txt', __dirname + '/myrenamedfile.txt', (err)=>{
  if(err) throw err;
  console.log('File Renamed!');
});