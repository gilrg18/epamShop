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
**CREATE TABLE `myitems`.`items` (**
**`itemID` INT NOT NULL,**
**`itemName` VARCHAR(60) NOT NULL,**
**`itemDescription` VARCHAR(250) NOT NULL,**
**`price` DECIMAL NOT NULL,**
**PRIMARY KEY (`itemID`),**
**UNIQUE INDEX `itemID_UNIQUE` (`itemID` ASC) VISIBLE);**
  
> npm start

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
