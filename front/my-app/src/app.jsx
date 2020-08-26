import React from 'react';
import {Button,InputForm,Div} from './style'
import axios from "axios"
import { wait } from '@testing-library/react'
function App() {

        // valor total a ser pago(valor do produto)
        // valor do dinheiro do cliente(valor da cédula que pagou)
        // informa o valor minimo de moeda e células a ser pago
        
    const getApi = async() => {

        const result =await axios.get("http://localhost:3333/")
        console.log(result.data)
    }

    return (
        
        <Div>
            <h3>Sistema de troco</h3>
           <InputForm placeholder="Valor total do produto:"></InputForm> 
           <br></br>     
           <br></br>
            <InputForm placeholder="Coloque o valor aqui:"></InputForm>
           <br></br>
           <br></br>
           
           <Button onClick={()=>{getApi()}}> OK </Button>
            <h4>Troco a ser devolvido</h4>
        </Div>
    )
}
export default App;