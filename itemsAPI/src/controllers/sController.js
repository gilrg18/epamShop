const mysql = require("mysql2");

export const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  //use your own password
  password: "kokoloko",
  database: "myitems"
});

connection.connect(err => {
  if (err) throw err;
  console.time("mysql");
  console.log("Succesfully connected to epamShop database");
});


export const getItems = (req, res) => {
  connection.query("SELECT itemID, itemName, itemDescription, price, image FROM myitems.items;", (err, rows, field) => {
    if (err) {
      throw err
    };
    console.log("Succesfully fetched items");
    res.json(rows);
  });
};

export const getItemsWithID = (req, res) => {
  const theItemID = req.params.itemID;
  connection.query(
    "SELECT itemID, itemName, itemDescription, price FROM myitems.items WHERE itemID = ?;",
    [theItemID],
    (err, rows, field) => {
      if (err) throw err;
      console.log("Succesfully fetched item with id:", theItemID);
      res.json(rows);
    }
  );
};


export const createItem = (req, res) => {
  const newID = req.body.itemID,
    newName = req.body.itemName,
    newDescription = req.body.itemDescription,
    newPrice = req.body.price;
  connection.query(
    "INSERT INTO items (`itemID`, `itemName`, `itemDescription`, `price`) VALUES (?, ?, ?, ?)",
    [newID, newName, newDescription, newPrice],
    (err, rows, field) => {
      if (err) throw err;
      console.log(`Succesfully added item, ${newName}`);
      res.json(rows);
    }
  );

};


export const updateItem = (req, res) => {
  const idToUpdate = req.params.itemID,
    newName = req.body.itemName,
    newDescription = req.body.itemDescription,
    price = req.body.price;

  connection.query(
    "UPDATE items SET itemName = ?, itemDescription= ?, price= ? WHERE itemID = ?;",
    [newName, newDescription, price, idToUpdate],
    (err, rows, field) => {
      if (err) throw err;
      console.log("Succesfully updated item", idToUpdate);
      res.json(rows);
    }
  );
};


export const deleteItem = (req, res) => {
  const theItemID = req.params.itemID;
  connection.query(
    "DELETE FROM items WHERE itemID = ?;",
    [theItemID],
    (err, rows, field) => {
      if (err) throw err;
      console.log("Succesfully deleted item with id:", theItemID);
      res.json(rows);
    }
  );
};
