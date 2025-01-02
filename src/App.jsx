import BarraNavegacion from './common/navbar/BarraNavegacion'
import Inicio from './pages/inicio/inicio'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListaJuegos from './pages/listaJuegos/listaJuegos'
import ListaPrecios from './pages/listaPrecios/listaPrecios'

import FormularioPedido from './pages/formularioPedido/formularioPedido'

function App() {
 

  return (
    <>
    <BarraNavegacion></BarraNavegacion>
    <><ListaJuegos></ListaJuegos></>
    </>
  )
}

export default App
