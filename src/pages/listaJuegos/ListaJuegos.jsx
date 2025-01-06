import React, { useEffect, useState } from "react";
import "./listaJuegos.css";
import { Button, Container, Form } from "react-bootstrap";
import CardJuego from "./components/CardJuego";
import MenuCarrito from "./components/MenuCarrito";
import { Link } from "react-router-dom";
import { leerjuegos } from "../../helpers/queries";
import ContenedorJuegos from "./components/ContenedorJuegos";


const ListaJuegos = () => {
  const [listaJuegos, setListaJuegos] = useState([]);
  const [categoriaForm, setCategoriaForm] = useState("aventura")

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const listaJuegos = await leerjuegos();
      setListaJuegos(listaJuegos);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <MenuCarrito></MenuCarrito>
      <Container fluid className="py-4">
        <div className="mx-4">
          {/* aqui revisar si es mejor un margin 4 o 5 (o tal vez más pequeño) */}
          <div className="d-flex my-4">
            <Link to={"/precios"}>
              <i className="bi bi-chevron-left fs-1 text-black"></i>
            </Link>
            <p className="text-center flex-grow-1 fs-1">
              Creá tu listado de juegos
            </p>
          </div>
        </div>
        <ContenedorJuegos categoriaProp="Destacados" listaJuegosProp={listaJuegos}></ContenedorJuegos>
        {/* pensar bien cómo hacer la lógica al momento de usar el filtro */}
        <div>
          <h2 className="fs-2">Todos los títulos</h2>
          <div className="position-sticky top-0 pt-2">
            <Form>
              <Form.Group className="mb-3" controlId="filtrarCategorias">
                <div>
                  <Form.Select required className="form-select" value={categoriaForm} onChange={(e) => setCategoriaForm(e.target.value)}>
                    <option value="A-Z">Filtro A-Z</option>
                    <option value="carreras">Filtro Carreras</option>
                    <option value="aventura">Filtro Aventuras</option>
                    <option value="sigilo">Filtro Sigilo</option>
                    <option value="disparos">Filtro Disparos</option>
                    <option value="deportes">Filtro Deportes</option>
                  </Form.Select>
                </div>
              </Form.Group>
            </Form>
          </div>
          <ContenedorJuegos categoriaProp={categoriaForm} listaJuegosProp={listaJuegos}></ContenedorJuegos>
          {/* <h2>A</h2>
          <div className="containerCategory d-flex pb-3 gap-3 gap-md-0 mb-4">
            <div className="d-flex flex-column pb-3 gap-2 gap-md-0">
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
            </div>
            <div className="d-flex flex-column pb-3 gap-2 gap-md-0">
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
            </div>
            <div className="d-flex flex-column pb-3 gap-2 gap-md-0">
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
            </div>
          </div>
          <h2>B</h2>
          <div className="containerCategory d-flex pb-3 gap-3 gap-md-0">
            <div className="d-flex flex-column pb-3 gap-2 gap-md-0">
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
            </div>
            <div className="d-flex flex-column pb-3 gap-2 gap-md-0">
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
            </div>
            <div className="d-flex flex-column pb-3 gap-2 gap-md-0">
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
            </div>
          </div>
          <h2>C</h2>
          <div className="containerCategory d-flex pb-3 gap-3 gap-md-0">
            <div className="d-flex flex-column pb-3 gap-2 gap-md-0">
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
            </div>
            <div className="d-flex flex-column pb-3 gap-2 gap-md-0">
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
            </div>
            <div className="d-flex flex-column pb-3 gap-2 gap-md-0">
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
              <CardJuego></CardJuego>
            </div>
          </div> */}
        </div>
      </Container>
    </>
  );
};

export default ListaJuegos;
