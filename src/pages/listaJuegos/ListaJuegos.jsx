import React from "react";
import "./listaJuegos.css";
import { Button, Container } from "react-bootstrap";
import CardJuego from "./components/CardJuego";


const ListaJuegos = () => {
  return (
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
      <div className="containerCategory d-flex pb-3 gap-2 flex-lg-wrap gap-md-0">
        <CardJuego></CardJuego>
        </div>
    </Container>
  );
};

export default ListaJuegos;
