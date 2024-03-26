create database friends_car_rental;
use friends_car_rental;

CREATE TABLE Login(
id INT AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(255) NOT NULL UNIQUE,
   contrasena VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

SELECT * FROM Login;

CREATE TABLE Registro (
    id INT AUTO_INCREMENT PRIMARY KEY,
	tipo_usuario ENUM('admistrador', 'cliente') NOT NULL,
    nombre VARCHAR(255) NOT NULL,
   correo VARCHAR(255) NOT NULL UNIQUE,
   contrasena VARCHAR(255) NOT NULL,
    repetir_contrasena VARCHAR(255) NOT NULL,
    FOREIGN KEY (correo) REFERENCES login(correo),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

SELECT * FROM Registro;

CREATE TABLE Vehiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(255),
    modelo VARCHAR(255),
    color VARCHAR(50),
    transmision ENUM('automática', 'manual'),
    kilometraje DECIMAL(10, 2),
    precio_dia DECIMAL(10, 2),
    imagen LONGBLOB,
    disponibilidad BOOLEAN,  
    id_usuario INT, 
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

SELECT * FROM Vehiculos;

CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    cedula VARCHAR(50),
    edad INT,
    correo VARCHAR(255),
    imagen LONGBLOB
);

SELECT * FROM Usuarios;

CREATE TABLE Reservar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(255),
    cantidad_dias INT,
    fecha_inicial DATE,
    fecha_final DATE,
    id_vehiculo INT,
    FOREIGN KEY (id_vehiculo) REFERENCES Vehiculos(id),
     correo_usuario VARCHAR(255), 
    FOREIGN KEY (correo_usuario) REFERENCES Registro(correo)
);

SELECT * FROM Reservar;

CREATE TABLE Devolver (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    hora TIME,
    lugar VARCHAR(255),
    id_reserva INT,
    FOREIGN KEY (id_reserva) REFERENCES Reservar(id)
);

SELECT * FROM Devolver;

CREATE TABLE Contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    correo VARCHAR(255),
    mensaje TEXT,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM Contacto;

