DROP DATABASE IF EXISTS `burger_db`;
CREATE DATABASE `burger_db`;

USE burger_db

CREATE TABLE burgers 
(
id int NOT NULL AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN NOT NULL,
date_created TIMESTAMP,
PRIMARY KEY (id)
);
