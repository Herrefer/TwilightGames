import React from "react";
import "./cardJuego.css";
import EtiquetasCard from "./EtiquetasCard";

const CardJuego = ({ juegoProp }) => {
  return (
    <>
      <div className="cardContainer d-flex border border-secondary">
        <div className="imgCardContainer">
          <img className="cardImg" src={juegoProp.img} alt="" />
        </div>
        <div className="cardInfo text-center d-flex flex-column justify-content-between w-100">
          <div>
            <p className="mb-0 mt-1">{juegoProp.nombre}</p>
          </div>
          <div className="d-flex justify-content-center">
            {juegoProp.etiquetas.map((etiqueta) => (
              <EtiquetasCard etiquetaProp={etiqueta}></EtiquetasCard>
            ))}
          </div>
          <button className="btnCard">
            Agregar <i class="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardJuego;
