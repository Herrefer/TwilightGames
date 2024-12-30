import BarraNavegacion from './common/navbar/BarraNavegacion'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListaJuegos from './pages/listaJuegos/listaJuegos'
import FormularioPedido from './pages/formularioPedido/formularioPedido'

function App() {
 

  return (
    <>
    <BarraNavegacion></BarraNavegacion>
    <FormularioPedido></FormularioPedido>
    </>
  )
}

export default App
