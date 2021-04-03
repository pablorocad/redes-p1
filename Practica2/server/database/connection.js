const { Sequelize } = require('sequelize');

const db = new Sequelize('librosRedes', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = db;