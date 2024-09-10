/*
function callback(){
    console.log("Soy un callback");
}

function otraFuncion(callback){
    callback()
}

otraFuncion(callback);
*/
/*
function texto(){
    console.log("Soy un callback");
}

function otraFuncion(callback){
    callback()
}

otraFuncion(texto);
*/
//Inicio, procesIntermedio, Fin
/*
function num1(){
    console.log("Intermedio")
}

function num2(callback){
    console.log("Inicio")
    num1()
    console.log("Fin")
}

num2()
*/

//Sume 2 cantidades e imprima esas dos cantidades
/*
function sumar(num1, num2, parametro1){
    let suma = num1 + num2
    parametro1(suma)
}

function retornar(suma){
    console.log(`La respuesta es ${suma}`);
}

sumar(5, 5, retornar)
*/
/*
function firstAction(callback) {
    console.log("I'm the first action")
    setTimeout(callback,5000)
}
  
function secondAction() {
    console.log("I'm the second action")
}
  
 setTimeout( () => {
    firstAction(secondAction)
 },3000)
*/

//Array de animales
let animales = ["Perro","Gato", "Cuervo"];

function firstOperation(callback) {
    setTimeout(() => {
      console.log("Primera operación completada");
      callback();
    }, 1000);
  }
  
  function secondOperation(callback) {
    setTimeout(() => {
      console.log("Segunda operación completada");
      callback();
    }, 1000);
  }
  
  function thirdOperation(callback) {
    setTimeout(() => {
      console.log("Tercera operación completada");
      callback();
    }, 1000);
  }
  
  // Uso de callbacks anidados (callback hell)
firstOperation(() => {
    secondOperation(() => {
        thirdOperation(() => {
        console.log("Todas las operaciones completadas");
      });
    });
});

//Promesa
let primeraPromesa = new Promise();

