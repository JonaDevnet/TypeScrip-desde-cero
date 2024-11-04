 //  * TIPOS DE TYPESCRIPT
//  * any
//  * unknown
//  * never
//  * arays
//  * tuplas
//  * Enums

// ANY
/**
 * any permite que una variable tome cualquier tipo,
 * sin ninguna validacion por parte del copilador
 */

let VariableAny: any;
console.log("any:", typeof VariableAny); // Salida: undefined

VariableAny = "Soy una variable any";
console.log("any:", typeof VariableAny); // Salida: string  

// UNKNOW
/**
 * unknow es mas seguro que any porque obliga
 * a realizar una validacion de tipo antes de usar 
 * la variable
 */
let VariableUnknow: unknown = "Soy una variable desconocida";
console.log("unknow:", typeof VariableUnknow); // Salida: string

VariableUnknow = 100;
console.log("unknow:", typeof VariableUnknow); // Salida: number

// Para usar una variable de tipo `unknow`, debes verificar
// su tipo antes de operar con ella
if(typeof VariableUnknow === "number") {
    console.log("Es un numero:", VariableUnknow * 2);
}

// NEVER
/**
 * never representa un tipo que nunca produce un valor,
 * como una funcion que siempre lanza un error
 * o entra en un bucle infinito
 */

function error(messege: string): never {
    throw new Error(messege);
}

try {
    error("Algo salio mal"); // Esta funcion nunca retorna
} catch (e) {
    console.log("never: Lanzo un error"); // Verifica el uso en ejecucion
}

// ARRAY
// Array en Typescript se definen con [] o usando Array<tipo>

let ArrayNumeros: number[] = [1,2,3,4,5];
console.log("Aray:", typeof ArrayNumeros); // Salida: object

ArrayNumeros.forEach(num => console.log("Elemento:", num));

// TUPLAS
/**
 * Las tuplas son arreglos con un numero fijo de elementos
 * de tipos especificos
 */

let Tuplas: [string, number] = ["Edad:", 25];
console.log("Tupla:", typeof Tuplas); // Salida: object

console.log(`Tupla - Primer elemento: ${Tuplas[0]}
            Segundo elemendo: ${Tuplas[1]}`);

// ENUMS
/**
 * Enums son un tipo especial que define un conjunto
 * de constantes con nombres descriptivos
 */

enum Direccion {
    Norte = 1,
    Sur,
    Este,
    Oeste
}

enum Colores {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}
let MiDireccion: Direccion = Direccion.Norte;
console.log("enum Direccion", typeof Direccion); // Salida: number
console.log(`Mi direccion es: ${Direccion[MiDireccion]}`); // Salida: 1

let MiColor: Colores = Colores.Azul;
console.log("enum Colores:", typeof Colores); // Salida: string
console.log(`Mi direccion es: ${Colores[MiColor]}`); // Salida: Azul

// TYPE
/**
 * type permite crear alias de tipos personalizados, utiles para
 * reutilizar estructuras complejas o definir tipos mas descriptivos
 */

type Persona = {
    nombre: string;
    edad: number;
    esEmpleado: boolean;
};

let persona: Persona = {
    nombre: 'Juan',
    edad: 30,
    esEmpleado: true
};

console.log("type:", typeof persona); // Output: object

// Accediendo a las propiedades
console.log(`Nombre: ${persona.nombre}, 
    Edad: ${persona.edad}, 
    Empleado: ${persona.esEmpleado}`);


// INTERFACES

interface Animal {
    name: string;
    Caminar(): void;
    Onomatopeya(): string;
}

class CaballoI implements Animal {
    name: string = 'Splinter';

    Caminar() {
        console.log('Caminando');
    }
    Onomatopeya(): string {
        return 'Hin.'; 
    }
}

class CerdoI implements Animal {
    name: string = 'Cochinito';

    Caminar() {
        console.log('Caminando');
    }
    Onomatopeya(): string {
        return 'Oinc.'; 
    }
}

class PerroI implements Animal {
    name: string = 'Vianca';
    Caminar(): void {
        console.log('Perro caminando');
    }
    Onomatopeya(): string {
        return 'Guau';
    } 
}

let caballo = new Caballo();
console.log(caballo);

console.log(caballo.Caminar());
console.log(caballo.Onomatopeya());


let cerdo = new Cerdo();
console.log(cerdo);

console.log(cerdo.Caminar());
console.log(cerdo.Onomatopeya());


let perro = new Perro();
console.log(perro);