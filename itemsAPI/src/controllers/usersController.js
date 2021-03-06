import connection from '../connection/dbConnection.js'

connection.connect(err => {
    if (err) throw err;
  });
  
  export const login = (req, res) => {
    const userID = req.body.userID,
    password = req.body.password;
    // connection.query("SELECT * FROM myitems.users WHERE userID = ? AND password = ?;",
    connection.query("SELECT * FROM heroku_a98b46e7617b377.users WHERE userID = ? AND password = ?;",
    [userID, password], 
    (err, result) => {
      if (err) {
        throw err
      };
      if(result.length>0){
          res.send(result);
          console.log(result[0].accountType)
      }else{
          res.send({ message: "Wrong username/password"});
      }
      
    });
  };

  export const registerUser = (req, res) => {
    const newUserID = req.body.userID,
      newPassword = req.body.password,
      newType = req.body.accountType;
    connection.query(
      // "INSERT INTO myitems.users (`userID`, `password`, `accountType`) VALUES (?, ?, ?)",
      "INSERT INTO heroku_a98b46e7617b377.users (`userID`, `password`, `accountType`) VALUES (?, ?, ?)",
      [newUserID, newPassword, newType],
      (err, rows) => {
        if (err) throw err;
        console.log(`Succesfully added user, ${newUserID, newType}`);
        res.json(rows);
      }
    );
  
  };