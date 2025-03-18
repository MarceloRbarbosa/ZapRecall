import styled from "styled-components"
import Perguntas from "./Perguntas"

function Principal({cartas}){
return (
    <Lista>
    {cartas.map((carta, index) => <Perguntas pergunta ={carta.pergunta} resposta={carta.resposta} i={index} key={index}/>)} 
    </Lista>
)
}

export default Principal


const Lista = styled.ul`
    display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 100px;
`