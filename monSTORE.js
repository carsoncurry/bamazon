var mysql = require("mysql");
var inquirer = require("inquirer");
// this is a utility that helps render the node inputs in an easier to view table
var Table = require("cli-table");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
// leave password empty after demoing and before pushing to GitHub!!
    password: "Spidermensch08",
    database: "monStore_db"
});

function shoppingCart() {
    // create database connection
    connection.query("SELECT * FROM products", function(err, res) {
        // this generates our table
        var table = new Table({
            head: ["Item ID", "Product Name", "Product Description", "Department", "Price", "Stock Quantity"]
        });

        // this populates our table
        console.log("Welcome to the monSTORE, you're one-stop location for all scientific items of the more ... mad variety!!!");
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].product_description, res[i].department_name, res[i].price.toFixed(2), res[i].stock_quantity]);
        }
        // this generates our queries
        console.log(table.toString());
        inquirer.prompt([{
            name: "ID",
            type: "input",
            message: "Which fiendish item would you like to purchase today?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "Quantity",
            type: "input",
            message: "How many items will it take for you to TAKE OVER THE WORLD????",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answer) {
            var chosenId = answer.ID - 1
            var chosenQuantity = answer.Quantity
            if (chosenQuantity < res[chosenId].stock_quantity) {
                console.log("Excellent choice! You will be charged $" + res[chosenId].price.toFixed(2) * chosenQuantity + ".00! We accept all major credit cards...or SOULS!!!!!!!!!!!!!!!!!!!");
                console.log("MWUHAHAHAHAHAHA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: res[chosenId].stock_quantity - chosenQuantity
                }, {
                    item_id: res[chosenId].item_id
                }], function(err, res) {
                    shoppingCart();
                });
            } else {
                console.log("Oh no, it seems we're out of that product! I suppose you'll have to be leaving then...THROUGH THE TRAP DOOR!!!");
                console.log("MWUHAHAHAHAHAHA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                shoppingCart();
            }
        })
    })
}

shoppingCart();