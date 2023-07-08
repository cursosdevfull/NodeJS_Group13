import { ServerBootstrap } from "./bootstrap/Server.bootstrap";

const server = new ServerBootstrap();

//((a, b) => console.log("Suma", a + b))(3, 4);

(async () => {
  try {
    const promises = [server.initialize()];

    const response = await Promise.all(promises);

    //const response = await resultHttp;
    console.log(response);
  } catch (error) {
    //console.log(error);
    console.log("An error happened");
    process.exit(1);
  }
})();

/*async function upServer() {
  try {
    const resultHttp = server.initialize();
    const response = await resultHttp;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

upServer();*/

/*resultHttp.then((messageReturned: string) => {
  console.log(messageReturned);
});

resultHttp.catch((messageErrorReturned: NodeJS.ErrnoException) => {
  console.log(messageErrorReturned);
});*/

//http.createServer(app).listen(3000, () => console.log("Server running..."));

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
