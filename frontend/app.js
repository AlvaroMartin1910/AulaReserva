async function cargarAulas() {
    const respuesta = await fetch("http://localhost:8000");
    const aulas = await respuesta.json();
    const contenedor = document.getElementById("lista-aulas");
    
    for(const aula of aulas){
        const tarjeta = document.createElement("article");

        const titulo = document.createElement("h3");
        titulo.textContent = aula.nombre;

        const capacidad = document.createElement("p");
        capacidad.textContent = "Capacidad: " + aula.capacidad + " personas";

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(capacidad);
        contenedor.appendChild(tarjeta); 
    }
}

cargarAulas();

