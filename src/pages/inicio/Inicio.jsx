import React from "react";
import "./inicio.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <>
      <Container fluid className="py-4 contenedorPrincipal">
        <div className="mx-5">
          <h1 className="text-center my-4">Twilight Games PS3</h1>
          <p className="text-center fs-2">¿Qué servicio estás buscando?</p>
          <div className="d-flex flex-column border border-dark mb-5">
            <div>
              <p className="text-center fs-3 mt-3 px-2">
                Juegos: ver y armar un listado{" "}
                <i className="ms-2 bi bi-arrow-down"></i>
              </p>
            </div>
            <button as={Link} to="/precios" className="juegosFlash d-flex flex-row justify-content-center pb-2 juegosFlash w-100">
              <div className="d-flex align-items-center">
                <p className="mb-0 me-4 fs-5">
                  Juegos Flash (para consolas HEN)
                </p>
              </div>
              <div>
                <p className="mb-0 fw-light">300 títulos</p>
                <p className="mb-0 fw-light">disponibles</p>
              </div>
            </button>
            <button as={Link} to="/precios" className=" juegosOriginales d-flex flex-row pt-2 px-2">
              <div className="d-flex">
                <p className="mb-0 me-4 fs-6">
                  Juegos (para consolas originales)
                </p>
              </div>
              <div>
                <p className="mb-0 fw-light">300 títulos</p>
                <p className="mb-0 fw-light">disponibles</p>
              </div>
            </button>
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
              <a href="" className="fs-3">
                Acerca de
              </a>
            </div>
            <div className="mt-3">
              <a href="" className="fs-3">
                Contacta con nosotros
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Inicio;
