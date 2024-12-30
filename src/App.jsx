import BarraNavegacion from './common/navbar/BarraNavegacion'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListaJuegos from './pages/listaJuegos/listaJuegos'

function App() {
 

  return (
    <>
    <BarraNavegacion></BarraNavegacion>
    <><ListaJuegos></ListaJuegos></>
    </>
  )
}

export default App
