"use strict";
var _a, _b, _c, _d;
function procesarValor(valor) {
    if (typeof valor === "string") {
        console.log(`El valor es un string de longitud ${valor.length}: "${valor}"`);
    }
    else {
        console.log(`El valor es un número que, multiplicado por 2, es: ${valor * 2}`);
    }
}
procesarValor("Hola Mundo");
procesarValor(42);
let dato;
dato = { nombre: "Ana", edad: 28 };
if (typeof dato === "object") {
    console.log(`Persona: ${dato.nombre}, Edad: ${dato.edad}`);
}
dato = "Desconocido";
if (typeof dato === "string") {
    console.log(`Dato es un string: "${dato}"`);
}
let colorFavorito;
colorFavorito = "rojo";
console.log(`Mi color favorito es: ${colorFavorito}`);
function ejecutarAccion(accion) {
    console.log(`Acción ejecutada: ${accion}`);
}
ejecutarAccion("iniciar");
ejecutarAccion("detener");
let mensaje = "Hola, mundo";
console.log(`Mensaje: ${mensaje}`);
console.log("Tipo:", typeof mensaje);
mensaje = null;
console.log(`Mensaje: ${mensaje}`);
console.log("Tipo:", typeof mensaje);
function saludar(nombre) {
    if (nombre) {
        console.log(`Hola, ${nombre}!`);
    }
    else {
        console.log("Hola, visitante!");
    }
}
saludar("Carlos");
saludar(undefined);
saludar();
let personaConDireccion = {
    nombre: "Carlos",
    direccion: { calle: "Avenida Siempre Viva", ciudad: "Springfield" }
};
let personaSinDireccion = {
    nombre: "Ana"
};
console.log(`Dirección de Carlos: ${(_b = (_a = personaConDireccion.direccion) === null || _a === void 0 ? void 0 : _a.calle) !== null && _b !== void 0 ? _b : "No disponible"}`);
console.log(`Dirección de Ana: ${(_d = (_c = personaSinDireccion.direccion) === null || _c === void 0 ? void 0 : _c.calle) !== null && _d !== void 0 ? _d : "No disponible"}`);
let personaTA = { nombre: "Juan", edad: 25 };
let empleado = personaTA;
empleado.salario = 50000;
console.log(`Empleado: ${empleado.nombre}, Edad: ${empleado.edad}, Salario: ${empleado.salario}`);
function procesarEntrada(entrada) {
    if (typeof entrada === "string") {
        console.log(`La entrada es un string de longitud ${entrada.length}`);
    }
    else {
        console.log(`La entrada es un número al cuadrado: ${entrada * entrada}`);
    }
}
procesarEntrada("Hola");
procesarEntrada(5);
function procesarValorTU(valor) {
    if (typeof valor === "string") {
        console.log(`El valor es un string de longitud ${valor.length}`);
    }
    else if (typeof valor === "number") {
        console.log(`El valor es un número y su doble es: ${valor * 2}`);
    }
    else if (typeof valor === "boolean") {
        console.log(`El valor es un booleano con valor: ${valor}`);
    }
    else {
        console.log("El valor es de un tipo no reconocido.");
    }
}
procesarValorTU("Hola");
procesarValorTU(10);
procesarValorTU(true);
procesarValorTU({ clave: "valor" });
//# sourceMappingURL=UtilidadesType.js.map