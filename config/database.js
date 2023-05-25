//database configuration file
import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "janith1999",
  database: "caerus",
});

export default db;
