"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this._salario = salario;
    }
    get salario() {
        return this._salario;
    }
    mostrarInformacion() {
        console.log(`Empleado: ${this.nombre}, Salario: ${this._salario}`);
    }
    calcularBonificacion() {
        return this._salario * 0.1;
    }
}
class Gerente extends Empleado {
    constructor(nombre, salario, empleadosACargo) {
        super(nombre, salario);
        this.empleadosACargo = empleadosACargo;
    }
    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Empleados a cargo: ${this.empleadosACargo}`);
    }
    calcularBonificacion() {
        return this.salario * 0.2;
    }
}
const empleado1 = new Empleado("Carlos", 50000);
empleado1.mostrarInformacion();
console.log(`Bonificación: ${empleado1.calcularBonificacion()}`);
const gerente1 = new Gerente("Ana", 80000, 5);
gerente1.mostrarInformacion();
console.log(`Bonificación: ${gerente1.calcularBonificacion()}`);
//# sourceMappingURL=Herencia.js.map