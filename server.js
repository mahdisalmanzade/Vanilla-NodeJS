// HTTP built-in module
const httpServer = require('http');

const PORT = 3000;
const users = ['Mahdi', 'Reza', 'Ahmad'];

// Creating a httpServer
const server = httpServer.createServer((request, response) => {
  if (request.url == '/' && request.method == 'GET') {
    console.log(request.method);
    response.write(
      `<body style="background: #134; display: flex; align-items: center; justify-content: center">
        <h1 style="color: hotpink">Let's Sharpen Our Vanilla Node.JS Knowledge</h1>
      </body>`
    );
    response.end();
  }

  if (request.url == '/users' && request.method == 'GET') {
    response.write(JSON.stringify(users));
    response.end();
  }
});

//  Listening on port 3000 for incoming requests
server.listen(PORT, () => {
  console.log(`HTTP Server is listening on port ${PORT} for incoming requests`);
});
