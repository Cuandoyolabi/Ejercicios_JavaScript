class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años `);
    }
}

const Adam = new Persona("Adam", 22);
Adam.saludar();


class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido(){
        console.log(`El animal hace un sonido`);
    }
}

class Perro extends Animal {
    constructor(nombre){
        super(nombre)

    }
        hacerSonido(){
            console.log(`El ${this.nombre} ladra.`);
        }
    
}

const solovino = new Perro("Solovino");
solovino.hacerSonido();

class Coche{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    detalles(){
        console.log(`Èl coche es un ${this.marca} ${this.modelo}`);
    }
}

const toyota =  new Coche("Toyota", "G40");
toyota.detalles();