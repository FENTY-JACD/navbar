DROP DATABASE IF EXISTS fentynav;

CREATE DATABASE fentynav;

\c fentynav;

CREATE TABLE products (
  id SERIAL primary key,
  name VARCHAR(250) NOT NULL,
  price INT NOT NULL,
  foreground VARCHAR(1000) NOT NULL
);