import GlobalStyled from './src/GlobalStyled'
import CARTAS from './mock'
import Topo from "./src/components/Topo"
import Principal from "./src/components/Principal"
import Rodape from './src/components/Rodape'


function App() {
  return (
    <>
    <GlobalStyled />
    <Topo/>
    <Principal cartas={CARTAS} />
    <Rodape cartas={CARTAS}/>
    </>
  )
}

export default App
