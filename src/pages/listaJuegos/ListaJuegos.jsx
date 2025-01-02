import React from "react";
import "./listaJuegos.css";
import { Button, Container, Form } from "react-bootstrap";
import CardJuego from "./components/CardJuego";
import MenuCarrito from "./components/MenuCarrito";
import { Link } from "react-router-dom";

const ListaJuegos = () => {
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
        <div className="mb-5">
          <h2 className="fs-2">Destacados</h2>
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
        </div>
        {/* pensar bien cómo hacer la lógica al momento de usar el filtro */}
        <div>
          <h2 className="fs-2">Todos los títulos</h2>
          <div className="position-sticky top-0 pt-2">
            <Form>
              <Form.Group className="mb-3" controlId="filtrarCategorias">
                <div>
                  <select required className="form-select">
                    <option value="A-Z">Filtro  A-Z</option>
                    <option value="Acción">Filtro Acción</option>
                    <option value="Aventuras">Filtro Aventuras</option>
                    <option value="Sigilo">Filtro Sigilo</option>
                    <option value="Disparos">Filtro Disparos</option>
                  </select>
                </div>
              </Form.Group>
            </Form>
          </div>
          <h2>A</h2>
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
          </div>
        </div>
      </Container>
    </>
  );
};

export default ListaJuegos;
