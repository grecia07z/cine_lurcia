const agregarPelicula = (nuevaPelicula) => {
    let peliculas = JSON.parse(localStorage.getItem("peliculas"))||[];
    peliculas.push(nuevaPelicula);
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
    mostrarMensaje("nueva pelicula agregada");
    mostrarPeliculas();

}

const mostrarPeliculas = (peliculasEncontradas) => {
    let contenedorPeliculas = document.querySelector ('#listadoPeliculas');
    contenedorPeliculas.innerHTML = '';
    let peliculas = peliculasEncontradas|| JSON.parse(localStorage.getItem('peliculas'))||[];

    if (peliculas.length<0){
        peliculas.forEach(p => {
            contenedorPeliculas.innerHTML +=`
            <div class="pelicula">
            <div class="info">
            <p><strong>Título:</strong> ${p.titulo}</p>
            <p><strong>Género:</strong> ${p.genero}</p>
            <p><strong>Código:</strong> ${p.codigo}</p>
            </div>
            <div class="btn-modificar" onclick = "mostrarFormModificar ('${p.titulo}', '${p.genero}', '${p.codigo}')">Modificar</button>
            <button class="btn-eliminar" onclick = "eliminarPeliculas ('${p.codigo}')">Eliminar</button>
            </div>
            </div>
            
            `;
        })
    }
    else {
        contenedorPeliculas.innerHTML = '<p>no hay peliculas para mostrar.</p>'
    }
}

const buscarPelicula = (peliculaABuscar) => {
    let peliculas = JSON.parse(localStorage.getItem('peliculas'))||[];
    let peliculasEncontradas = peliculas.filter(p => p.titulo.toLowerCase().includes(peliculaABuscar.nombreABuscar.toLowerCase())||p.codigo == peliculaABuscar.codigoABuscar);
    console.log(peliculasEncontradas);
    mostrarPeliculas(peliculasEncontradas);

}

const eliminarPelicula = (codigo) => {
    if (confirm ("¿desea eliminar esta pelicula de la cartelera?")){
        let peliculas = JSON.parse(localStorage)
    }
}