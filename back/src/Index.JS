const { request, response } = require("express");

const cors = require('cors')


const express = require("express") //importação da framework express

const api = express() //criando variavel para receber valor do express

api.use(express.json())//Pra api enter a json

api.use(cors())

api.use(require('./routes'))

api.listen(3333,()=>{console.log("Api is running on port 3333")})//porta localhost


