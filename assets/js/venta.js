import {propiedadesVenta,asignarIconoMascotas,asignarIconoFumar} from './propiedades.js'
const venta = document.querySelector('#ventas');

let htmlVenta='';

for(let dpto of propiedadesVenta){
    const fumar = asignarIconoFumar(dpto);
    const mascotas = asignarIconoMascotas(dpto);
    htmlVenta+=`
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
venta.innerHTML = htmlVenta;