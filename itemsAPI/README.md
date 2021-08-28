# Backend for epamShop
# CRUD created with
* NodeJS
* Express
* Babel
* MySQL
## To install:
* Download and install NodeJS [here](https://nodejs.org/es/download/)
* Download and install MySQL server and workbench [here](https://www.mysql.com/products/workbench/)
* [Install guide](https://www.youtube.com/watch?v=u96rVINbAUI&ab_channel=WebDevSimplified)
* npm i --save express 
* npm i --save nodemon 
* npm i --save-dev babel-cli babel-preset-es2015 babel-preset-stage-0

## To run:

**Must have running mysql db on port 3306 with database schema called myitems and table called items**

CREATE TABLE `items` (
  `itemID` int NOT NULL AUTO_INCREMENT,
  `itemName` varchar(60) NOT NULL,
  `itemDescription` varchar(250) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`itemID`),
  UNIQUE KEY `itemID_UNIQUE` (`itemID`)
)
  

## Tested with Postman:

Update item 4 example:
localhost:3000/myItems/item/4
In postman: PUT request -> body -> raw ->
{
"itemName": "Mug",
"itemDescription": "Simple coffee mug",
"price": "4.99"
} 



* Gilberto Rogel García
