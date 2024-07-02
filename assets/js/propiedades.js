export const propiedadesVenta = [
    {
        nombre: 'Edificio Koiwe',
        src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240430/3214338/n_wm_2024043015382770295.webp',
        descripcion: 'Departamento 2 habitaciones y 1 baño, con una bodega incluida.',
        ubicacion: 'Alonso De Ercilla 7801 , La Florida, Metropolitana',
        habitaciones: 2,
        costo: 83499990,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Edificio Refugio New',
        src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20191220/1384492/n_wm_2020082631447222663.jpg',
        descripcion: 'Departamento 3 habitaciones, 2 baños, 1 estacionamiento.',
        ubicacion: 'Colombia 8863 , La Florida, Metropolitana',
        habitaciones: 3,
        costo: 111999990,
        smoke: false,
        pets: true
        },
    {
        nombre: 'Edificio Inés Matte Urrejola 0865',
        src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20200114/1399842/n_wm_2022102530364469762.webp',
        descripcion: 'Departamento 3 habitaciones, 3 baños, 1 bodega y estacionamiento',
        ubicacion: 'Inés Matte Urrejola 0865 , Providencia, Metropolitana',
        habitaciones: 3,
        costo: 184684000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Edificio Insigne',
        src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20191011/1334446/n_wm_2022120735022608114.webp',
        descripcion: 'Departamento 3 habitaciones, 2 baños, 1 estacionamiento',
        ubicacion: 'Gregorio de la Fuente 3040, Macul, Metropolitana',
        habitaciones: 3,
        costo: 110000990,
        smoke: true,
        pets: false
        }
];

export const propiedadesArriendo = [
    {
        nombre: 'Piedra Roja , casa en condominio consolidado',
        src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20230511/2561447/n_wm_af3cc26f5b5fc3e5c55ff26c26c06ec8283b72a1.webp',
        descripcion: 'Casa 4 habitaciones, 3 baños ,piscina y estacionamiento.',
        ubicacion: 'Colina, Metropolitana',
        habitaciones: 4,
        costo: 2818452,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Paso el Roble',
        src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20191220/1384492/n_wm_2020082631447222663.jpg',
        descripcion: 'Departamento 1 habitacion , 1 baño.',
        ubicacion: 'Paso el Roble 50, La Florida, Metropolitana',
        habitaciones: 1,
        costo: 314168,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Nueva Costanera',
        src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240614/3305688/n_wm_86cb652742adb4ca3ba09b339419701ec4b1fe18.webp',
        descripcion: 'Departamento 4 habitaciones, 3 baños , 1 estacionamiento, 2 bodegas.',
        ubicacion: 'Vitacura, Metropolitana',
        habitaciones: 4,
        costo: 2500000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Torres de Tajamar',
        src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20191011/1334446/n_wm_2022120735022608114.webp',
        descripcion: 'Departamento 2 habitaciones, 1 baño.',
        ubicacion: 'Providencia, Metropolitana',
        habitaciones: 2,
        costo: 700000,
        smoke: true,
        pets: false
    }
];

export function asignarIconoMascotas(dpto){
    if(dpto.pets==true){
        return '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
    }
    else{
        return '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>';
    }
}

export function asignarIconoFumar(dpto){
    if(dpto.smoke==true){
        return '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
    }
    else{
        return '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
    }
}