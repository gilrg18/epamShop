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
**Server will run on port 3000**
* npm start

**Must have running mysql db on port 3306 with database schema called myitems and table called items**
**Create Table items in mysql workbench**
CREATE TABLE `items` (
  `itemID` int NOT NULL AUTO_INCREMENT,
  `itemName` varchar(60) NOT NULL,
  `itemDescription` varchar(250) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`itemID`),
  UNIQUE KEY `itemID_UNIQUE` (`itemID`)
)

**Insert data into items table**
INSERT INTO `myitems`.`items` (`itemName`, `itemDescription`, `price`, `image`) VALUES ('Epam Shirt', 'Epam Essentials Unisex Short-Sleeve T-Shirt', '17.99', 'https://media.glassdoor.com/lst2x/8c/25/31/b8/summer-party.jpg'); 

INSERT INTO `myitems`.`items` (`itemName`, `itemDescription`, `price`, `image`) VALUES ('Green Epam Shirt ', 'Help create awareness and keep Earth green with this awesome shirt!', '14.99', 'https://media.glassdoor.com/lst2x/f4/26/e6/1e/epamers-in-mexico-celebrate-earth-day.jpg'); 

INSERT INTO `myitems`.`items` (`itemName`, `itemDescription`, `price`, `image`) VALUES ('Beanie', 'Regular beanie', '9.99', 'https://www.lafuma.com/media/catalog/product/cache/18/image/640x/9df78eab33525d08d6e5fb8d27136e95/l/f/lfv11521-4809-bonnet-femme-gris-wonder-beanie-w_1.jpg'); 

INSERT INTO `myitems`.`items` (`itemName`, `itemDescription`, `price`, `image`) VALUES ('Jeans', 'Basic jeans', '29.99', 'https://www.collinsdictionary.com/images/thumb/jeans_96398333_250.jpg?version=4.0.175'); 

INSERT INTO `myitems`.`items` (`itemName`, `itemDescription`, `price`, `image`) VALUES ('Umbrella', 'Stylish umbrella', '15.99', 'https://www.ikea.com/mx/en/images/products/knalla-umbrella-black__0711833_pe728511_s5.jpg?f=m '); 


  

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
