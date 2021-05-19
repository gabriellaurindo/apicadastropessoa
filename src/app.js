//Importar Módulos
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

//Config body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Config cors
app.use(cors());

//Importar Rotas
const index =   require('../routes/index')
const register =   require('../routes/register-client')
const find_clients =   require('../routes/find-clients')

//Usar Rotas
app.use('/',index)
app.use('/',register)
app.use('/',find_clients)

//Importando Banco
require("../config/database")

module.exports = app