//Importando Módulos
const Client = require("../models/Client")

async function find_clients (req,res){
    await Client.find().then(listagem =>{
        res.send(listagem)
    }) 
}    

module.exports = find_clients