"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class Mysql {
    constructor() {
        this.conneted = false;
        console.log("Clase inicializada");
        this.cnn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "node_db",
        });
        this.connectDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this.instance.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            if (results.length === 0) {
                callback("El registro solicitado no existe");
            }
            callback(null, results);
        });
    }
    connectDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conneted = true;
            console.log("Data base is Connect");
        });
    }
}
exports.default = Mysql;
