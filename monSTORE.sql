DROP DATABASE IF EXISTS monStore_db;
CREATE DATABASE monStore_db;

USE monStore_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    product_description VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, product_description, department_name, price, stock_quantity)
VALUES ("Giant Wish Turtle", "Friend to all children!", "Kaiju", 900.00, 5)
, ("Giant Climbing Gorilla", "Mostly only friend to blondes...", "Kaiju", 800.00, 6)
, ("Giant Nuclear Lizard", "Friend to NO ONE.", "Kaiju", 1000.00, 2)
, ("Freeze Ray", "Bring appropriate winter gear", "Rays & Blasters", 500.00, 7)
, ("Shrink Ray", "Watch your step!", "Rays & Blasters", 600.00, 8)
, ("Gravity Gun", "Never use outdoors.", "Rays & Blasters", 700.00, 10)
, ("Frankenstein & Son's Neck Bolts", "Excellent conductors!", "Classic Monsters", 200.00, 30)
, ("Invisible Man Tonic", "Wear gloves while applying.", "Classic Monsters", 300.00, 12)
, ("Van Helsing's Wolfman Repellent", "5 Count per box. 100% Pure Silver!", "Classic Monsters", 100.00, 40)
, ("Vintage Teleport Platform", "Avoid flies at ALL costs!", "Tempting Fate", 1200.00, 1);

SELECT * FROM products;