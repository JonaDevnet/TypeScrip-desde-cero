"use strict";
let VariableAny;
console.log("any:", typeof VariableAny);
VariableAny = "Soy una variable any";
console.log("any:", typeof VariableAny);
let VariableUnknow = "Soy una variable desconocida";
console.log("unknow:", typeof VariableUnknow);
VariableUnknow = 100;
console.log("unknow:", typeof VariableUnknow);
if (typeof VariableUnknow === "number") {
    console.log("Es un numero:", VariableUnknow * 2);
}
function error(messege) {
    throw new Error(messege);
}
try {
    error("Algo salio mal");
}
catch (e) {
    console.log("never: Lanzo un error");
}
let ArrayNumeros = [1, 2, 3, 4, 5];
console.log("Aray:", typeof ArrayNumeros);
ArrayNumeros.forEach(num => console.log("Elemento:", num));
let Tuplas = ["Edad:", 25];
console.log("Tupla:", typeof Tuplas);
console.log(`Tupla - Primer elemento: ${Tuplas[0]}
            Segundo elemendo: ${Tuplas[1]}`);
var Direccion;
(function (Direccion) {
    Direccion[Direccion["Norte"] = 1] = "Norte";
    Direccion[Direccion["Sur"] = 2] = "Sur";
    Direccion[Direccion["Este"] = 3] = "Este";
    Direccion[Direccion["Oeste"] = 4] = "Oeste";
})(Direccion || (Direccion = {}));
var Colores;
(function (Colores) {
    Colores["Rojo"] = "Rojo";
    Colores["Verde"] = "Verde";
    Colores["Azul"] = "Azul";
})(Colores || (Colores = {}));
let MiDireccion = Direccion.Norte;
console.log("enum Direccion", typeof Direccion);
console.log(`Mi direccion es: ${Direccion[MiDireccion]}`);
let MiColor = Colores.Azul;
console.log("enum Colores:", typeof Colores);
console.log(`Mi direccion es: ${Colores[MiColor]}`);
let persona = {
    nombre: 'Juan',
    edad: 30,
    esEmpleado: true
};
console.log("type:", typeof persona);
console.log(`Nombre: ${persona.nombre}, 
    Edad: ${persona.edad}, 
    Empleado: ${persona.esEmpleado}`);
class CaballoI {
    constructor() {
        this.name = 'Splinter';
    }
    Caminar() {
        console.log('Caminando');
    }
    Onomatopeya() {
        return 'Hin.';
    }
}
class CerdoI {
    constructor() {
        this.name = 'Cochinito';
    }
    Caminar() {
        console.log('Caminando');
    }
    Onomatopeya() {
        return 'Oinc.';
    }
}
class PerroI {
    constructor() {
        this.name = 'Vianca';
    }
    Caminar() {
        console.log('Perro caminando');
    }
    Onomatopeya() {
        return 'Guau';
    }
}
let caballo = new Caballo();
console.log(caballo);
console.log(caballo.Caminar());
console.log(caballo.Onomatopeya());
let cerdo = new Cerdo();
console.log(cerdo);
console.log(cerdo.Caminar());
console.log(cerdo.Onomatopeya());
let perro = new Perro();
console.log(perro);
//# sourceMappingURL=TiposDeDatos.js.map