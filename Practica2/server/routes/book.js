const { Router } = require('express');
const { agregarLibro, verLibros, getLibro } = require('../controller/book');
const router = Router();

// RUTA PARA VER TODOS LOS LIBROS
router.get('/read', verLibros);

// RUTA PARA VER LIBRO POR ID
router.post('/byPK', getLibro);

// RUTA PARA AGREGAR UN LIBRO
router.post('/add', agregarLibro);

module.exports = router;