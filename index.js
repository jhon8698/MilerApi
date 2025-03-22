require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

//Ruta de Prueba
app.get('/', (req, res) => {
    res.json({message : 'Hola Mundo'});
});

//inicar el servidor
app.listen(PORT,'0.0.0.0', ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});