// TYPE
/**
 * Union Types permiten que una variable tenga más de un tipo posible. 
 *  En este caso, la variable puede ser string o number.
 */

// Definimos una función que acepta un parámetro que puede ser `string` o `number`
function procesarValor(valor: string | number): void {
    if (typeof valor === "string") {
        console.log(`El valor es un string de longitud ${valor.length}: "${valor}"`);
    } else {
        console.log(`El valor es un número que, multiplicado por 2, es: ${valor * 2}`);
    }
}

// Usamos la función con diferentes tipos
procesarValor("Hola Mundo");
procesarValor(42);

// Otro ejemplo: una variable que puede ser `Persona` o un `string`
type PersonaUT = {
    nombre: string;
    edad: number;
};

let dato: PersonaUT | string;

dato = { nombre: "Ana", edad: 28 };
if (typeof dato === "object") {
    console.log(`Persona: ${dato.nombre}, Edad: ${dato.edad}`);
}

dato = "Desconocido";
if (typeof dato === "string") {
    console.log(`Dato es un string: "${dato}"`);
}

// LITERAL TYPES
/**
 * Los Literal Types permiten restringir una variable para que solo 
 * pueda tomar valores específicos (como cadenas o números exactos)
 */

// Definimos un tipo literal para colores específicos
type Color = "rojo" | "verde" | "azul";

// Variable que solo puede tener los valores definidos en el tipo Color
let colorFavorito: Color;

colorFavorito = "rojo"; // ✅ Válido
console.log(`Mi color favorito es: ${colorFavorito}`);

// colorFavorito = "amarillo"; // ❌ Error: No es un valor permitido

// Otro ejemplo: tipo literal para acciones
type Accion = "iniciar" | "pausar" | "detener";

function ejecutarAccion(accion: Accion): void {
    console.log(`Acción ejecutada: ${accion}`);
}

// Llamadas válidas
ejecutarAccion("iniciar");
ejecutarAccion("detener");

// ejecutarAccion("salir"); //  Error: No es una acción permitida

// NULLABLE TYPES
/**
 * Nullable Types en TypeScript permiten que una variable o 
 * propiedad pueda tener su valor normal o ser null o undefined
 */

// Definimos un tipo para una variable que puede ser un string o null
let mensaje: string | null = "Hola, mundo";

console.log(`Mensaje: ${mensaje}`); // Output: Hola, mundo
console.log("Tipo:", typeof mensaje); // Output: string

// Asignamos null a la variable
mensaje = null;
console.log(`Mensaje: ${mensaje}`); // Output: null
console.log("Tipo:", typeof mensaje); // Output: object (así se comporta typeof con null)

// Función que acepta un string o undefined
function saludar(nombre?: string): void {
    if (nombre) {
        console.log(`Hola, ${nombre}!`);
    } else {
        console.log("Hola, visitante!");
    }
}

// Llamadas válidas
saludar("Carlos");  // Output: Hola, Carlos!
saludar(undefined); // Output: Hola, visitante!
saludar();          // Output: Hola, visitante!

// OPTIONAL CHAINING -> ? <-
/**
 * Optional Chaining permite acceder a propiedades de objetos 
 * anidados sin generar errores, incluso si alguna propiedad 
 * intermedia es null o undefined
 */

// Definimos un tipo Persona con una propiedad opcional 'direccion'
type PersonaOC = {
    nombre: string;
    direccion?: {
        calle: string;
        ciudad: string;
    };
};

// Creamos dos personas: una con dirección y otra sin dirección
let personaConDireccion: PersonaOC = {
    nombre: "Carlos",
    direccion: { calle: "Avenida Siempre Viva", ciudad: "Springfield" }
};

let personaSinDireccion: PersonaOC = {
    nombre: "Ana"
};

// Usamos Optional Chaining para acceder a la calle de cada persona
console.log(`Dirección de Carlos: ${personaConDireccion.direccion?.calle ?? "No disponible"}`);
console.log(`Dirección de Ana: ${personaSinDireccion.direccion?.calle ?? "No disponible"}`);

// TYPE ASSERTION
/**
 * Type Assertion en TypeScript. Este mecanismo le dice explícitamente 
 * al compilador que trate una variable como un tipo específico, incluso 
 * si no lo infiere de manera automática
 */

// Definimos un tipo general Persona
type PersonaTA = {
    nombre: string;
    edad: number;
};

// Definimos otro tipo más específico: Empleado, que extiende de Persona
type Empleado = PersonaTA & {
    salario: number;
};

// Creamos un objeto de tipo Persona
let personaTA: PersonaTA = { nombre: "Juan", edad: 25 };

// Usamos Type Assertion para tratar 'persona' como un Empleado
let empleado = personaTA as Empleado;

// Asignamos la propiedad 'salario' gracias a la aserción de tipo
empleado.salario = 50000;

console.log(`Empleado: ${empleado.nombre}, Edad: ${empleado.edad}, Salario: ${empleado.salario}`);

// TYPE NARROWING
/**
 * Type Narrowing en TypeScript. Type Narrowing se refiere a la 
 * capacidad de reducir un tipo a un subconjunto más 
 * específico utilizando verificaciones de tipo en tiempo de ejecución.
 */

// Definimos una función que acepta un parámetro de tipo `string | number`
function procesarEntrada(entrada: string | number) {
    if (typeof entrada === "string") {
        // Type Narrowing reduce el tipo a `string` en este bloque
        console.log(`La entrada es un string de longitud ${entrada.length}`);
    } else {
        // Aquí, el tipo se reduce a `number`
        console.log(`La entrada es un número al cuadrado: ${entrada * entrada}`);
    }
}

// Llamamos a la función con diferentes tipos de entrada
procesarEntrada("Hola");
procesarEntrada(5);


// TYPE UNKNOWN
/**
 * Type Narrowing aplicado a un tipo unknown en TypeScript. 
 * unknown es útil para variables de tipo desconocido, y Type Narrowing 
 * permite verificar su tipo en tiempo de ejecución antes de 
 * operar con ellas.
 */

function procesarValorTU(valor: unknown) {
    if (typeof valor === "string") {
        // Aquí el tipo se reduce a `string`
        console.log(`El valor es un string de longitud ${valor.length}`);
    } else if (typeof valor === "number") {
        // Aquí el tipo se reduce a `number`
        console.log(`El valor es un número y su doble es: ${valor * 2}`);
    } else if (typeof valor === "boolean") {
        // Aquí el tipo se reduce a `boolean`
        console.log(`El valor es un booleano con valor: ${valor}`);
    } else {
        console.log("El valor es de un tipo no reconocido.");
    }
}

// Llamadas a la función con diferentes tipos de valor
procesarValorTU("Hola");
procesarValorTU(10);
procesarValorTU(true);
procesarValorTU({ clave: "valor" });

