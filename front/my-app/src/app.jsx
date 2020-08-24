import React from 'react'
import {NomeDaClasse} from './style'
function App(){

    const counter =()=>{
        
console.log("click here")
    }
    
    return (
        <div>
        <NomeDaClasse>
            <p>Teste</p>
            <button onClick={()=>{counter()}}><span>click here</span></button>
        </NomeDaClasse>
        </div>
    )
}
export default App;