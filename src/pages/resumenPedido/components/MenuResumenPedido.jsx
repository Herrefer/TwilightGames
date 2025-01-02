import React from "react";
import "./menuResumenPedido.css";

const MenuResumenPedido = () => {
  return (
    <div className="resumenContainer position-fixed bottom-0 d-flex justify-content-between align-items-center">
      <button className="botonCancelar rounded-end-pill fs-5">
          <a className="resumenLink" href="#">
          <i class="bi bi-backspace"></i> Cancelar
          </a>
        </button>
      <div className="d-flex flex-column align-items-center">
        <p className="m-0 fs-5">$5500</p>
        <p className="m-0 fs-6 fw-light">precio final</p>
      </div>
      <div className="botonResumenContainer">
        <button className="botonResumen rounded-start-pill fs-5">
          <a className="resumenLink" href="#">
            Enviar <i class="bi bi-share"></i>
          </a>
        </button>
      </div>
    </div>
  );
};

export default MenuResumenPedido;
