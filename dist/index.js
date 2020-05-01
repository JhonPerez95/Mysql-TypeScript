"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./routes/router"));
const database_1 = __importDefault(require("./mysql/database"));
const server = server_1.default.init(3000);
server.app.use(router_1.default);
// DataBase
database_1.default.instance;
server.start(() => {
    console.log("Server Run in the port 3000");
});
