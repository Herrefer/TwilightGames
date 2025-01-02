import BarraNavegacion from './common/navbar/BarraNavegacion'
import Inicio from './pages/inicio/inicio'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListaJuegos from './pages/listaJuegos/listaJuegos'

function App() {
 

  return (
    <>
    <BarraNavegacion></BarraNavegacion>
      <div>
        <h1>Esta página funciona</h1>
        <h2>Y ahora tiene bootstrap</h2>
        <h3>Ademas las fuentes funcionan</h3>
      </div>
    </>
  )
}

export default App
