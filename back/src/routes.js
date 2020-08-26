const express = require("express");//metodo framework chamada de rota
const trocoController = require("./controller/trocoController")

const routes = express();


routes.get("/",trocoController.calc50)












module.exports=routes;
