//Importando Módulos
const express = require('express')
const router = express.Router()

//Rota Raiz
router.get('/', function (req, res,) {
   res.send({Descrição:'API REST Publica!, Não salve informações confidenciais!!', Rotas:'/cadastro, /consultar' , Version: '1.0.0'})
})


//Exportando Rota Raiz
module.exports = router