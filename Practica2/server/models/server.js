const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/connection');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.booksPath = '/api/book';
        
        this.dbConnection();

        //#region  MIDDLEWARES
        var corsOptions = {
            origin: true,
            optionSuccessStatus: 200
        };

        this.app.use(cors(corsOptions));
        this.app.use(bodyParser.json({
            limit: '10mb',
            extended: true
        }));

        this.app.use(bodyParser.urlencoded({
            limit: '10mb',
            extended: true
        }));
        //#endregion MIDDLEWARES

        this.routes();
    }

    // CONEXION CON MYSQL
    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database connected');
        } catch (err) {
            throw new Error(err);
        }
    }

    // ENLAZAR LAS RUTAS AL SERVIDOR
    routes(){
        this.app.use(this.booksPath, require('../routes/book'));
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor nodeJS corriendo localmente en el puerto: ', this.port);
        });
    }
}

module.exports = Server;