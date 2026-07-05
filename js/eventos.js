document.addEventListener("DOMContentLoaded", ()=>{
    mostrarPeliculas();
    const btn_agregar=document.querySelector("#btn-agregar");
    btn_agregar.addEventListener("click", ()=>{
        document.querySelector("#form-agregar").style.display="block";
    })
    document.querySelector("#btn-cerrar-formAgregar").addEventListener("click", (e)=>{
        e.preventDefault();
        document.querySelector("#form-agregar").style.display="none";
    })
    
    const form_agregar = document.querySelector("#form-agregar");
form_agregar.addEventListener("submit", (e) => {
    e.preventDefault();

    const archivoImagen = document.querySelector("#imagen").files[0];


    const mandarALocalStorage = (imagenBase64) => {
        const nuevaPelicula = {
            titulo: form_agregar.titulo.value,
            genero: form_agregar.genero.value,
            codigo: form_agregar.codigo.value,
            imagen: imagenBase64
        };

        agregarPelicula(nuevaPelicula);
        form_agregar.reset();
        form_agregar.style.display = "none";
    };

    if (archivoImagen) {
        const reader = new FileReader();
        reader.onloadend = () => {
            mandarALocalStorage(reader.result);
        };
        reader.readAsDataURL(archivoImagen);
    } else {
        mandarALocalStorage("");
    }
});
    const form_buscar= document.querySelector("#form-buscar");
    form_buscar.addEventListener("submit", (e)=>{
        e.preventDefault();

        const peliculaABuscar={
            nombreABuscar: form_buscar.nombreBuscar.value,
            codigoABuscar: form_buscar.codigoBuscar.value
        }
        buscarPelicula(peliculaABuscar);
    });
    const btn_filtros=document.querySelector('#btn-filtros');
    btn_filtros.addEventListener('click', (e)=>{
        e.preventDefault();
        form_buscar.reset();
        mostrarPeliculas();
    });
    const form_modficar=document.querySelector("#form-modificar");
    form_modficar.addEventListener("submit", (e)=>{
        e.preventDefault();

        const nuevosDatos={
            nombreAModif: form_modficar.titulo.value,
            generoAModif: form_modficar.genero.value,
            codigoAModif: form_modficar.codigo.value
        }
        modificarPelicula(nuevosDatos);
        form_modficar.style.display="none";
    })
})