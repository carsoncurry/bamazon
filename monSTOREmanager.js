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

function managementPrompt() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "Welcome master!! What items are in need of your expert inspection?",
        choices: ["View Products For Sale", "View Low Inventory", "Add To Inventory", "Add A New Product"]
    }).then(function(answer) {
        switch(answer.action) {
            case "View Products For Sale":
                viewInventory(function() {
                    managementPrompt();
                });
                break;

            case "View Low Inventory":
                viewLowInventory(function() {
                    managementPrompt();
                });
                break;

            case "Add To Inventory":
                addToInventory(function() {
                    managementPrompt();
                });
                break;

            case "Add A New Product":
                addNewProduct(function() {
                    managementPrompt();
                });
                break;
        }
    });
};



managementPrompt()