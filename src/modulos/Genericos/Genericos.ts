/**
 * Los genéricos permiten crear funciones que pueden 
 * trabajar con diferentes tipos sin perder la información de tipo. 
 * A continuación, vamos a crear una función que acepta un arreglo 
 * de elementos de cualquier tipo y devuelve el primer elemento del 
 * arreglo.
 */

// Función genérica para obtener el primer elemento de un arreglo
function obtenerPrimerElemento<T>(arreglo: T[]): T | undefined {
    return arreglo.length > 0 ? arreglo[0] : undefined;
}

// Usar la función con diferentes tipos
const numeros = [1, 2, 3, 4, 5];
const primerNumero = obtenerPrimerElemento(numeros);
console.log(`Primer número: ${primerNumero}`); // Primer número: 1

const nombres = ["Alice", "Bob", "Charlie"];
const primerNombre = obtenerPrimerElemento(nombres);
console.log(`Primer nombre: ${primerNombre}`); // Primer nombre: Alice

const booleanos = [true, false, true];
const primerBooleano = obtenerPrimerElemento(booleanos);
console.log(`Primer valor booleano: ${primerBooleano}`); // Primer valor booleano: true

// Usar la función con un arreglo vacío
const vacio: number[] = [];
const primerVacio = obtenerPrimerElemento(vacio);
console.log(`Primer elemento de un arreglo vacío: ${primerVacio}`); // Primer elemento de un arreglo vacío: undefined


// GENERICOS EN CLASES

/**
 * Vamos a crear una clase genérica que represente una Pila (stack), 
 * permitiendo almacenar elementos de cualquier tipo.
 */

// Clase genérica Pila
class Pila<T> {
    private elementos: T[] = []; // Arreglo privado para almacenar elementos de tipo T

    // Método para agregar un elemento a la pila
    public apilar(elemento: T): void {
        this.elementos.push(elemento);
    }

    // Método para quitar el elemento en la parte superior de la pila
    public desapilar(): T | undefined {
        return this.elementos.pop();
    }

    // Método para obtener el elemento en la parte superior sin quitarlo
    public cima(): T | undefined {
        return this.elementos[this.elementos.length - 1];
    }

    // Método para verificar si la pila está vacía
    public estaVacia(): boolean {
        return this.elementos.length === 0;
    }
}

// Crear una instancia de Pila para números
const pilaNumeros = new Pila<number>();
pilaNumeros.apilar(10);
pilaNumeros.apilar(20);
console.log(`Elemento en la cima: ${pilaNumeros.cima()}`); // Elemento en la cima: 20

// Desapilar un elemento
const desapilado = pilaNumeros.desapilar();
console.log(`Desapilado: ${desapilado}`); // Desapilado: 20
console.log(`Elemento en la cima después de desapilar: ${pilaNumeros.cima()}`); // Elemento en la cima después de desapilar: 10

// Crear una instancia de Pila para cadenas
const pilaCadenas = new Pila<string>();
pilaCadenas.apilar("Hola");
pilaCadenas.apilar("Mundo");
console.log(`Elemento en la cima: ${pilaCadenas.cima()}`); // Elemento en la cima: Mundo

// Desapilar un elemento
const desapiladoCadena = pilaCadenas.desapilar();
console.log(`Desapilado: ${desapiladoCadena}`); // Desapilado: Mundo
console.log(`Elemento en la cima después de desapilar: ${pilaCadenas.cima()}`); // Elemento en la cima después de desapilar: Hola

// Verificar si la pila de números está vacía
console.log(`¿La pila de números está vacía? ${pilaNumeros.estaVacia()}`); // ¿La pila de números está vacía? false


// GENERICOS CON RESTRICCIONES
/**
 * Cuando trabajamos con genéricos en TypeScript, a veces es 
 * útil establecer restricciones para limitar los tipos que 
 * pueden ser utilizados con una función, clase o interfaz genérica. 
 * Esto permite asegurar que los tipos proporcionados cumplen con 
 * ciertos requisitos, como implementar propiedades o métodos específicos
 */

// Definir una interfaz que debe ser implementada por los tipos restringidos
interface TieneNombre {
    nombre: string; // Propiedad requerida
}

// Clase genérica Almacen que acepta solo tipos que cumplen con la restricción TieneNombre
class Almacen<T extends TieneNombre> {
    private items: T[] = []; // Arreglo para almacenar elementos de tipo T

