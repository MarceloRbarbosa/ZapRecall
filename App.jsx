import { useState } from "react"
import GlobalStyled from './src/GlobalStyled'
import CARTAS from './mock'
import Topo from "./src/components/Topo"
import Principal from "./src/components/Principal"
import Rodape from './src/components/Rodape'


function App() {
  const [contador , setContador] = useState(0);

  function atualizarContador(){
    setContador( cont => cont + 1);
  }


  return (
    <>
    <GlobalStyled />
    <Topo/>
    <Principal cartas={CARTAS}  atualizarContador = { atualizarContador }/>
    <Rodape contador={ contador } tamanho = {CARTAS.length}/>
    </>
  )
}

export default App
