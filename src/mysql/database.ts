import mysql = require("mysql");

export default class Mysql {
  private static _instance: Mysql;

  cnn: mysql.Connection;

  conneted: boolean = false;

  constructor() {
    console.log("Clase inicializada");

    this.cnn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "node_db",
    });
    this.connectDB();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  static ejecutarQuery(query: string, callback: Function) {
    this.instance.cnn.query(query, (err, results: [], fields) => {
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

  private connectDB() {
    this.cnn.connect((err: mysql.MysqlError) => {
      if (err) {
        console.log(err.message);
        return;
      }
      this.conneted = true;

      console.log("Data base is Connect");
    });
  }
}
