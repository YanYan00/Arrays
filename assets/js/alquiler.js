import {asignarIconoMascotas,asignarIconoFumar, propiedadesArriendo} from './propiedades.js'
const alquiler = document.querySelector('#arriendos');

let htmlAlquiler='';

for(let dpto of propiedadesArriendo){
    const fumar = asignarIconoFumar(dpto);
    const mascotas = asignarIconoMascotas(dpto);
    htmlAlquiler+=`
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${dpto.src}" class="card-img-top" alt="img propiedad"/>
                <div class="card-body">
                    <h5 class="card-title">${dpto.nombre}</h5>
                    <p class="card-text">${dpto.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${dpto.ubicacion}</p>
                    <p>
                    <i class="fas fa-bed"></i> ${dpto.habitaciones} Habitaciones
                    <p><i class="fas fa-dollar-sign"></i>${dpto.costo}</p>
                    ${fumar}
                    ${mascotas}
                </div>
            </div>
        </div>
    `
}
arriendos.innerHTML = htmlAlquiler;