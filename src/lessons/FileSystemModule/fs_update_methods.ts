import fs from "fs";

fs.appendFile(__dirname + '/mynewfile1.txt', ' This is my text.',(err)=>{
  if(err) throw err;
  console.log('Updated!');
});

fs.writeFile(__dirname + '/mynewfile3.txt', 'This is my text', (err)=> {
  if(err) throw err;
  console.log('Updated!');
});