"use strict";
class Caballo {
    constructor() {
        this.name = 'Splinter';
    }
    Caminar() {
        console.log('Caminando');
    }
    Onomatopeya() {
        return 'Hin.';
    }
}
class Cerdo {
    constructor() {
        this.name = 'Cochinito';
    }
    Caminar() {
        console.log('Caminando');
    }
    Onomatopeya() {
        return 'Oinc.';
    }
}
class Perro {
    constructor() {
        this.name = 'Vianca';
    }
    Caminar() {
        console.log('Perro caminando');
    }
    Onomatopeya() {
        return 'Guau';
    }
}
class DiccionarioUsuario {
}
let diccionarioUsuario = new DiccionarioUsuario();
diccionarioUsuario['1a'] = 'usuario 1';
diccionarioUsuario['a1'] = 'usuario 2';
console.log(diccionarioUsuario);
//# sourceMappingURL=interfaces.js.map