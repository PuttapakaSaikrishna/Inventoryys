const jsonServer = require("json-server"); // importing json-server library
const cors = require("cors"); // importing cors middleware
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // choose port from here like 8080, 3001

// Use CORS middleware
server.use(cors());  // This enables CORS for all routes

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
