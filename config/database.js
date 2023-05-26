//Singleton desgin pattern
import mysql from "mysql";

class Database {
  constructor() {
    this.db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "janith1999",
      database: "caerus",
    });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  getConnection() {
    return this.db;
  }
}

const dbInstance = Database.getInstance();
export default dbInstance.getConnection();

