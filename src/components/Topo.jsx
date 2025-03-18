import styled from "styled-components"
import logo from '../assets/logo.png'

function Topo(){
    return (
    <Titulo>
        <img src={ logo }></img>
        <p>ZapRecall</p>
     </Titulo>
)
}

export default Topo


const Titulo = styled.div`
display: flex;
    width: 100%;
    height: 130px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    img {
        width: 100px;
        max-width: 100%;
        height: auto;
    }
    p{
        color: white;
        margin: 14px 0px 0px;
        font-family: "Recursive", sans-serif;
        font-size:xx-large;
        font-weight: 700;
}
`



