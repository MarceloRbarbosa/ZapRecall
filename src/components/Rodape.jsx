import { useState, useSyncExternalStore } from "react"
import styled from "styled-components"


function Rodape({cartas}){
    const [contador , setContador] = useState(0);

    return (
    <BarraInferior >
        <span >  CONCLUÍDOS</span>
    </BarraInferior>
    )
}

export default Rodape

const BarraInferior = styled.div`
    background-color: white;
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 0;
        left: 0;
        
    span {
    font-family: "Recursive", sans-serif;
    }
`