"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.nombre = nombre;
        this.edad = edad;
        console.log("Constructor: Una nueva persona ha sido creada.");
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}.`);
    }
    obtenerEdad() {
        return this.edad;
    }
    limpiar() {
        console.log(`Limpiando recursos de ${this.nombre}`);
    }
}
const persona = new Persona("Ana", 25);
persona.saludar();
console.log(persona.nombre);
console.log(persona.obtenerEdad());
console.log('Destructor.' + persona.limpiar());
class CuentaBancaria {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    consultarSaldo() {
        return this.saldo;
    }
    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`${cantidad} depositado. Saldo actual: ${this.saldo}`);
        }
        else {
            console.log("La cantidad debe ser positiva.");
        }
    }
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`${cantidad} retirado. Saldo actual: ${this.saldo}`);
        }
        else {
            console.log("Fondos insuficientes o cantidad inválida.");
        }
    }
}
const cuenta = new CuentaBancaria("Ana", 1000);
console.log(`Titular: ${cuenta.titular}`);
cuenta.consultarSaldo();
cuenta.depositar(500);
cuenta.retirar(200);
function procesarAnimal(animal) {
    if ('ladra' in animal) {
        const perro = animal;
        console.log(`El animal es un perro y su nombre es ${perro.nombre}. ¿Ladra? ${perro.ladra}`);
        console.log(perro.hacerSonido());
    }
    else if ('maulla' in animal) {
        const gato = animal;
        console.log(`El animal es un gato y su nombre es ${gato.nombre}. ¿Maúlla? ${gato.maulla}`);
        console.log(gato.hacerSonido());
    }
    else {
        console.log("El animal no es ni un perro ni un gato.");
    }
}
const miPerro = { nombre: "Max", ladra: true, hacerSonido: () => "Guau guau!" };
const miGato = { nombre: "Luna", maulla: true, hacerSonido: () => "Miau miau!" };
procesarAnimal(miPerro);
procesarAnimal(miGato);
class Pez {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        return "Blub blub!";
    }
    nadar() {
        return `${this.nombre} está nadando en el agua.`;
    }
}
class Pajaro {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        return "Pio pio!";
    }
    volar() {
        return `${this.nombre} está volando alto en el cielo.`;
    }
}
function interactuarConAnimal(animal) {
    if (animal instanceof Pez) {
        console.log(animal.hacerSonido());
        console.log(animal.nadar());
    }
    else if (animal instanceof Pajaro) {
        console.log(animal.hacerSonido());
        console.log(animal.volar());
    }
}
const miPez = new Pez("Nemo");
const miPajaro = new Pajaro("Tweety");
interactuarConAnimal(miPez);
interactuarConAnimal(miPajaro);
//# sourceMappingURL=POO.js.map