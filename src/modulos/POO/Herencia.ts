/**
 * Vamos a crear una clase base llamada Empleado y 
 * luego una subclase llamada Gerente que hereda de Empleado. 
 * La subclase Gerente tendrá propiedades y métodos adicionales 
 * específicos de su rol.
 */

// Clase base Empleado
class Empleado {
    // Propiedades públicas y privadas
    public nombre: string;
    private _salario: number;
    
    // Constructor con propiedades de parámetros
    constructor(nombre: string, salario: number) {
        this.nombre = nombre;
        this._salario = salario;
    }

    // Getter para obtener el salario
    public get salario(): number {
        return this._salario;
    }

    // Método público para mostrar información del empleado
    public mostrarInformacion(): void {
        console.log(`Empleado: ${this.nombre}, Salario: ${this._salario}`);
    }

    // Método para calcular bonificación (puede ser sobrescrito)
    public calcularBonificacion(): number {
        return this._salario * 0.1; // 10% del salario
    }
}

// Clase derivada Gerente, que hereda de Empleado
class Gerente extends Empleado {
    // Propiedad adicional para la cantidad de empleados a cargo
    private empleadosACargo: number;

    // Constructor
    constructor(nombre: string, salario: number, empleadosACargo: number) {
        // Llamada al constructor de la clase base con `super`
        super(nombre, salario);
        this.empleadosACargo = empleadosACargo;
    }

    // Método público para mostrar información del gerente
    public override mostrarInformacion(): void {
        super.mostrarInformacion(); // Llama al método de la clase base
        console.log(`Empleados a cargo: ${this.empleadosACargo}`);
    }

    // Sobrescritura del método calcularBonificacion
    public override calcularBonificacion(): number {
        // Calcula una bonificación más alta para el gerente
        return this.salario * 0.2; // 20% del salario
    }
}

// Crear una instancia de Empleado
const empleado1 = new Empleado("Carlos", 50000);
empleado1.mostrarInformacion();
console.log(`Bonificación: ${empleado1.calcularBonificacion()}`);

// Crear una instancia de Gerente
const gerente1 = new Gerente("Ana", 80000, 5);
gerente1.mostrarInformacion();
console.log(`Bonificación: ${gerente1.calcularBonificacion()}`);



export {}