//Practicare Metodos para agregar y Eliminar Objetos.  //60 EJEMPLOS

//Push Agrega elemento a final del array

/*
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

array_n1.unshift(obj_n1);
console.log(array_n1);
array_n1.unshift(2);
array_n1.pop();
array_n1.pop();
console.log(array_n1);

//Shift elimina el primer elemento de un array a diferencia de pop() que elimina el ultimo
console.log(array_n1.lenght);
array_n1.shift();
array_n1.shift();
array_n1.shift();
console.log(array_n1.length);
array_n1.unshift(obj_n1);
console.log(array_n1.length);
console.log(array_n1);
array_n1.unshift(array_n2);
console.log(array_n1.length);
array_n1.shift();
array_n1.shift();
array_n1.shift();
array_n1.shift();
console.log(array_n1.length);
array_n1.shift();
array_n1.shift();
array_n1.shift();
console.log(array_n1.length);
console.log(array_n1);

/*

//Splice (Inicio, cantidad, item1, item2)
// array.splice(start,deleteCount, item1, item2);
/*
start: Índice en el que comienza la modificación del arreglo. Es obligatorio.
deleteCount: Número de elementos a eliminar desde el índice start. Si es 0, no se elimina ningún elemento. Este parámetro es opcional.
item1, item2, ..., itemN: Elementos que se agregan en el lugar especificado. Este parámetro es opcional.
*/

//Splice pide primero un indice, luego numero de elementos a eliminar, luego elementos que quieres agregar

/*

const array_n3 = [1,2,3,4,5,"Hola","Perro","Gato","Cuervo"];

//Eliminar elementos
array_n3.splice(2,1);
console.log(array_n3);

//Agregar elementos
array_n3.splice(2, 0, "A", "B", "C");
console.log(array_n3);

array_n3.splice(11, 0, "Rana");
console.log(array_n3);

//Remplazar elementos
array_n3.splice(11, 1, "Vaca");
console.log(array_n3);

array_n3.splice(0, 2, 1240, 1300);
console.log(array_n3);

array_n3.splice(0,1,true);
array_n3.splice(1,1,false);

let array_n4 = [183746587345];
array_n3.unshift(array_n4);
console.log(array_n3);
let array_n5 = [582645837456];
array_n3.splice(0,1, array_n5);
console.log(array_n3);

//Slice te retorna una pieza de un array de inicio a fin sin modificar el array original
const primerPieza = array_n3.slice(3,6);
console.log(primerPieza);
const segundaPieza = array_n3.slice(8,13);
console.log(segundaPieza);
const terceraPieza = array_n3.slice(1,3);
console.log(terceraPieza);
const cuartaPieza = array_n3.slice(6, 8);
console.log(cuartaPieza);
const quintaPieza = array_n3.slice(10, 12);
console.log(quintaPieza);
const sextaPieza = array_n3.slice(0,9);
console.log(sextaPieza);
const septimaPieza = array_n3.slice(0,2);
console.log(septimaPieza);
const octavaPieza = array_n3.slice(11, 14);
console.log(octavaPieza);
const novenaPieza = array_n3.slice(3, 5);
console.log(novenaPieza);
const decimaPieza = array_n3.slice(8, 10);
console.log(decimaPieza);
*/

//Practicando Metodos para busqueda y filtrado 80 EJEMPLOS
let array_n5 = [true,false,"abcdefghi",5,6,5,10, "ABC"];



