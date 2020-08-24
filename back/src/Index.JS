const { request, response } = require("express");

const express = require("express") //importação da framework express

const api = express() //criando variavel para receber valor do express

api.use(express.json())//Pra api enter a json

api.get("/",(request,response)=>{response.json("MEU PIRU")})

api.listen(3333,()=>{console.log("Api is running on port 3333")})//porta localhost
