const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const libro = db.define('libro', {
    nombre: {
        type: DataTypes.STRING
    },
    cantidad: {
        type: DataTypes.INTEGER
    },
    precio: {
        type: DataTypes.FLOAT
    },
    descripcion: {
        type: DataTypes.STRING
    }
});

module.exports = libro;