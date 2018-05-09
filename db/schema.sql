### Schema

DROP DATABASE IF EXISTS icecream_db;

CREATE DATABASE  icecream_db;

USE lri6zp5bxk0dqsyw;

CREATE TABLE icecream (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

