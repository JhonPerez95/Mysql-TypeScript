"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    folderPath() {
        const publicPath = path.resolve(__dirname, "../public");
        this.app.use(express.static(publicPath));
    }
    static init(port) {
        return new Server(port);
    }
    start(callback) {
        this.app.listen(this.port, callback());
        this.folderPath();
    }
}
exports.default = Server;
