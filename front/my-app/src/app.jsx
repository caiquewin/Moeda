import React from 'react'
import { NomeDaClasse, Button, Button2 } from './style'
function App() {

    const counter = () => {

        console.log("click here")
    }

    return (
        <div>
            <NomeDaClasse>
                <p>Teste</p>
                <button onClick={() => { counter() }}><span>click here</span></button>
            </NomeDaClasse>
            <Button> OK </Button>
            <Button2>OK2</Button2>
        </div>
    )
}
export default App;