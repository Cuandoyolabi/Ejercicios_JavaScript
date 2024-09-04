//10 Ejemplos de Herencia, Polimorfismo y Encapsulacion.
//Ejemplo 1 
/*
class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }

    hablar(){
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    constructor(nombre, raza){
        super(nombre);
        this.raza = raza;
    }

    hablar(){
        console.log(`${this.nombre} ladra.`);
    }
}

const Solovino = new Perro("Solovino", "desconocido");
Solovino.hablar();
*/

//Ejemplo 2 
/*
class Reloj{
    constructor(nombre, modelo){
        this.nombre = nombre;
        this.modelo = modelo;
        const fecha = new Date();
        this.horas = fecha.getHours();  
        this.minutos = fecha.getMinutes();
        this.segundos = fecha.getSeconds();
    }

    darLaHora(){
        console.log(`Son las ${this.horas}:${this.minutos}`);
    }
}

class Cassio extends Reloj{
    constructor(nombre,modelo, color){
        super(nombre,modelo);
        this.color = color;
    }

    darLaHora(){
        console.log(`Son las ${this.horas}:${this.minutos}:${this.segundos}`);
    }
}

function darLaHora(reloj){
    reloj.darLaHora();
}
 

const Armani = new Reloj();
Armani.darLaHora();
const miCassio = new Cassio();
miCassio.darLaHora();

darLaHora(miCassio);
darLaHora(Armani);
*/

//Ejemplo 3 
/*
class Empleado {
    constructor(nombre, edad, salario, departamento){
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario;
        this.departamento = departamento;
    }

    trabajar(){
        console.log("El empleado esta trabajando");
    }
    tomarCafe(){
        console.log("El empleado esta tomando cafe");
    }
    tomarReunion(){
        console.log("El empleado esta tomando una reunion");
    }
}

class Programador extends Empleado{
    constructor(nombre, edad, salario, departamento, ocupacion){
        super(nombre, edad, salario,departamento);
        this.ocupacion = ocupacion;
    }

    trabajar(){
        console.log(`El programador ${this.nombre} esta codeando`);
    }
    tomarCafe(){
        console.log("El programador va por su tercera taza de cafe");
    }
    tomarReunion(){
        console.log("El programador ya lleva 6 reuniones hoy");
    }
}

class Diseñador extends Empleado {
    constructor(nombre,edad,salario,departamento,ocupacion){
        super(nombre,edad,salario,departamento)
        this.ocupacion = ocupacion;
    }

    trabajar(){
        console.log("El Diseñador esta diseñando una nueva plantilla");
    }
    tomarCafe(){
        console.log("El Diseñador va por su tercera quinta de cafe");
    }
    tomarReunion(){
        console.log("El Diseñador ya lleva 2 reuniones hoy");
    }
}

const Adam = new Programador("Adam", 22, 35000, "Frontend Dev", "Codificar");
Adam.trabajar();
const Julian = new Diseñador("Julian", 25,22000, "Diseñador Frontend","Diseñar");
Julian.trabajar();
Adam.tomarCafe();
Julian.tomarReunion();
*/

//Ejemplo 4 
//Probando Encapsulamiento por primera vez.
//Para poder encapsular necesitas usar # al principio y en el constructor.
/*
class Persona{
    #nombre;
    #edad;

    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    saludar(){
        console.log(`Hola me llamo ${this.#nombre}`);
    }
}

const Adam = new Persona("Adam", 22);
Adam.saludar();
console.log(Adam.nombre);
console.log(Adam.edad);
*/

//Ejemplo 5 Gestion de eventos.
/*
class Evento {
    
    #cliente;

    constructor(fecha, ubicacion, direccion, cliente){
        this.fecha = fecha;
        this.ubicacion = ubicacion;
        this.direccion = direccion;
        this.#cliente = cliente;
    }

}

class Concierto extends Evento{
    constructor(fecha, ubicacion, direccion, cliente, artista, horas){
        super(fecha, ubicacion, direccion, cliente)
        this.artista = artista;
        this.horas = horas;
    }

}

class Boda extends Evento {
    constructor(fecha, ubicacion, direccion, cliente, horas){
        super(fecha, ubicacion, direccion, cliente)
        
    }
}

const Evento__num1 = new Evento("22/07/2024", "San jose", "Calle 33", "Angela");
*/

