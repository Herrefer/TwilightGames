import React from "react";
import "./cardJuego.css";
import EtiquetasCard from "./EtiquetasCard";
import juegoPs3 from "../../../assets/assassins-creed-brotherhood1-7eefcfaa773c35627415544801371096-640-0.jpg";

const CardJuego = () => {
  return (
    <>
      <div className="cardContainer d-flex border border-secondary">
        <div className="imgCardContainer">
          <img className="cardImg" src={juegoPs3} alt="" />
        </div>
        <div className="cardInfo text-center d-flex flex-column justify-content-between w-100">
          <div>
            <p className="mb-0 mt-1">Assasins Creed Brotherhood</p>
          </div>
          <div className="d-flex justify-content-center">
            <EtiquetasCard></EtiquetasCard>
            <EtiquetasCard></EtiquetasCard>
            <EtiquetasCard></EtiquetasCard>
          </div>
          <button className="btnCard">Agregar <i class="bi bi-plus-circle"></i></button>
        </div>
      </div>
    </>
  );
};

export default CardJuego;
