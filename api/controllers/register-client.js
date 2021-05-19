//Importando Módulos
const Client = require("../models/Client")

//Função de login
function  register_client (req,res){
        const {nome, email, cpf, data_nasc, sobrenome} = req.body
        console.log({nome, email, cpf, data_nasc, sobrenome})
        Client.create({nome, email, cpf, data_nasc, sobrenome}).then((sucess)=>{
            
            if (sucess != null){
                res.statusCode = 201
                res.send({Descricao:"Registro criado com sucesso!"})
            }
        }).catch((err) =>{
            console.log("Houve um erro: " + err);
            res.statusCode = 401
            res.send({Error:err})
        })
            
}

//Exportando Módulo
module.exports = register_client