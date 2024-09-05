//Ejercicio 1
/*
Crea una clase Usuario con las siguientes propiedades privadas usando # (encapsulamiento):

#nombre
#edad
#email
Los métodos públicos deben ser:

setNombre, getNombre: para actualizar y obtener el nombre.
setEdad, getEdad: para actualizar y obtener la edad.
setEmail, getEmail: para actualizar y obtener el email.
Un método saludar: que imprima "Hola, soy [nombre], tengo [edad] años y mi email es [email]".
Instrucciones:

Crea varias instancias de la clase Usuario.
Actualiza las propiedades utilizando los métodos set.
Usa el método saludar para mostrar la información de los usuarios.
*/
/*
class Usuario {
    #nombre
    #edad
    #email

    constructor(nombre, edad, email){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#email = email;
    }

    setNombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
    getNombre(){
        console.log(this.#nombre);
    }
    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
    }
    getEdad(){
        console.log(this.#edad);
    }
    setEmail(nuevoEmail){
        this.#email = nuevoEmail;
    }
    getEmail(){
        console.log(this.#email);
    }
    saludar(){
        console.log(`Hola, soy ${this.#nombre}, tengo ${this.#edad} y mi email es: ${this.#email}`);
    }
}

const persona = new Usuario("Adam", 22, "adaminzunza3@gmail.com");
persona.getNombre();
persona.setNombre("Julian");
persona.saludar();
persona.getNombre();
persona.setEdad(23);
persona.getEdad();
persona.setEmail("adaminzunza4@gmail.com");
persona.getEmail();
*/
/*
Ejercicio 2: Herencia y Polimorfismo con Vehículos
Crea una clase base Vehiculo con las siguientes propiedades y métodos:

marca (cadena)
modelo (cadena)
velocidadMaxima (número)
Un método detalles: que imprima "Este es un [marca] [modelo] con una velocidad máxima de [velocidadMaxima] km/h".
Luego, crea las siguientes clases que hereden de Vehiculo:

Clase Coche: debe tener una propiedad adicional tipoCombustible (gasolina, diésel, eléctrico). Sobreescribe el método detalles para incluir esta información.
Clase Moto: debe tener una propiedad adicional cilindrada (número) y sobreescribir detalles para incluirla en el mensaje.
Instrucciones:

Crea varias instancias de Coche y Moto.
Llama al método detalles en ambas instancias para mostrar la información de cada vehículo, incluyendo sus características específicas.
*/

class Vehiculo{
    constructor(marca, modelo, velocidadMaxima){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
    }

    detalles(){
        console.log(`Este es un ${this.marca} ${this.modelo} con una velocidad maxima de ${this.velocidadMaxima} km/h`);
    }
}

class Coche extends Vehiculo{
    constructor(marca,modelo,velocidadMaxima,tipoCombustible ) {
        super(marca,modelo,velocidadMaxima)
        this.tipoCombustible = tipoCombustible;
    }

    detalles(){
        console.log(`Este es un ${this.marca} ${this.modelo} con una velocidad maxima de ${this.velocidadMaxima} km/h y el tipo de gasolina es ${this.tipoCombustible}`)
    }
}

class Moto extends Vehiculo{
    constructor(marca,modelo,velocidadMaxima, cilindro){
        super(marca,modelo,velocidadMaxima);
        this.cilindro = cilindro;
    }

    detalles(){
        console.log(`Este es un ${this.marca} ${this.modelo} con una velocidad maxima de ${this.velocidadMaxima} km/h y el tipo de cilindro es ${this.cilindro}`)
    }
}

const bocho = new Coche("bocho","G40",200, "Gasolina verde");
bocho.detalles();

const rgtx3000 = new Moto("rgtx", "3000",300, "4500P");
rgtx3000.detalles();