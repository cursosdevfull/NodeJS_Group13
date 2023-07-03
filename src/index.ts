import express from "express";
import http from "http";

const app = express();

app.get("/", (req, res) => {
  res.status(200).type("text/plain").send("Hello World");
});

http.createServer(app).listen(3000, () => console.log("Server running..."));

/*http
  .createServer((req, res) => {*/

/*res.writeHead(200, { "content-type": "text/plain" });
    res.write("Hello World");
    res.write("Hola mundo");
    res.end();*/
/*})
  .listen(3000);*/

// 20x = success
// 30x = redirect
// 40x = client error
// 50x = server error
