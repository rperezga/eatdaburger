-- Create the database
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);

