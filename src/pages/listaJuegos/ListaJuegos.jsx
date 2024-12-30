import React from "react";
import "./listaJuegos.css";
import { Button, Container, Form } from "react-bootstrap";
import CardJuego from "./components/CardJuego";
import MenuCarrito from "./components/MenuCarrito";

const ListaJuegos = () => {
  return (
    <>
      <MenuCarrito></MenuCarrito>
      <Container fluid className="py-4">
        <div className="mx-4">
          {/* aqui revisar si es mejor un margin 4 o 5 (o tal vez más pequeño) */}
          <div className="d-flex my-4">
            <a href="">
              <i className="bi bi-chevron-left fs-1 text-black"></i>
            </a>
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
          <div>
            <h2 className="fs-2">Todos los títulos</h2>
            <Form>
              <Form.Group className="mb-3" controlId="filtrarCategorias">
                <Form.Text className="text-muted">Filtrar</Form.Text>
                <div>
                  <select required className="form-select">
                    <option value="A-Z">A-Z</option>
                    <option value="Acción">Acción</option>
                    <option value="Aventuras">Aventuras</option>
                    <option value="Sigilo">Sigilo</option>
                    <option value="Disparos">Disparos</option>
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
