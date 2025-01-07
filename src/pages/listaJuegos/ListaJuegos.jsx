import React, { useEffect, useState } from "react";
import "./listaJuegos.css";
import {Container, Form } from "react-bootstrap";
import MenuCarrito from "./components/MenuCarrito";
import { Link } from "react-router-dom";
import { leerjuegos } from "../../helpers/queries";
import ContenedorJuegos from "./components/ContenedorJuegos";
import ContenedorJuegosDestacados from "./components/contenedorJuegosDestacados";
import ContenedorJuegosAZ from "./components/ContenedorJuegosAZ";

const ListaJuegos = () => {
  const [listaJuegos, setListaJuegos] = useState([]);
  const [categoriaForm, setCategoriaForm] = useState("aventura");

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

  const gruposAZ = {};
  const ordenAlfabetico = listaJuegos.forEach((juego) => {
    const primeraLetra = juego.nombre[0].toUpperCase();
    if (!gruposAZ[primeraLetra]) {
      gruposAZ[primeraLetra] = [];
    }
    gruposAZ[primeraLetra].push(juego);
  });
  console.log(gruposAZ);
  const ordenAlfabeticoEstructurado = Object.keys(gruposAZ);
  

  return (
    <>
      <MenuCarrito></MenuCarrito>
      <Container fluid className="py-4">
        <div className="mx-4">
          <div className="d-flex my-4">
            <Link to={"/precios"}>
              <i className="bi bi-chevron-left fs-1 text-black"></i>
            </Link>
            <p className="text-center flex-grow-1 fs-1">
              Creá tu listado de juegos
            </p>
          </div>
        </div>
        <ContenedorJuegosDestacados
          categoriaProp="destacado"
          listaJuegosProp={listaJuegos}
        ></ContenedorJuegosDestacados>
        {/* pensar bien cómo hacer la lógica al momento de usar el filtro */}
        <div>
          <h2 className="fs-2">Todos los títulos</h2>
          <div className="position-sticky top-0 pt-2">
            <Form>
              <Form.Group className="mb-3" controlId="filtrarCategorias">
                <div>
                  <Form.Select
                    required
                    className="form-select"
                    value={categoriaForm}
                    onChange={(e) => setCategoriaForm(e.target.value)}
                  >
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
          {categoriaForm !== "A-Z" ? (
            <ContenedorJuegos
              categoriaProp={categoriaForm}
              listaJuegosProp={listaJuegos}
            ></ContenedorJuegos>
          ) : (
            <div className="mb-5">
              <h2 className="fs-2">A-Z</h2>
              * {ordenAlfabeticoEstructurado.map((grupo) => (
                <ContenedorJuegosAZ
                  grupoProp={grupo}
                  juegosAZProp={gruposAZ[grupo.toString()]}
                ></ContenedorJuegosAZ>
              ))} 
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default ListaJuegos;
