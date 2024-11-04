
// REEXPORTACION
/**
 * TypeScript permite reexportar módulos o sus 
 * elementos. Esto es útil para consolidar 
 * varias exportaciones en un solo archivo.
 */

export { sumar, restar } from '../Operaciones/utils';
export { default as multiplicar } from '../Operaciones/operaciones';

/**
 * Al hacer esto, otros módulos pueden importar 
 * desde index.ts en lugar de hacerlo desde 
 * cada archivo específico.
 */