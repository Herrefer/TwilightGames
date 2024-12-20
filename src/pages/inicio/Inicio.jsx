import React from "react";
import "./inicio.css";
import { Container } from "react-bootstrap";

const Inicio = () => {
  return (
    <>
      <Container className="my-4">
        <h1 className="text-center my-4">Twilight Games PS3</h1>
        <p className="text-center fs-2">¿Qué servicio estás buscando?</p>
        <div className="d-flex flex-column border border-dark mb-5">
          <div>
            <p className=" text-center fs-3 mt-3 px-2">
              Juegos: ver y armar un listado{" "}
              <i class="ms-2 bi bi-arrow-down"></i>
            </p>
          </div>
          <div className="d-flex flex-row justify-content-center mb-2 px-2">
            <div className="d-flex align-items-center">
              <p className="mb-0 me-4 fs-5">Juegos Flash (para consolas HEN)</p>
            </div>
            <div>
              <p className="mb-0">300 títulos</p>
              <p className="mb-0">disponibles</p>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center pt-2 px-2">
            <div className="d-flex align-items-center">
              <p className="mb-0 me-4 fs-5">
                Juegos (para consolas originales)
              </p>
            </div>
            <div>
              <p className="mb-0">300 títulos</p>
              <p className="mb-0">disponibles</p>
            </div>
          </div>
        </div>
        <div className="border border-dark mb-5">
          <p className=" text-center fs-3 mt-3">Software (próximamente)</p>
        </div>
        <div className="border border-dark">
          <p className=" text-center fs-3 mt-3">
            Hardware y limpieza (próximamente)
          </p>
        </div>
        <div className="text-center mt-5">
          <div>
            <a href="" className="fs-3 link-dark">Acerca de</a>
          </div>
          <div className="mt-3">
            <a href="" className="fs-3 link-dark">Contacta con nosotros</a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Inicio;
