//Practicando ando

let edad = 18;
let  mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

let input ="Hola";
let mensaje_n2 = input.length > 0 ? "Entrada valida" : "Entrada vacia";
console.log(mensaje_n2);

let a = 10, b = 20;
let max = (a > b) ? a : b;
console.log(max);

let nota = 59;
let resultado = (nota >= 90) ? "A":
                        (nota >= 80) ? "B":
                        (nota >= 70) ? "C":
                        (nota >= 60) ? "D": "F";
console.log(resultado);

let numero_n3 = 6;
let paridad = (numero_n3 % 2 === 0) ? "Es par" : "Es impar";
console.log(paridad);

let temperatura = 30;
let clima = (temperatura > 25) ? function() {return "Caliente";} : function(){return "Frio";}
console.log(clima());

//Esta tuvo un resultado diferente 
let fecha1 = new Date('2024-01-01');
let fecha2 = new Date('2023-01-01');
let masReciente = (fecha1 > fecha2) ? fecha1 : fecha2;
console.log(masReciente);

let valor = 123;
let tipo = (typeof valor === "string") ? "Es string" : "No es string";
console.log(tipo);

let arr = [1,2,3,4];
let primerElemento = (arr.length > 0) ? arr[0] : "Array vacio";
console.log(primerElemento);

let esAdmin = true;
let acceso = esAdmin ? "Acceso concedido" : "Acceso denegado";
console.log(acceso);

let usuario = {nombre: "Adam", edad: 22};
let estado = (usuario.edad) ? "Usuario mayor de edad": "Usuario menor";
console.log(estado);
