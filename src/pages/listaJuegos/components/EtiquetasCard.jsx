import React from 'react';
import "./etiquetasCard.css"



const EtiquetasCard = ({etiquetaProp}) => {

    return (
        <>
        <div className='mx-1 my-1 etiquetaContenedor'>
            <p className='mb-0 p-1 etiquetaTexto'>{etiquetaProp}</p>
        </div>
        </>
    );
};

export default EtiquetasCard;