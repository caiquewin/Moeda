const express = require("express");//metodo framework chamada de rota
const trocoController = require("./controller/trocoController")

const routes = express();

//CRUD =  C = CREATE, R = Read, U = update, D = Delete
//POST = create, Get = read, Put = update e Delete =delete

routes.post("/",trocoController.calc50)













module.exports=routes;
