# cgi-full-stack-development-projects
This is the repository of all the projects from Full Stack Development bootcamp of CGI. This repo includes the exercises, assignments, and the final capstone that seems to be working.


# pizza app

HotPizza is an American restaurant chain and international franchise founded in 2018 in Boston USA. It provides Italian-American cuisine, including pizza, pasta, side dishes and desserts. It has many restaurants worldwide, making it the popular pizza chain in terms of variety and quality. To reach out more customers they have decided to start online sales of pizza and cuisines.
As a web developer you are assigned a task to design frontend of the application which includes the landing page and Cart.
The application should have following functionalities

The application should have navbar on the top. On the left side of navbar it should display the brand logo with brand name. On the right side of navbar it should have Cart icon with badge that should display the current number of items in the cart.
The landing page should display different products like pizza, side dishes, pasta etc. (Use the images available in boilerplate) in card format which should also include the price and Add to Cart button.
When user click on Add to Cart button it should add the item in cart and display the confirmation message as Item added to cart. Also it should increment the value of the cart items in the badge of Cart icon.
When user click on Cart icon it should populate the modal and display the items added in the Cart. If there are no items in the cart then it should display Empty Cart message.
On the cart there should be an option to increase or decrease the quantity of the item. Minimum quantity can be 1 and maximum should be 10. Also the user should be able to remove the item from cart.
Upon incrementing and decrementing the items in cart it should also change the item price, total amount, GST and amount paid accordingly. Refer below image for your reference.
Application should use json-server and persist the data in db.json.

- ## To run the pizza app
  > go to the file location <br/>
  > type `cmd` on the file path. This will open up command prompt <br/>
  > type `json-server db.json --watch`. This will serve as the database of the app for the meantime. <br/><br/>
  > type another `cmd` on the file path.
  > in cmd, type `ng serve --o`. This will open the app in the browser with the default localhost:4200

- ### References of pizza app
  > [Setting up Angular projects](https://angular.io/guide/setup-local)
  


# weather-app
This app is one of the exercises we had from full stack development bootcamp. This app fetch API from an external source. For more info, open the folder `exercise-angular-weather-app`

- ## To run the weather app
  > go to the file location <br/>
  > type `cmd` on the file path. This will open up command prompt <br/>
  > in cmd, type `ng serve --o`. This will open the app in the browser with the default localhost:4200

  
