//Creacion de 10 ejemplos en POO
//Ejemplo 1
/*
class Perro {
    constructor(nombre, raza){
        this.nombre = nombre;
        this.edad = raza;
    }

    ladrar(){
        console.log(`${this.nombre} esta ladrando`);
    }
}

const solovino = new Perro("Solovino", "Puddle");
solovino.ladrar();


//Ejemplo 2

class Carro{
    constructor(año, marca){
        this.año = año;
        this.marca = marca;
    }

    prender(){
        console.log(`El carro ya prendio (RUNNNN RUNNN)`);
    }

    apagar(){
        console.log(`El carro esta apagado`);
    }
}

const camioneta = new Carro(2024, "Toyota");
camioneta.prender();
camioneta.apagar();


//Ejemplo 3
/*
class Consola{
    constructor(año, nombre, cantidadDeJuegos){
        this.año = año;
        this.nombre = nombre;
        this.cantidadDeJuegos = cantidadDeJuegos;
        this.prendida = false;
    }

    prender(){
        this.prendida = true;
        console.log(`La ${this.nombre} esta prendida`);
    }

    reproducirJuego(juego){
        if(this.prendida == true){
            console.log(`El juego ${juego} se esta reproduciendo`);
        } else {
            console.log("La consola esta apagada");
        }
    }
}

const nintendo = new Consola(2020,"Nintendo Switch", 30);
nintendo.reproducirJuego("Roblox");
nintendo.prender();
nintendo.reproducirJuego("Doom");
*/

//Ejemplo 4
/*
class Microndas{
    constructor(nombre, año, kw, color){
        this.nombre = nombre;
        this.año = año;
        this.kw = kw;
        this.color = color;
        this.puertaAbierta = false;
        this.comidaAdentro = false;
    }

    abrirPuerta(){
        this.puertaAbierta = true;
        console.log("La puerta esta abierta, puedes meter tu comida");
    }

    meterComida(comida){
        if(this.puertaAbierta == false){
            console.log("Primero abre la puerta");
        } else{
            this.comidaAdentro = true;
            console.log(`Tu comida ${comida}, esta dentro`);
        }
    }

    cerrarPuerta(){
        this.puertaAbierta = false;
        console.log("La puerta se cerro");
    }

    calentarComida(){
        if(this.puertaAbierta == false && this.comidaAdentro == true){
            console.log("Calentando tu comida");
            setTimeout( () => {
                console.log("Tu comida ya esta lista");
            }, 10000)

        } else if(this.comidaAdentro == false){
            console.log("No hay comida adentro");
        } else if(this.puertaAbierta == true){
            console.log("Cierra la puerta para empezar");
        }
    }
}

const microHornito = new Microndas("microhornitoK", 2002, 1200, "verde");
microHornito.meterComida("Pizza");
microHornito.abrirPuerta();
microHornito.meterComida("Pizza");
console.log(microHornito.puertaAbierta);
microHornito.calentarComida();
microHornito.cerrarPuerta();
microHornito.calentarComida();
*/

