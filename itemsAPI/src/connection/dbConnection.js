const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    //use your own password
    password: "kokoloko",
    database: "myitems"
  });

  export default connection;