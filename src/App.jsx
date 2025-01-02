import BarraNavegacion from "./common/navbar/BarraNavegacion";
import Inicio from "./pages/inicio/inicio";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaJuegos from "./pages/listaJuegos/listaJuegos";
import ListaPrecios from "./pages/listaPrecios/listaPrecios";
import FormularioPedido from "./pages/formularioPedido/formularioPedido";
import ResumenPedido from "./pages/resumenPedido/resumenPedido";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <BarraNavegacion></BarraNavegacion>
        <Routes>
          <Route exac path="/" element={<Inicio></Inicio>}></Route>
          <Route exac path="/precios" element={<ListaPrecios></ListaPrecios>}></Route>
          <Route exac path="/juegos" element={<ListaJuegos></ListaJuegos>}></Route>
          <Route exac path="/formulario" element={<FormularioPedido></FormularioPedido>}></Route>
          <Route exac path="/resumen" element={<ResumenPedido></ResumenPedido>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
