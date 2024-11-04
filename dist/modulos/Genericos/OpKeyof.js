"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function obtenerPropiedad(objeto, clave) {
    return objeto[clave];
}
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
const nombre = obtenerPropiedad(persona, "nombre");
const edad = obtenerPropiedad(persona, "edad");
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
const producto1 = {
    nombre: "Laptop",
    precio: 1500,
};
console.log(producto1);
const producto2 = {
    id: 1,
    nombre: "Teléfono",
    precio: 800,
    categoria: "Electrónica",
};
console.log(producto2);
const producto3 = {
    nombre: "Tablet",
    precio: 300,
};
console.log(producto3);
function obtenerPropiedades(objeto, claves) {
    const resultado = {};
    claves.forEach((clave) => {
        if (clave in objeto) {
            resultado[clave] = objeto[clave];
        }
    });
    return resultado;
}
const productoCompleto = {
    id: 2,
    nombre: "Monitor",
    precio: 200,
    categoria: "Electrónica",
    enStock: true,
};
const productoParcial = obtenerPropiedades(productoCompleto, ["nombre", "precio"]);
console.log(productoParcial);
//# sourceMappingURL=OpKeyof.js.map