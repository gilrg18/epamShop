//const mysql = require("mysql2");
import mysql from 'mysql2';
const connection = mysql.createConnection({
    //host: "localhost",
    host:"us-cdbr-east-04.cleardb.com",
    //port: 3306,
    //user: "root",
    user:"b22ae5434a6703",
    password:"d2b75d36",
    //use your own password
    //password: "kokoloko",
    //database: "myitems"
    database: "heroku_a98b46e7617b377"
  });

  export default connection;

  //mysql://b22ae5434a6703:d2b75d36@us-cdbr-east-04.cleardb.com/heroku_a98b46e7617b377?reconnect=true