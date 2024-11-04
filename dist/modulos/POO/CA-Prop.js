"use strict";
class Vehiculo {
    constructor(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }
    encender() {
        console.log(`El vehículo ${this.marca} ${this.modelo} está encendido.`);
    }
    obtenerModelo() {
        return this.modelo;
    }
    obtenerInfo() {
        return `${this.marca} ${this.modelo} del año ${this.año}`;
    }
}
class Auto extends Vehiculo {
    constructor(marca, modelo, año, color) {
        super(marca, modelo, año, color);
    }
    mostrarDetalles() {
        console.log(this.obtenerInfo());
        if (this.color) {
            console.log(`Color del auto: ${this.color}`);
        }
    }
}
const miVehiculo = new Vehiculo("Toyota", "Corolla", 2022, "Azul");
miVehiculo.encender();
console.log(`Modelo: ${miVehiculo.obtenerModelo()}`);
console.log(`Color: ${miVehiculo.color}`);
const miAuto = new Auto("Honda", "Civic", 2023);
miAuto.mostrarDetalles();
//# sourceMappingURL=CA-Prop.js.map