/*
function Mexico(nombre, apellido){

    this.nombre = nombre;
    this.apellido = apellido;
  
    this.saludar2 = function(){
        console.log("Hola mundo");
    }
};

Mexico.prototype.saludar = function(){
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);
};

const persona = {

    nombre: "Adam",
    Apellido: "Ramirez"

};

const persona1 = new Mexico();
persona1.saludar2();
console.log(persona1);
*/

// Herencia prototipal.

function Animal(nombre, genero){

    this.nombre = nombre;
    this.genero = genero;

}

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

Animal.prototype.sonar = function(){
    console.log(`Hago sonidos porque estoy vivo`);
}

function Perro(nombre, genero, tamano){

    this.super(nombre, genero);
    this.tamano = tamano;
    
}

Perro.prototype.ladrar = function(){
    console.log("Ladrando");
}

Perro.prototype = new Animal("Solovino", "Macho", "Medio metro");
Perro.prototype.constructor = Perro;
Perro.ladrar


