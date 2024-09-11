//Ejemplo 1 
/*
const promesaSimple = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("Promesa resuelta exitosamente");
    }, 1000);
});

promesaSimple.then(result => {
    console.log(result);
})
*/
//En JavaScript, resolve y reject son funciones que se utilizan 
//dentro de las promesas para manejar el resultado de una operación asincrónica.
/*
resolve(value): Se llama cuando la promesa se completa con éxito. 
Pasa el resultado (valor) a la función then() que maneja el valor resuelto.

reject(error): Se llama cuando la promesa falla o hay un error. 
Pasa la razón del fallo (error) a la función catch() que maneja la promesa rechazada.
*/

//Ejemplo 2
/*
const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promesa rechazada"); 
    }, 1000);
});

rejectedPromise
    .then(result => {
        console.log(result)
    })
    .cath(error => {
        console.log(error);
});
*/

//Ejemplo 3
/*
const fetchData = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if(success){
            resolve({data: "Datos obtenidos correctamente"});
        } else {
            reject("Error al obtener los datos");
        }
    }, 2000);
});

fetchData
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
});
*/
//Ejemplo 4
/*
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Primera promesa resuelta");
    }, 5000)
});

firstPromise
    .then(result => {
        console.log(result);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Segunda promesa resuelta");
            }, 2000);
        });
    })
    .then(result => {
         console.log(result);
});
*/
/*
const promise1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1 resuelta"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Promesa 1 resuelta"), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3 resuelta"), 3000));

Promise.all([promise1, promise2, promise3]).then(results => {
    console.log(results);
});
*/

