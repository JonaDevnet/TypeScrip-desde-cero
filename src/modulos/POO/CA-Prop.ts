/**
 * Aqui veremos clases con control de acceso en sus propiedades
 * ademas propiedades opcionales, de lectura y escritura
 * mas las propiedades de parametros
 * 
 * Ejemplo:
 * Supongamos que estamos modelando un Vehiculo con propiedades 
 * como marca, modelo, año y color (este último es opcional). 
 * También agregaremos un método para encender el vehículo.
 */

class Vehiculo {
    // Propiedad de solo lectura
    public readonly marca: string;

    // Propiedad privada
    private modelo: string;

    // Propiedad pública opcional
    public color?: string;

    // Propiedad protegida (accesible solo en la clase y sus subclases)
    protected año: number;

    // Constructor con propiedades de parámetros (TypeScript permite declarar y asignar propiedades directamente en los parámetros del constructor)
    constructor(marca: string, modelo: string, año: number, color?: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }

    // Método público
    public encender(): void {
        console.log(`El vehículo ${this.marca} ${this.modelo} está encendido.`);
    }

    // Método público para obtener el modelo (acceso controlado a la propiedad privada)
    public obtenerModelo(): string {
        return this.modelo;
    }

    // Método protegido, accesible solo en la clase y subclases
    protected obtenerInfo(): string {
        return `${this.marca} ${this.modelo} del año ${this.año}`;
    }
}

// Clase derivada `Auto`
class Auto extends Vehiculo {
    constructor(marca: string, modelo: string, año: number, color?: string) {
        super(marca, modelo, año, color);
    }

    // Método público que usa `obtenerInfo` (que es protected)
    public mostrarDetalles(): void {
        console.log(this.obtenerInfo());
        if (this.color) {
            console.log(`Color del auto: ${this.color}`);
        }
    }
}

// Crear instancia de Vehiculo
const miVehiculo = new Vehiculo("Toyota", "Corolla", 2022, "Azul");
miVehiculo.encender();
console.log(`Modelo: ${miVehiculo.obtenerModelo()}`);
console.log(`Color: ${miVehiculo.color}`); // propiedad opcional

// Crear instancia de Auto (subclase)
const miAuto = new Auto("Honda", "Civic", 2023);
miAuto.mostrarDetalles();
