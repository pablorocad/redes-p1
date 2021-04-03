DROP DATABASE IF EXISTS librosRedes;
CREATE DATABASE librosRedes;
USE librosRedes;

CREATE TABLE libros(
	id INTEGER AUTO_INCREMENT,
    nombre NVARCHAR(75) NOT NULL,
    cantidad INTEGER NOT NULL,
    precio FLOAT NOT NULL,
    descripcion NVARCHAR(150),
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP,
    CONSTRAINT pk_libros PRIMARY KEY (id)    
);