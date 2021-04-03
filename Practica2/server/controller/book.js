const { Response, Request } = require('express'); 
const libro = require('../models/book');

const agregarLibro = async (req = Request, res = Response) => {
    const body = req.body;

    try{
        const libroInsert = new libro(body);

        await libroInsert.save();
        res.json(libroInsert);
    } catch(err){
        res.status(500).json({
            msg: 'Error al insertar en la base de datos. Contactar administrador',
            err: err
        });
    }

};  

const verLibros = async (req = Request, res = Response) => {
    const libros = await libro.findAll();
    res.json(libros); 
};

const getLibro = async (req = Request, res = Response) => {
    const body = req.body;
    const libros = await libro.findByPk(body.id);

    if (libros) {
        res.json(libros);
    } else {
        res.status(404).json({
            msg: 'No existe el usuario'
        });
    }    
};

module.exports = {
    agregarLibro,
    verLibros,
    getLibro
}