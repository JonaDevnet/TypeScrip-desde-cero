/**
 * TypeScript que implementa getters y setters 
 * junto con modificadores de acceso y propiedades opcionales.
 * 
 * Vamos a modelar una CuentaBancaria que tiene 
 * propiedades como titular, saldo y un método para 
 * depositar y retirar dinero. Usaremos getters y setters 
 * para controlar el acceso y la modificación de saldo, permitiendo 
 * así aplicar lógica adicional como validaciones.
 */

class CuentaBancaria {
    // Propiedad pública de solo lectura
    public readonly titular: string;

    // Propiedad privada (no se puede acceder directamente desde fuera de la clase)
    private _saldo: number;

    // Propiedad opcional
    public tipoCuenta?: string;

    // Constructor
    constructor(titular: string, saldoInicial: number, tipoCuenta?: string) {
        this.titular = titular;
        this._saldo = saldoInicial;
        this.tipoCuenta = tipoCuenta;
    }

    // Getter para obtener el saldo
    public get saldo(): number {
        console.log("Accediendo al saldo...");
        return this._saldo;
    }

    // Setter para modificar el saldo (validación para evitar saldo negativo)
    public set saldo(cantidad: number) {
        if (cantidad < 0) {
            console.log("El saldo no puede ser negativo.");
        } else {
            console.log("Modificando el saldo...");
            this._saldo = cantidad;
        }
    }

    // Método para depositar dinero usando el setter
    public depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad; // Usa el setter para modificar el saldo
            console.log(`Has depositado ${cantidad}. Saldo actual: ${this.saldo}`);
        } else {
            console.log("La cantidad a depositar debe ser positiva.");
        }
    }

    // Método para retirar dinero usando el setter
    public retirar(cantidad: number): void {
        if (cantidad > 0 && cantidad <= this._saldo) {
            this.saldo -= cantidad; // Usa el setter para modificar el saldo
            console.log(`Has retirado ${cantidad}. Saldo actual: ${this.saldo}`);
        } else {
            console.log("Fondos insuficientes o cantidad inválida.");
        }
    }
}

// Crear una instancia de CuentaBancaria
const miCuenta = new CuentaBancaria("Alice", 1000, "Ahorros");

// Usar el getter para consultar el saldo
console.log(`Saldo inicial: ${miCuenta.saldo}`); // Accede al getter de saldo

// Depositar dinero
miCuenta.depositar(500);

// Intentar retirar una cantidad válida
miCuenta.retirar(300);

// Intentar retirar una cantidad inválida
miCuenta.retirar(1500);

// Intentar asignar un saldo negativo usando el setter
miCuenta.saldo = -500;

// Consultar el saldo final
console.log(`Saldo final: ${miCuenta.saldo}`);
