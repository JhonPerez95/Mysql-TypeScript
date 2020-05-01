import Server from "./server/server";
import router from "./routes/router";
import Mysql from "./mysql/database";

const server = Server.init(3000);
server.app.use(router);

// DataBase
Mysql.instance;

server.start(() => {
  console.log("Server Run in the port 3000");
});
