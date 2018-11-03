# bamazon

"monSTORE" (aka bamazon) is an Amazon-like storefront made with MySQL. 

- This app takes orders from customers and chooses from a stock of items generated within a MySQL database. 

    - The table will generate with a list of: 
        - Item ID #
        - Product Name
        - Product Description
        - Department Name
        - Price
        - Store Quantity

There are two steps to use on this product after activating Node: 

    1. You will be asked to enter the ID number for the item you wish to purchase. 
    2. You will be asked to specify the number of that particular item that you would like. 

If enough items are in stock you will receive the calculated price of your purchase the table will update to show how many remain. 

If there are not enough items in stock the user will be asked to start again. 

Technologies Used: 

    - JavaScript
    - jQuery
    - Node
    - MySQL
    - Inquirer (for user inputs)
    - CLI-Table (to generate the table on the UI)

Screenshots showing each step taken in the command line process can be found in the appropriate folder. 

Further Steps: 

    - Creation of a "manager" site
    - Creation of an "executive" site