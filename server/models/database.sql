CREATE DATABASE friends;

CREATE TABLE friendslist(
    friend_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL
);