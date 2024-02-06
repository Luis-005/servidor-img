const express = require('express');

//llamamos libreria
const multer = require('multer');

//aca creamos una carpeta con la ruta del server donde se van a almacenar los img
const upload = multer({ dest: 'uploads/'})

const app = express();
//creamos memoria donde crearemos la url
app.post('/imagenes/serverfree', upload.single('save'),(req, res) => {
    console.log(req.file)
        res.send('Termina')
});

//mensaje de start del server
app.listen(3000, () =>{
    console.log('servidor escuchando en puerto 3000')
});