DROP DATABASE IF EXISTS fenty_nav_videos;

CREATE DATABASE fenty_nav_videos;

USE fenty_nav_videos;

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT primary key,
  name VARCHAR(250) NOT NULL,
  price INT NOT NULL,
  color VARCHAR(300) NOT NULL,
  category VARCHAR(250) NOT NULL,
  descrip VARCHAR(1000) NOT NUll,
  rating INT NOT NULL,
  background VARCHAR(1000) NOT NULL,
  foreground VARCHAR(1000) NOT NULL,
  bg_color VARCHAR(25) NOT NULL


);