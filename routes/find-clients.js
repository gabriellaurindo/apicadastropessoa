//Importando Módulos
const express = require('express')
const router = express.Router()
const find_clients = require('../api/controllers/find-clients')

//Rota de Pesquisa Geral
router.get('/consultar', function (req, res) {
    find_clients(req,res)
})
   
//Exportando Rota Raiz
module.exports = router