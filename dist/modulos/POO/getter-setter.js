"use strict";
class CuentaBancaria {
    constructor(titular, saldoInicial, tipoCuenta) {
        this.titular = titular;
        this._saldo = saldoInicial;
        this.tipoCuenta = tipoCuenta;
    }
    get saldo() {
        console.log("Accediendo al saldo...");
        return this._saldo;
    }
    set saldo(cantidad) {
        if (cantidad < 0) {
            console.log("El saldo no puede ser negativo.");
        }
        else {
            console.log("Modificando el saldo...");
            this._saldo = cantidad;
        }
    }
    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Has depositado ${cantidad}. Saldo actual: ${this.saldo}`);
        }
        else {
            console.log("La cantidad a depositar debe ser positiva.");
        }
    }
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this._saldo) {
            this.saldo -= cantidad;
            console.log(`Has retirado ${cantidad}. Saldo actual: ${this.saldo}`);
        }
        else {
            console.log("Fondos insuficientes o cantidad inválida.");
        }
    }
}
const miCuenta = new CuentaBancaria("Alice", 1000, "Ahorros");
console.log(`Saldo inicial: ${miCuenta.saldo}`);
miCuenta.depositar(500);
miCuenta.retirar(300);
miCuenta.retirar(1500);
miCuenta.saldo = -500;
console.log(`Saldo final: ${miCuenta.saldo}`);
//# sourceMappingURL=getter-setter.js.map