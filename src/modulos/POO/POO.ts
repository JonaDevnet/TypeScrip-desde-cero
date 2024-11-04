// PROGRAMACION ORIENTADA A OBJETOS CON TYPESCRIPT

/**
 * una clase es una estructura que permite organizar y 
 * agrupar datos y métodos que trabajan sobre esos datos.
 * Componentes principales:
 * propiedades, constructores, métodos, 
 * y cómo funcionan los 
 * finalizadores (aunque estos se gestionan de una forma distinta 
 * en TypeScript debido a su administración automática de memoria).
 */

class Persona {   
    // Constructor con propiedades
    constructor( public nombre: string, private edad: number) {
        this.nombre = nombre;
        this.edad = edad;
        console.log("Constructor: Una nueva persona ha sido creada.");
    }

    // Métodos
    saludar(): void {
        console.log(`Hola, me llamo ${this.nombre}.`);
    }

    obtenerEdad(): number {
        return this.edad;
    }

    // Método de limpieza (manual)
    limpiar(): void {
        console.log(`Limpiando recursos de ${this.nombre}`);
    }
}

// Crear una instancia de la clase Persona
const persona = new Persona("Ana", 25);
persona.saludar();
console.log(persona.nombre); //  Accesible (public)
console.log(persona.obtenerEdad()); //  Accesible (public)
console.log('Destructor.' + persona.limpiar())

// Un ejepmlo mas complejo

class CuentaBancaria {
    private saldo: number;  // Modificador private
    public titular: string;

    // Constructor
    constructor(titular: string, saldoInicial: number = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    // Método para consultar el saldo
    consultarSaldo(): number {
        return this.saldo;
    }

    // Método para depositar dinero
    depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`${cantidad} depositado. Saldo actual: ${this.saldo}`);
        } else {
            console.log("La cantidad debe ser positiva.");
        }
    }

    // Método para retirar dinero
    retirar(cantidad: number): void {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`${cantidad} retirado. Saldo actual: ${this.saldo}`);
        } else {
            console.log("Fondos insuficientes o cantidad inválida.");
        }
    }
}

// Crear una instancia y operar
const cuenta = new CuentaBancaria("Ana", 1000);
console.log(`Titular: ${cuenta.titular}`);
cuenta.consultarSaldo();
cuenta.depositar(500);
cuenta.retirar(200);

// TYPE NARROWING PARA OBJETOS
/**
 * Type Narrowing para objetos permite que el compilador 
 * infiera un tipo más específico de un objeto mediante 
 * verificaciones de propiedades. Esto es útil cuando un objeto 
 * puede tener múltiples formas (tipos) y necesitas verificar 
 * su tipo antes de acceder a propiedades específicas.
 * 
 * Ejemplo:
 * Supongamos que tienes una interfaz base Animal con dos 
 * interfaces derivadas: Perro y Gato, y quieres diferenciar 
 * entre ellos antes de acceder a sus propiedades particulares.
 */

// Interfaz base
interface Animal {
    nombre: string;
}

// Interfaz Perro, que extiende de Animal
interface Perro extends Animal {
    ladra: boolean;
    hacerSonido: () => string;
}

// Interfaz Gato, que extiende de Animal
interface Gato extends Animal {
    maulla: boolean;
    hacerSonido: () => string;
}

// Función para procesar un objeto Animal, que puede ser un Perro o un Gato
function procesarAnimal(animal: Animal ) {
    // Type Narrowing para diferenciar entre Perro y Gato usando 'in'
    if ('ladra' in animal) {
        const perro = animal as Perro; // Convertimos el tipo de manera segura a Perro
        console.log(`El animal es un perro y su nombre es ${perro.nombre}. ¿Ladra? ${perro.ladra}`);
        console.log(perro.hacerSonido());
    } else if ('maulla' in animal) {
        const gato = animal as Gato; // Convertimos el tipo de manera segura a Gato
        console.log(`El animal es un gato y su nombre es ${gato.nombre}. ¿Maúlla? ${gato.maulla}`);
        console.log(gato.hacerSonido());
    } else {
        console.log("El animal no es ni un perro ni un gato.");
    }
}

// Instanciamos objetos de tipo Perro y Gato
const miPerro: Perro = { nombre: "Max", ladra: true, hacerSonido: () => "Guau guau!" };
const miGato: Gato = { nombre: "Luna", maulla: true, hacerSonido: () => "Miau miau!" };

// Llamamos a la función con diferentes tipos de animales
procesarAnimal(miPerro);  // Output: El animal es un perro y su nombre es Max. ¿Ladra? true
procesarAnimal(miGato);   // Output: El animal es un gato y su nombre es Luna. ¿Maúlla? true

// con instanceof ahora

class Pez {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): string {
        return "Blub blub!";
    }

    nadar(): string {
        return `${this.nombre} está nadando en el agua.`;
    }
}

class Pajaro {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): string {
        return "Pio pio!";
    }

    volar(): string {
        return `${this.nombre} está volando alto en el cielo.`;
    }
}

function interactuarConAnimal(animal: Pez | Pajaro) {
    if (animal instanceof Pez) {
        console.log(animal.hacerSonido());  // "Blub blub!"
        console.log(animal.nadar());        // Método específico de Pez
    } else if (animal instanceof Pajaro) {
        console.log(animal.hacerSonido());  // "Pio pio!"
        console.log(animal.volar());        // Método específico de Pajaro
    }
}

// Crear instancias de Pez y Pajaro
const miPez = new Pez("Nemo");
const miPajaro = new Pajaro("Tweety");

// Probar la función interactuarConAnimal
interactuarConAnimal(miPez);
interactuarConAnimal(miPajaro);

export{}