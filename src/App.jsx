import BarraNavegacion from './common/navbar/BarraNavegacion'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListaJuegos from './pages/listaJuegos/listaJuegos'
import ResumenPedido from './pages/resumenPedido/resumenPedido'

function App() {
 

  return (
    <>
    <BarraNavegacion></BarraNavegacion>
    <ResumenPedido></ResumenPedido>
    </>
  )
}

export default App
