const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  //second for url
  //console.log(req.url);
  if (req.url == '/') {
    res.end("hellow form Home sides ");

  } else if (req.url == '/about') {
    res.end("hellow form About sides ");

  } else if (req.url == '/contact') {
    res.end("hellow form Contact sides ");

  } else if (req.url == '/userapi') {
    fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
      console.log(data);
    });
    res.end("hellow form User Api sides ");
  } else {
    res.writeHead(404,{"Content-type":"text/html"});
    res.end(" <h1>404 Error Pages </h1>")
  }


});
server.listen(8000, () => {
console.log("listening port 8000")
})