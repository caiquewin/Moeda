import React,{useState} from 'react';
import {Button,InputForm,Div} from './style'
import axios from "axios"
import { wait } from '@testing-library/react'

var valorPro,valorPag="";
function App() {

        // valor total a ser pago(valor do produto)
        // valor do dinheiro do cliente(valor da cédula que pagou)
        // informa o valor minimo de moeda e células a ser pago
        
        const [troco,setTroco]=useState(0);

        const [teste,setTeste]=useState('');

        const [valorProduto,setValorProduto]=useState(0);

        const [valorPago,setValorPago]=useState(0);

        // const getTotal= async(event)=>{
            
        // }
        
        //função
        const handleInputProduto = async(event)=>{
            valorPro=event.target.value;
        } 
        
        const handleInputPago = async(event)=>{
            valorPag=event.target.value;
            
        }
    
        const handleClick = async() => {
            await setValorProduto(valorPro)
            await setValorPago(valorPag)
            postApi()
            
        }
        const postApi=async()=>{
             const result =await axios.post("http://localhost:3333/",{pago:valorPag,produ:valorPro})
            console.log(valorPag,valorPro)
            setTroco(result.data.troco)

            console.log(result.data)
            // return result.data;
        }
        

    return (
        
        <Div>
            <h3>Sistema de troco</h3>
           <InputForm type="Number" onChange={(event)=>{handleInputProduto(event)}} placeholder="Valor total do produto:"></InputForm> 
           <br></br>     
           <br></br>
            <InputForm type="Number" onChange={(event)=>{handleInputPago(event)}} placeholder="Valor recebido:"></InputForm>
           <br></br>
           <br></br>
           
           <Button onClick={()=>{handleClick()}}> OK </Button>
            <h4>Troco a ser devolvido</h4>
            <h3>{troco<0?<h3 style={{color:'red'}}>Cliente pago valor insuficiênte</h3>:troco}</h3>
        </Div>
    )
}
export default App;