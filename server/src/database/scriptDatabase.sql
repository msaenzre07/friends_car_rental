create database friends_car_rental;
use friends_car_rental;

create table login(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(250) UNIQUE,
    password VARCHAR (255)
);

INSERT INTO login (email, password) VALUES
    ('user1', '1234'),
    ('user2', '1234'),
    ('user3', '1234'),
    ('user4', '1234');
