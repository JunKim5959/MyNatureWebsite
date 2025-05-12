CREATE TABLE Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    product_price DOUBLE,
    product_inventory INT
);

INSERT INTO Products (product_name, product_price, product_inventory) VALUES
('Notebook', 9.99, 100),
('Pen', 1.49, 200),
('Backpack', 24.99, 50);