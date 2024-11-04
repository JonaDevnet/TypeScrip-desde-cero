
// OPERADOR KEYOF
/**
 * El operador keyof en TypeScript se usa para obtener 
 * las claves de un tipo o interfaz como un tipo de cadena. 
 * Es especialmente útil en funciones y genéricos cuando necesitas 
 * restringir los valores a las propiedades de un objeto.
 * 
 * Ej:
 * Supongamos que tienemos una interfaz Persona y quieres 
 * crear una función genérica obtenerPropiedad que pueda obtener 
 * el valor de cualquier propiedad de Persona, usando el operador 
 * keyof para asegurar que solo se usen claves válidas.
 */
// Definición de la interfaz Persona
interface Persona {
    nombre: string;
    edad: number;
    ciudad: string;
}

// Operador `keyof` para crear un tipo de claves de Persona
// `keyof Persona` es equivalente al tipo: "nombre" | "edad" | "ciudad"

// Función genérica que toma un objeto y una clave válida
function obtenerPropiedad<T, K extends keyof T>(objeto: T, clave: K): T[K] {
    return objeto[clave];
}

// Uso de la función con un objeto Persona
const persona: Persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

// Obtener el valor de propiedades específicas usando claves válidas
const nombre = obtenerPropiedad(persona, "nombre"); // "Juan"
const edad = obtenerPropiedad(persona, "edad");     // 30

console.log(`Nombre: ${nombre}`); // Nombre: Juan
console.log(`Edad: ${edad}`);     // Edad: 30


// KEYOF CON UTILITY TYPES
/**
 *  keyof junto con algunos utility tipes como Pick, Omit y 
 * Partial, que ayudan a manipular tipos de manera eficiente y segura.
 * 
 * Supongamos que tenemos una interfaz Producto y 
 * queremos crear variaciones de este tipo usando Utility Types.
 */

// Imaginemos que tenemos la siguiente interfaz Producto:
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
    enStock: boolean;
}

/**
 * Ahora, usaremos Utility Types (Pick, Omit, Partial) 
 * en combinación con keyof para crear diferentes variaciones 
 * del tipo Producto.
 */

// 1 - Pick
// Pick nos permite seleccionar solo algunas propiedades de un tipo.

// Usamos `Pick` para seleccionar solo "nombre" y "precio" de `Producto`
type ProductoBasico = Pick<Producto, "nombre" | "precio">;

const producto1: ProductoBasico = {
    nombre: "Laptop",
    precio: 1500,
};

console.log(producto1); // { nombre: 'Laptop', precio: 1500 }

/**
 * ProductoBasico contiene solo las propiedades nombre y precio de Producto. 
 * Esto es útil cuando necesitas trabajar con solo una parte del objeto.
 */

// 2 - Omit
// Omit hace lo contrario de Pick: excluye propiedades 
// específicas de un tipo.

// Usamos `Omit` para excluir la propiedad "enStock" de `Producto`
type ProductoSinStock = Omit<Producto, "enStock">;

const producto2: ProductoSinStock = {
    id: 1,
    nombre: "Teléfono",
    precio: 800,
    categoria: "Electrónica",
};

console.log(producto2); 
// Salida: { id: 1, nombre: 'Teléfono', precio: 800, categoria: 'Electrónica' }

/**
 * ProductoSinStock contiene todas las propiedades de Producto excepto enStock. 
 * Esto es útil cuando quieres representar un objeto sin ciertas propiedades.
 */

// 3 - Partial
// Partial convierte todas las propiedades de un tipo en opcionales.

// Usamos `Partial` para hacer todas las propiedades de `Producto` opcionales
type ProductoEditable = Partial<Producto>;

const producto3: ProductoEditable = {
    nombre: "Tablet",
    precio: 300,
};

console.log(producto3); // { nombre: 'Tablet', precio: 300 }

/**
 * ProductoEditable permite que cualquiera de las 
 * propiedades de Producto sea opcional.
 * Esto es útil cuando quieres construir o actualizar 
 * objetos de manera parcial, sin necesidad de incluir todas 
 * las propiedades.
 */

// USO COMBINADO DE KEYOF CON UTILITY TYPES
/**
 * es posible que queramos crear un tipo genérico que permita 
 * elegir un subconjunto de propiedades. Aquí usamos keyof junto 
 * con Pick y Partial para crear una función genérica que selecciona 
 * algunas propiedades de un objeto y las hace opcionales.
 */

// Función genérica que hace opcionales ciertas propiedades de un objeto
function obtenerPropiedades<T extends object, K extends keyof T>(objeto: T, claves: K[]): Pick<T, K> {
    const resultado = {} as Pick<T, K>;
    claves.forEach((clave) => {
        if (clave in objeto) {
            resultado[clave] = objeto[clave];
        }
    });
    return resultado;
}

const productoCompleto: Producto = {
    id: 2,
    nombre: "Monitor",
    precio: 200,
    categoria: "Electrónica",
    enStock: true,
};

// Seleccionar y hacer opcionales solo algunas propiedades de `Producto`
const productoParcial = obtenerPropiedades(productoCompleto, ["nombre", "precio"]);
console.log(productoParcial); // { nombre: 'Monitor', precio: 200 }


export {}