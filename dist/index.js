"use strict";
class Personaje {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    static AgregarPersonaje() {
        Personaje.equipo++;
    }
    SubirNivel() {
        this.nivel = this.nivel + 2;
        return this.nivel;
    }
    CambiarHp(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
}
Personaje.equipo = 4;
const NuevoPersonaje = new Personaje(1, 'Jona', 1, 100);
const Personaje1 = new Personaje(2, 'Chancho', 1, 120);
Personaje.AgregarPersonaje();
console.log(NuevoPersonaje, Personaje1);
console.log(Personaje.getEquipo());
//# sourceMappingURL=index.js.map