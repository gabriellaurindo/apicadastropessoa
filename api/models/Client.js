//Importando Módulos
const mongoose = require('mongoose')

//Definindo Schema
const Schema = mongoose.Schema

//Criando e configurando um novo Schema
const clientSchema = new Schema({
    nome:{
       type: String,
       require:true
    },
    flag:{
        type: String,
        uppercase: true,
        required: true,
        maxlength: 1,
        default:"A"
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    sobrenome:{
        type:String,
        require:true,
    },
    cpf:{
        type:String,
        require:true,
        unique: true
    },
    data_de_criacao:{
        type: Date,
        default: Date.now
    },
    data_nasc:{
        type: Date,
        require:true
    }
})

//Definindo modelo de usuário baseado no Schema
const Client = mongoose.model("Client", clientSchema)

//Exportando Módulo
module.exports = Client


