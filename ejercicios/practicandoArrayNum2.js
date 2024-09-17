//Metodos de transformacion 100.
/*
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares);
*/
/*
const words = ["apple", "banana", "cherry"];
const upperCaseWords = words.map(word => word.toUpperCase());
console.log(upperCaseWords);
*/

//Ejemplo del ejercicio anterior.
/*
const words_num2 = ["apple", "banana", 123, "cherry"];
const upperCaseWords_num2 = words_num2
.filter(word => typeof word === "string")
.map(word => word.toUpperCase());

console.log(upperCaseWords_num2);
*/
/*
const users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 25}
];

const names = users.map(user => user.name);
console.log(names);
const upper = names.map(word => word.toUpperCase());
console.log(upper);
*/

//Reduce
/*
const numbers = [10, 20, 30, 40, 60];

const totalSum = numbers.reduce((accumulador, currentValue) => {
    return accumulador + currentValue;
}, 0);

console.log(totalSum);

const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Jack"}
];

const usersObject = users.reduce((acu, curr) => {
    acu[curr.id] = curr.name;
    return acu;
}, {});

console.log(usersObject);

const pets = [
    {type: "dog", name: "Max"},
    {type: "cat", name: "Mittens"},
    {type: "dog", name: "Buddy"},
    {type: "cat",name: "Fluffy"}
];

const groupedPets = pets.reduce((accumulator, currentValue) => {
    if(!accumulator[currentValue.type]){
        accumulator[currentValue.type] = [];
    }
    accumulator[currentValue.type].push(currentValue.name);
    return accumulator;
}, { });

console.log(groupedPets);
*/

// Reverse
/*
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers);

const str = "Hola criaturitas del cielo! La tierra les dice Hoooolaaa";
const reversedStr = str.split("").reverse().join("");
console.log(reversedStr);

const items = [
    {id: 1, name: "A"},
    {id: 2, name: "B"},
    {id: 3, name: "C"},
];

const reverseItems = items.reverse();
console.log(reverseItems);

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const reversedMatrix = matrix.reverse();
console.log(reversedMatrix);

const words = ["apple", "banana", "cherry"];
const reversedWords = words.reverse().join("");
console.log(reversedWords);
*/
//Sort
//Ordena los elementos en orden alfabetico y numerico
/*
let numbers = [3, 1, 4, 1, 5, 9];
let frutas = ["banana", "apple", "cherry"];
let people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 20},
];


numbers.sort();
console.log(numbers);

numbers.sort((a, b) => b - a)
console.log(numbers);

let nose = frutas.sort().reverse();
console.log(nose);

let edad = people.sort((a, b) => b.age - a.age);
console.log(edad);

let length = frutas.sort((a, b) => a.length - b.length);
console.log(length);

let minimLength = frutas.sort((a, b) => b.length - a.length);
console.log(minimLength);
*/

//Concat()

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let result = array1.concat(array2);
console.log(result);


/*
map(): Crea un nuevo array y le otorga una funcion a cada elemento
sort(): Ordena los elementos alfabeticamente o numeral
reverse(): Revierte los valores en un array
reduce(): Reduce los elementos de un array
conact(); Añado o une un array a otro
*/


