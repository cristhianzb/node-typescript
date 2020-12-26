import formidable from "formidable";
import http from "http";
import fs from "fs";

http.createServer((req, res) => {
  if(req.url == '/fileupload'){
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files)=>{
      const oldpath = files.fielupload.path;
      const newpath = __dirname + "/" + files.fielupload.name;
      await fs.copyFile(oldpath, newpath, (err)=>{
        if(err) throw err;        
      });
      await fs.unlink(oldpath, (err) => {
        if (err) throw err;
      });
      res.write('File uploaded and moved');
      res.end();
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="fielupload"/><br/>');
    res.write('<input type="submit"/>');
    res.write('</form>');
    return res.end(); 
  }
}).listen(8080);
