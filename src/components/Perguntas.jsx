import { useState } from "react"
import styled from "styled-components"
import seta from '../assets/seta_play.png'
import virar from '../assets/seta_virar.png'
import erro from '../assets/icone_erro.png'
import certo from '../assets/icone_certo.png'
import quase from '../assets/icone_quase.png'

function Perguntas({pergunta, resposta, i}){   
    const [ladoPergunta, setLadoPergunta]= useState(false);
    const [exibirResposta, setExibirResposta] = useState(false);
    const [corTexto, setCorTexto] = useState('');
    const [icone, setIcone] = useState(seta);
    const [respondido, setRespondido] = useState(false);
    const [travar, setTravar] = useState(false);
    
    

function BotaoProx(){
    if(!ladoPergunta && !travar){
        setLadoPergunta(true);
    }  else if (!exibirResposta && !travar){
        setExibirResposta(true);
    }  
} 

function selecionarResposta(cor, novoIcone){
setLadoPergunta(false);
setExibirResposta(false);
setCorTexto(cor);
setIcone(novoIcone);
setRespondido(true);
setTravar(true);
}
    
return (
    
     <OpcaoPegunta ladoPergunta = {ladoPergunta} exibirResposta = {exibirResposta}>  
        <h1 style={{ color: corTexto, textDecoration: respondido ? "line-through" : "none" }}>
            {!ladoPergunta ? `Pergunta ${i + 1}`: exibirResposta ? resposta : pergunta} 
        </h1>
        <img onClick={BotaoProx}  src= {respondido ? icone : !ladoPergunta ? seta : virar} alt="ícone"></img>
        {exibirResposta &&(
        <Botoes>
            <Botao cor="#FF3030" onClick={() => selecionarResposta("#FF3030" , erro)}>Não lembrei</Botao>
            <Botao cor="#FF922E" onClick={() => selecionarResposta("#FF922E", quase)}>Quase não lembrei</Botao>
            <Botao cor="#2FBE34" onClick={() => selecionarResposta("#2FBE34" , certo)}>Zap!</Botao>
        </Botoes>
        )}
    </OpcaoPegunta> 
    );
}


export default Perguntas

const OpcaoPegunta = styled.div`
    display: flex;
        box-sizing: border-box;
        align-items: ${({ladoPergunta}) => (!ladoPergunta && 'center')};
        justify-content: space-between;
        padding: 5px;
        background-color: ${({ladoPergunta}) => (!ladoPergunta ? '#FFFFFF' : '#FFFFD4')};
        margin-top: 15px;
        height: ${({ladoPergunta}) => (!ladoPergunta ? '65px' : '150px')};
        width: 60%;
        border-radius: 10px;
        position : relative;

    h1{
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
        font-family: "Recursive", sans-serif;
        margin-left: 5px;
}
    img {
        width: 25px;
        height: 25px;
        ${({ladoPergunta}) => ladoPergunta && ` position: absolute; 
                                    bottom: 5px;
                                    right: 15px;`
                                };
        display : ${({exibirResposta})=> (exibirResposta && `none`)};
    }
`

const Botoes = styled.div`
display: flex;
justify-content: space-around;
margin-top: 15px;
position: absolute;
bottom: 5px;
`

const Botao = styled.button`
border-radius: 5px;
border:none;
font-size: 10px;
color: white;
background-color: ${({ cor })=> cor};
cursor : pointer;
width: 90%;
height: 40px;
margin: 5px;
`