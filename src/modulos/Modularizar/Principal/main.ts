// IMPORTAR ELEMENTOS DE UN MODULO
/**
 * Cuando importas un módulo, hay dos maneras de
 * hacerlo, dependiendo de si el módulo tiene 
 * export o export default.
 */

// Importacion de export
/**
 * Si el modulo exporta elementos de forma regular
 * (sin default), se usa una importacion con 
 * nombres especificos.
 */

import { sumar, restar } from "../Operaciones/utils";

console.log(sumar(2, 3)); // 5
console.log(restar(5, 3)); // 2

/**
 * Estamos importando sumar y restar desde 
 * utils.ts. 
 * El archivo tiene el nombre 
 * exacto que se uso al exportar
 */

// Importacion de export default
/**
 * Si el modulo tiene un export default
 * puedes importarlo sin usar llaves {}, 
 * y puedes darle el nombre que quieras
 */

import multiplicar from "../Operaciones/operaciones";

console.log(multiplicar(4, 5)); // 20
