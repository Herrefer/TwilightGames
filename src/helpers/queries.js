const URL_juegos = import.meta.env.VITE_API_JUEGOS

export const leerjuegos = async () => {
    try{
        const respuesta = await fetch(URL_juegos)
        const listaJuegos = await respuesta.json();
        return listaJuegos;
    }
    catch(error){
        console.log(error)
    }
}