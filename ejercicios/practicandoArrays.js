//Practicare Metodos para agregar y Eliminar Objetos.  //60 EJEMPLOS

//Push Agrega elemento a final del array
let array_n1 = [1,2,3,4,5,6,7,8,9,10];

console.log(array_n1);
array_n1.push(1);
array_n1.push(2);
array_n1.push(3);
console.log(array_n1.length);
array_n1.push(4);
array_n1.push("Soy el primer texto");
array_n1.push(true);
console.log(array_n1.length);
array_n1.push(null);
array_n1.push("Jugando con el metodo push");
array_n1.push(5);
array_n1.push(6);
array_n1.push(6);
array_n1.push(7);
array_n1.push(false);
array_n1.push("Ultimo push de este array");
console.log(array_n1.length);

//Pop elimina el ultimo elemento de un array y lo devuelve
const ultimo = array_n1.pop();
console.log(ultimo);
array_n1.pop();
array_n1.pop()
console.log(array_n1.length);

const array_n2 = [2,2,4,5,8,9,"Hola mundo","Adios mundo","Jugando con pop", false, true, "practicando ando", 8, 8];

array_n2.pop();
const ultimoDeNuevo = array_n2.pop();
console.log(ultimoDeNuevo);
array_n2.pop();
array_n2.pop();
array_n2.pop();
console.log(array_n2);
array_n2.pop();

//Unshift agrega elementos al principio del array a diferencia de Push()
console.log(array_n1.length);
array_n1.unshift(1526);
console.log(array_n1);
array_n1.unshift(2);
console.log(array_n1);
array_n1.unshift(array_n2);
array_n2.pop();
console.log(array_n2.length);
array_n2.pop();
array_n2.pop();
console.log(array_n2.length);
console.log(array_n1);

const obj_n1 = {
    a: "A",
    b: "B",
    c: "C"
};

array_n2