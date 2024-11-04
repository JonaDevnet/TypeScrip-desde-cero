# Proyecto de TypeScript: Conceptos y Ejemplos Prácticos

Este proyecto contiene ejemplos prácticos sobre los conceptos clave de TypeScript, incluyendo tipos de datos, genéricos, programación orientada a objetos (POO) y modularización. Cada carpeta y archivo dentro del proyecto tiene una explicación detallada y muestra ejemplos de cómo se implementan estos conceptos en TypeScript.

## Estructura del Proyecto

### 1. Tipos de Datos

- **Carpeta**: `TiposDeDatos/`
- **Archivo Principal**: `TiposDeDatos.ts`

Esta sección cubre los **tipos de datos básicos y avanzados** en TypeScript, incluyendo `any`, `unknown`, `never`, `arrays`, `tuplas`, `enums`, y tipos literales. Estos conceptos son esenciales para comprender cómo TypeScript maneja la tipificación fuerte.

### 2. Genéricos

- **Carpeta**: `Genericos/`
- **Archivos**:
  - `genericots.ts`
  - `Opkeyof.ts`

Esta carpeta presenta los **genéricos en TypeScript** y cómo proporcionan flexibilidad en funciones y clases para trabajar con diferentes tipos. También se incluye el archivo `Opkeyof.ts`, que demuestra cómo usar el operador `keyof` con genéricos y `utility types` para manipular tipos de objeto.

  - **`genericots.ts`**: Explica el uso de genéricos en funciones y clases.
  - **`Opkeyof.ts`**: Muestra cómo usar el operador `keyof` junto con `utility types` para trabajar con tipos de propiedades de objetos.

### 3. Programación Orientada a Objetos (POO)

- **Carpeta**: `POO/`
- **Archivos**:
  - `POO.ts`
  - `herencia.ts`
  - `getter-setter.ts`
  - `CA-Prop.ts`

En esta sección se exploran los conceptos fundamentales de la programación orientada a objetos en TypeScript, tales como clases, herencia, encapsulamiento (control de acceso), propiedades de lectura y escritura, y métodos `getter` y `setter`.

  - **`POO.ts`**: Introduce la creación de clases, propiedades y métodos.
  - **`herencia.ts`**: Demuestra cómo implementar herencia entre clases.
  - **`getter-setter.ts`**: Explica el uso de `getter` y `setter` para controlar el acceso a las propiedades.
  - **`CA-Prop.ts`**: Presenta el concepto de control de acceso, propiedades opcionales, propiedades de lectura y cómo declarar propiedades de parámetros en el constructor.

### 4. Modularización

- **Carpeta**: `Modularizacion/`
- **Archivos**:
  - `index.ts`
  - `operaciones.ts`
  - `principal.ts`

La carpeta `Modularizacion` muestra cómo **organizar código en módulos** en TypeScript para mejorar la claridad y la reutilización. Incluye ejemplos sobre `export` y `import` para exportar e importar funciones, clases y constantes entre archivos.

  - **`index.ts`**: Centraliza las exportaciones de las funciones de `operaciones.ts` y otros módulos, permitiendo importar desde un solo punto.
  - **`operaciones.ts`**: Define varias funciones de operaciones matemáticas como `suma`, `resta` y `multiplicación`.
  - **`principal.ts`**: Importa las funciones desde `index.ts` para usarlas en un contexto más amplio, demostrando cómo se pueden organizar las importaciones en un archivo principal.

## Guía de Uso

1. **Instalar Dependencias**: Asegúrate de tener Node.js y TypeScript instalados en tu entorno de desarrollo.
2. **Compilar el Proyecto**: Ejecuta `tsc` en la terminal desde el directorio raíz para compilar todos los archivos `.ts`.
3. **Ejecutar los Archivos**: Para cada sección o archivo, ejecuta `node <ruta_del_archivo_compilado>.js` para ver el resultado en la consola.

Cada archivo puede ejecutarse de forma independiente, ya que está diseñado para mostrar conceptos y funcionalidades específicas de TypeScript.

## Notas

- Sigue el orden sugerido para revisar cada archivo, ya que algunos conceptos avanzan sobre los ejemplos previos.
- Este proyecto se centra en la teoría y práctica de TypeScript y proporciona una estructura modular y escalable que es fácil de entender y mantener.
