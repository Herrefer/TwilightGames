const URL_juegos = import.meta.env.VITE_API_JUEGOS

const leerjuegos = async () => {
    try{
        const respuesta = fetch(URL_juegos)
        const listaJuegos = await respuesta.json();
        return listaJuegos;
    }
    catch(error){
        console.log(error)
    }
}