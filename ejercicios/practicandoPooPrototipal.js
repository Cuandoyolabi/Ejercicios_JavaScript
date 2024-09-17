/*
function Vehiculo(tipo){
    this.tipo = tipo;
}

Vehiculo.prototype.mover = function(){
    console.log(`El ${this.tipo} se esta moviendo`);
}

const coche = new Vehiculo("Coche");
coche.mover();

// Ejemplo 2

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.hablar = function(){
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
}

const juan = new Persona("Juan", 30);
juan.hablar();

//Ejemplo 3

function Circulo(radio){
    this.radio = radio;
}

Circulo.prototype.area = function(){
    return Math.PI * this.radio * 2;
}

const circuloGrande = new Circulo(10);
console.log(circuloGrande.area());


//Ejemplo 4 Cuenta bancaria

function CuentaBancaria(saldoInicial){
    this.saldo = saldoInicial;
}

CuentaBancaria.prototype.depositar = function(cantidad){
    this.saldo += cantidad;
}

CuentaBancaria.prototype.obtenerSaldo = function(){
    return this.saldo;
}

const miCuenta = new CuentaBancaria(1000);
miCuenta.depositar(500);
console.log(miCuenta.obtenerSaldo());
miCuenta.depositar(500);
console.log(miCuenta.obtenerSaldo());

//Ejemplo 5

function Animal(nombre){
    this.nombre = nombre;
}

Animal.prototype.hacerSonido = function(){
    console.log(`${this.nombre} esta haciendo un sonido`);
};

const perro = new Animal("Perro");
perro.hacerSonido();
*/
//Herencia prototipal.
/*
function Vehiculo(tipo){
    this.tipo = tipo;
}

Vehiculo.prototype.mover = function(){
    console.log(`${this.tipo} se esta moviendo`);
};

function Coche(marca){
    Vehiculo.call(this, "Coche");
    this.marca = marca;
}

Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;

const miCoche = new Coche("Toyota");
miCoche.mover();
*/