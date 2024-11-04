"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const respuesta = yield fetch(`${recurso}`);
        return respuesta.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchData('/usuarios');
    });
}
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({
    encender: () => { },
    apagar: () => { },
});
function fetchProduct() {
    return {
        key: 'id de producto',
        Value: { id: 'id de producto' }
    };
}
function fetchStock() {
    return {
        key: 'id de producto',
        Value: 500,
    };
}
class Usuario {
    constructor(id) {
        this.id = id;
    }
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: 'user_id', name: 'Felpe' });
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
const estadoUsuario = new Estado;
class EstadoEliminar extends Estado {
    eliminar(id) {
        this.data = this.data.filter(x => x.id !== id);
    }
}
class EstadoUsuario extends Estado {
    reiniciarConstrasenas() {
    }
}
const estadoUsuarios = new EstadoUsuario();
const calendar = { id: 1, fuente: 'Google', dueno: 'yo' };
function getProp(objeto, property) {
    return objeto[property];
}
getProp(calendar, 'id');
getProp(calendar, 'fuente');
const KeyVal = {
    'Soy un string': 42
};
const p = {
    x: 1,
    y: 2,
};
const p1 = {
    x: 1,
    y: 2,
};
const readOnlyP = {
    x: 1,
    y: 2,
    desc: 'Soy una descripcion',
};
//# sourceMappingURL=genericos.js.map