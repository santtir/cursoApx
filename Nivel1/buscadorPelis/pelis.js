const peliculas=require("./pelis.json");

function getAllPelis(){
    return peliculas;
}

function getPelisOrdenadas(orden){
    return peliculas.sort(orden);
}

function buscarPeli(peliBuscada){
    return peliculas.filter(pelicula=>pelicula.title.toLowerCase().includes(peliBuscada.toLowerCase()));
}

function getPeliPorTag(tag){
    return peliculas.filter(pelicula => 
        pelicula.tags.some(t => t.toLowerCase() === tag.toLowerCase())  // uso some para verificar si alguno de los tags coincide
    );
}

module.exports = {
    getAllPelis,
    getPelisOrdenadas,
    buscarPeli,
    getPeliPorTag
};

