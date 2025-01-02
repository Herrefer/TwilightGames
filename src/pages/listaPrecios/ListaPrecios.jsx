import React from "react";
import "./listaPrecios.css";
import { Container, Button } from "react-bootstrap";
import preciosPS3 from "../../assets/Precios Ps3.png";

const ListaPrecios = () => {
  return (
    <>
      <Container fluid className="py-4">
        <div className="mx-4">
          {/* aqui revisar si es mejor un margin 4 o 5 (o tal vez más pequeño) */}
          <div className="d-flex my-4">
            <a href="">
              <i class="bi bi-chevron-left fs-1 text-black"></i>
            </a>
            <p className="text-center flex-grow-1 fs-1">
              Precios y promociones
            </p>
          </div>
          <div>
            <p className="text-center fs-3">
              El precio se actualiza automaticamente a medida que agregues
              juegos a tu lista
            </p>
          </div>
          <div className="mb-5 text-center">
            <img
              className="img-fluid"
              src={preciosPS3}
              alt="Precios y promociones de juegos"
            />
          </div>
          <div className="d-flex justify-content-center">
            <Button href="#" variant="outline-dark" className="fs-3">
              Continuar al listado de Juegos
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ListaPrecios;
