//Importando Módulos
const express = require('express')
const router = express.Router()
const register_client = require('../api/controllers/register-client')

//Rota Raiz
router.post('/cadastro',function (req, res,) {
   register_client(req,res)
})

//Exportando Rota de Cadastro de Ordens de Serviço
module.exports = router