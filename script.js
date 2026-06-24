const peliculas = [
    { titulo: "Matrix", genero: "Ciencia Ficcion", sinopsis: ".....", imagen: ""},
    { titulo: "John Wick", genero: "Accion", sinopsis: ".....", imagen: ""},
    { titulo: "Interestelar", genero: "Ciencia Ficcion", sinopsis: "......", imagen: ""},
    { titulo: "Conjuro", genero: "Terror", sinopsis: "...", imagen: ""},
    { titulo: "Gladiador", genero: "Accion", sinopsis "...", imagen: ""},
    
];
const contenedor = document.getElementById("contenedor")
const buscador = document.getElementById("buscador")
const filtroGenero = document.getElementById("filtro-genero")

function mostrarPeliculas(lista) {
    contenedor.innerHTML = ""
    if (lista.lenght === 0) {
        contenedor.innerHTML = "<p class='sin-resultados'>No se encontraron peliculas</p>"
        return;
    }

    lista.forEach(peli => {
        const tarjeta = document.classList.add("tarjeta");

    })
}
