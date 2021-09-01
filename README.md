# epamShop

epamShop is a Web Application which simulates the purchase of online products in which its users can see a catalog of epam related products, select the ones they like the most to add them to the cart and proceed to check the final price of their products

* epamShop includes three different views:

  * Login View: 
      Simple login interface where users can log in according to one of two account types: USER type, which gives access to the the User View, and ADMIN type which gives access to the Administrator view.
      To log in as USER: 
      Username: user
      Password: user
      To log in as ADMIN
      Username: admin
      Password: admin

  * User View:
      A navigation var which has two tabs. The "Shop" tab where the user checks the products which are aligned in a card fashioned way and add them to the cart.
      And the "Cart Tab", where the user can check a list of products that have been added to the cart and increment or decrement the quantity of certain product. Next to the list of products the user can check the summary of the cart's bill. 
  
  * Administrator View: 
      Also includes the navigation var the User View has but with an additional tab "Admin Page", here the user (in this case the administrator) has a list of all the existent products in epamShop. The users can add, update (uploading images is not supported) or delete products as they like (excluding the first four products which are the main epamShop's products,).


# itemsAPI for the backend

*Emphasize* _Backend for epamShop_
* CRUD created with:
  * NodeJS
  * Express to manage routes and handle api requests
  * MySQL to provide a model database

# myshop for the frontend

* User Interface created with:
  * Node Js
  * React Js to create the web app Components
  * Axios to handle api requests
  * Bootstrap for styling

