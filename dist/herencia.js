"use strict";
class DatosBasicos {
    constructor(name, desc, created_at, created_by) {
        this.name = name;
        this.desc = desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get FullYear() {
        return this.created_at.getFullYear();
    }
    get FullDesc() {
        return this.name + ' - ' + this.desc;
    }
}
class Producto extends DatosBasicos {
    constructor(stock, sku, name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    get FullDesc() {
        return 'Producto ' + super.FullDesc;
    }
    Guardar() {
        console.log('Guardando producto.');
    }
}
class Categoria extends DatosBasicos {
    constructor(name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.productos = [];
    }
    AgregarProducto(producto) {
        this.productos.push(producto);
    }
    get FullDesc() {
        return 'Categoria: ' + super.FullDesc;
    }
    Guardar() {
        console.log('Guardando categoria.');
    }
}
let producto1 = new Producto(100, 1, 'shapoo', 'bueno para el pelo', new Date(), 1);
let categoria = new Categoria('Higiene', '', new Date(), 1);
categoria.AgregarProducto(producto1);
console.log(producto1.FullDesc);
//# sourceMappingURL=herencia.js.map