//Ejemplo 5 
/*
class Calculadora{
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }

    sumar(numero1, numero2){
        let resultado = numero1 + numero2;
        console.log(resultado);
    }
    restar(numero1,numero2){
        let resultado = numero1 - numero2;
        console.log(resultado);
    }
    multiplicar(numero1,numero2){
        let resultado = numero1 * numero2;
        console.log(resultado);
    }
    dividir(numero1,numero2){
        let resultado = numero1 / numero2;
        console.log(resultado);
    }
}

const calculadora_num1 = new Calculadora("Calculadorsita", "Blanca");
calculadora_num1.sumar(10, 25);
calculadora_num1.restar(35, 38);
calculadora_num1.multiplicar(46, 90);
calculadora_num1.dividir(50, 3);


//Ejemplo 6

class Cafetera{
    constructor(modelo){
        this.modelo = modelo;
        this.prendida = false;
        this.agua = false;
        this.cafe = false;
    }

    encender(){
        this.prendida = true;
        console.log("La cafetera esta prendida");
    }

    apagar(){
        this.prendida = false;
        console.log("La cafetera esta apagada");
    }

    depositarAgua(){
        if(this.agua == true){
            console.log("La cafetera realmente ya esta llena");
        } else {
            this.agua = true;
            console.log("La cafetera ya tiene agua");
        }  
    }

    depositarCafe(){
        if(this.cafe == true){
            console.log("La cafetera realmente ya esta llena de cafe");
        } else {
            this.cafe = true;
            console.log("La cafetera ya tiene cafe");
        }
    }

    hacerCafe(){
        if(this.prendida == false){
            console.log("La cafetera esta apagada");
        }
        else if(this.agua == true && this.cafe == true){
            console.log("Tu cafe se esta haciendo, espera 10s");
            setTimeout( () => {
                console.log("Tu cafe esta listo, disfruta!");
            }, 10000);
        } else if(this.agua == false || this.cafe == false){
            console.log("Hace falta agua o cafe en la cafetera");
        }
    }
}

const Modelk1 = new Cafetera("Model k1");
Modelk1.hacerCafe();
Modelk1.depositarCafe();
Modelk1.depositarAgua();
Modelk1.hacerCafe();
Modelk1.encender();
Modelk1.hacerCafe();


//Ejemplo 7 
//Aqui se necesita hacer una hamburguesa en la que se impriman sus elementos.

class Cocinero{
    constructor(nombre){
        this.nombre = nombre;
    }

    hacerHamburguesa(){
        console.log("La hamburguesa estara lista en media hora");
    }

    hacerPizza(){
        console.log("La pizza estara lista en 1 hora");
    }

    hacerPapitasFritas(){
        console.log("Las papitas estaran listas en media hora");
    }
}

const Julian = new Cocinero("Julian");
Julian.hacerHamburguesa();
Julian.hacerPizza();
Julian.hacerPapitasFritas();


//Ejemplo 8 
/*
class Mesero{
    constuctor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    darLaBienvenida(){

    }

    servirMesa(){

    }
    limpiarMesa(){

    }
    hacerPedido(){

    }
    traerComida(){

    }
}

const Jose = new Mesero("Jose", 22);


//Ejemplo 9

class Alexa{
    constructor(modelo, color){
        this.modelo = modelo;
        this.color = color;
        this.fecha = new Date();
        this.hora = fecha.getHours();
        this.conectadoBluetooh = false;
    }

    encender(){
        if(this.hora >= 6 && this.hora < 12){
            console.log("Hola adam, buenos dias")
        } else if(this.hora >= 12 && this.hora < 18){
            console.log("Hola adam, buenas tardes");
        } else if(this.hora >= 18 && this.hora < 24 ){
            console.log("Hola adam, buenas noches");
        }
    }

    apagar(){
        console.log("Alexa apagada");
    }

    reproducirMusica(generoMusical){
        console.log(`Reproduciendo ${generoMusical}`)
    }

    conectarCelular(){
        console.log("Conectando celular");
        setTimeout( () => {
            this.conectadoBluetooh = true;
            console.log("El celular esta conectado");
        }, 3000);
    }

    desconectarCelular(){
        this.conectadoBluetooh = false;
        console.log("Desconectado");
        setTimeout( () => {
            console.log("El celular esta desconectado");
        }, 3000);
    }
}


let fecha = new Date();

let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

console.log(horas);
console.log(minutos);
console.log(segundos);

console.log(`La hora actual es ${horas}:${minutos}:${segundos}`);

const Alexa_num1 = new Alexa();
Alexa_num1.encender();
Alexa_num1.reproducirMusica("Rock");
Alexa_num1.conectarCelular();
Alexa_num1.desconectarCelular();
Alexa_num1.encender();


//Ejemplo 10

class Kindle {
    constructor(modelo, año, color){
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.libros = {
            1: "El laberinto",
            2: "El queso",
            3: "El gallo",
            4: "El vaso con agua"
        }
        this.nextID = 5;
    }

    comprarLibro(libro){
        const libroExistente = Object.values(this.libros).includes(libro);
        if(libroExistente){
            console.log(`El libro ${libro} ya esta en la coleccion`);
        } else {
            this.libros[this.nextID] = libro;
            console.log(`El libro ${libro} ha sido comprado y agregado`);
            this.nextID++;
        }
    }

    leerLibro(libro){
        const libroExistente = Object.values(this.libros).includes(libro);
        if(libroExistente){
            console.log(`Leyendo el libro: ${libro}`);
        } else {
            console.log(`El libro ${libro} no existe en la coleccion`);
        }
    }

    cerrarLibro(){
        console.log("El libro ah sido cerrado");
    }
}

const kindleDeAdam = new Kindle("paperWhite", 2002, "Azul");
kindleDeAdam.comprarLibro("la rama");
*/


