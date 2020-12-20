import fs from "fs";

fs.appendFile(__dirname + '/mynewfile1.txt', 'Hello content!', (err) => {
  if(err) throw err;
  console.log("Saved!");  
});

/*
fs.open(__dirname + '/mynewfile2.txt', 'w', (err, file)=>{
  if(err) throw err;
  console.log('Saved!');
});

fs.writeFile(__dirname + '/mynewfile3.txt', 'Hello content!', (err)=>{
  if(err) throw err;
  console.log('Saved!');
});
*/