    // Método para agregar un elemento al almacén
    public agregar(item: T): void {
        this.items.push(item);
    }

    // Método para obtener todos los elementos del almacén
    public obtenerItems(): T[] {
        return this.items;
    }
}

// Crear una clase que cumple con la restricción
class ProductoGR implements TieneNombre {
    constructor(public nombre: string, public precio: number) {}
}

// Crear otra clase que también cumple con la restricción
class Cliente implements TieneNombre {
    constructor(public nombre: string, public id: number) {}
}

// Crear una instancia de Almacen para productos
const almacenProductos = new Almacen<ProductoGR>();
almacenProductos.agregar(new ProductoGR("Laptop", 1200));
almacenProductos.agregar(new ProductoGR("Teléfono", 800));
console.log("Productos en el almacén:", almacenProductos.obtenerItems());

// Crear una instancia de Almacen para clientes
const almacenClientes = new Almacen<Cliente>();
almacenClientes.agregar(new Cliente("Alice", 1));
almacenClientes.agregar(new Cliente("Bob", 2));
console.log("Clientes en el almacén:", almacenClientes.obtenerItems());

// GENERICOS CON HERENCIA
/**
 * El uso de genéricos con herencia en TypeScript permite 
 * crear clases o interfaces que no solo pueden trabajar 
 * con diferentes tipos, sino que también pueden extender 
 * otras clases o interfaces. Esto proporciona una gran 
 * flexibilidad al definir estructuras de datos que pueden ser 
 * más específicas mientras se aprovechan las propiedades y métodos 
 * de sus clases base.
 * 
 * Usaremos una clase base genérica Elemento y una clase 
 * Contenedor que aceptará solo tipos que extienden de Elemento. 
 * Además, incluiremos algunas clases derivadas para ilustrar cómo 
 * funciona la herencia con genéricos.
 * 
 * Ej:
 * Imaginemos que tenemos una estructura para gestionar 
 * Elementos en un contenedor. Creamos una clase base Elemento 
 * y luego clases derivadas específicas como Libro y Revista. 
 * Luego, crearemos una clase Contenedor que puede almacenar y 
 * gestionar solo objetos que extiendan de Elemento
 */

// Clase base Elemento
class Elemento {
    constructor(public titulo: string) {}

    // Método para mostrar la información del elemento
    mostrarInfo(): void {
        console.log(`Título: ${this.titulo}`);
    }
}

// Clase derivada Libro que extiende de Elemento
class Libro extends Elemento {
    constructor(titulo: string, public autor: string) {
        super(titulo);
    }

    // Método sobrescrito para mostrar la información específica de un libro
    override mostrarInfo(): void {
        console.log(`Libro: ${this.titulo}, Autor: ${this.autor}`);
    }
}

// Clase derivada Revista que extiende de Elemento
class Revista extends Elemento {
    constructor(titulo: string, public edicion: number) {
        super(titulo);
    }

    // Método sobrescrito para mostrar la información específica de una revista
    override mostrarInfo(): void {
        console.log(`Revista: ${this.titulo}, Edición: ${this.edicion}`);
    }
}

// Clase genérica Contenedor que acepta tipos que extienden de Elemento
class Contenedor<T extends Elemento> {
    private items: T[] = [];

    // Método para agregar un elemento al contenedor
    agregar(item: T): void {
        this.items.push(item);
    }

    // Método para listar todos los elementos en el contenedor
    listarItems(): void {
        this.items.forEach(item => item.mostrarInfo());
    }
}

// Crear una instancia de Contenedor para libros
const contenedorLibros = new Contenedor<Libro>();
contenedorLibros.agregar(new Libro("El Principito", "Antoine de Saint-Exupéry"));
contenedorLibros.agregar(new Libro("1984", "George Orwell"));

// Crear una instancia de Contenedor para revistas
const contenedorRevistas = new Contenedor<Revista>();
contenedorRevistas.agregar(new Revista("National Geographic", 202));
contenedorRevistas.agregar(new Revista("Time", 1150));

// Mostrar los libros en el contenedor de libros
console.log("Libros en el contenedor:");
contenedorLibros.listarItems();

// Mostrar las revistas en el contenedor de revistas
console.log("Revistas en el contenedor:");
contenedorRevistas.listarItems();

export {}