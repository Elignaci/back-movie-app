/*importacion express*/
const express = require('express');

/*importacion de cookie-parser*/
const cookieParser = require('cookie-parser');

/*importar cors*/
const cors = require('cors');

/*importacion de dotenv*/
require('dotenv').config()

/*Guardamos express en una variable para poder utilizarlo*/
const app=express();

/*Servidor*/
const port=process.env.PORT

/*Middlewares*/
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

app.use(cors());

// parse application/json
app.use(express.json())

/*Rutas*/
app.use('/api/v1/movies', require('./routers/apiRouter'))

/*Servidor a la escucha*/
app.listen(port, ()=>{
    console.log(`Server on port ${port}`)
})

//Importar cors!!