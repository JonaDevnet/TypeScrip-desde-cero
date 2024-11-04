"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function obtenerPrimerElemento(arreglo) {
    return arreglo.length > 0 ? arreglo[0] : undefined;
}
const numeros = [1, 2, 3, 4, 5];
const primerNumero = obtenerPrimerElemento(numeros);
console.log(`Primer número: ${primerNumero}`);
const nombres = ["Alice", "Bob", "Charlie"];
const primerNombre = obtenerPrimerElemento(nombres);
console.log(`Primer nombre: ${primerNombre}`);
const booleanos = [true, false, true];
const primerBooleano = obtenerPrimerElemento(booleanos);
console.log(`Primer valor booleano: ${primerBooleano}`);
const vacio = [];
const primerVacio = obtenerPrimerElemento(vacio);
console.log(`Primer elemento de un arreglo vacío: ${primerVacio}`);
class Pila {
    constructor() {
        this.elementos = [];
    }
    apilar(elemento) {
        this.elementos.push(elemento);
    }
    desapilar() {
        return this.elementos.pop();
    }
    cima() {
        return this.elementos[this.elementos.length - 1];
    }
    estaVacia() {
        return this.elementos.length === 0;
    }
}
const pilaNumeros = new Pila();
pilaNumeros.apilar(10);
pilaNumeros.apilar(20);
console.log(`Elemento en la cima: ${pilaNumeros.cima()}`);
const desapilado = pilaNumeros.desapilar();
console.log(`Desapilado: ${desapilado}`);
console.log(`Elemento en la cima después de desapilar: ${pilaNumeros.cima()}`);
const pilaCadenas = new Pila();
pilaCadenas.apilar("Hola");
pilaCadenas.apilar("Mundo");
console.log(`Elemento en la cima: ${pilaCadenas.cima()}`);
const desapiladoCadena = pilaCadenas.desapilar();
console.log(`Desapilado: ${desapiladoCadena}`);
console.log(`Elemento en la cima después de desapilar: ${pilaCadenas.cima()}`);
console.log(`¿La pila de números está vacía? ${pilaNumeros.estaVacia()}`);
class Almacen {
    constructor() {
        this.items = [];
    }
    agregar(item) {
        this.items.push(item);
    }
    obtenerItems() {
        return this.items;
    }
}
class ProductoGR {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
class Cliente {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
}
const almacenProductos = new Almacen();
almacenProductos.agregar(new ProductoGR("Laptop", 1200));
almacenProductos.agregar(new ProductoGR("Teléfono", 800));
console.log("Productos en el almacén:", almacenProductos.obtenerItems());
const almacenClientes = new Almacen();
almacenClientes.agregar(new Cliente("Alice", 1));
almacenClientes.agregar(new Cliente("Bob", 2));
console.log("Clientes en el almacén:", almacenClientes.obtenerItems());
class Elemento {
    constructor(titulo) {
        this.titulo = titulo;
    }
    mostrarInfo() {
        console.log(`Título: ${this.titulo}`);
    }
}
class Libro extends Elemento {
    constructor(titulo, autor) {
        super(titulo);
        this.autor = autor;
    }
    mostrarInfo() {
        console.log(`Libro: ${this.titulo}, Autor: ${this.autor}`);
    }
}
class Revista extends Elemento {
    constructor(titulo, edicion) {
        super(titulo);
        this.edicion = edicion;
    }
    mostrarInfo() {
        console.log(`Revista: ${this.titulo}, Edición: ${this.edicion}`);
    }
}
class Contenedor {
    constructor() {
        this.items = [];
    }
    agregar(item) {
        this.items.push(item);
    }
    listarItems() {
        this.items.forEach(item => item.mostrarInfo());
    }
}
const contenedorLibros = new Contenedor();
contenedorLibros.agregar(new Libro("El Principito", "Antoine de Saint-Exupéry"));
contenedorLibros.agregar(new Libro("1984", "George Orwell"));
const contenedorRevistas = new Contenedor();
contenedorRevistas.agregar(new Revista("National Geographic", 202));
contenedorRevistas.agregar(new Revista("Time", 1150));
console.log("Libros en el contenedor:");
contenedorLibros.listarItems();
console.log("Revistas en el contenedor:");
contenedorRevistas.listarItems();
//# sourceMappingURL=Genericos.js.map