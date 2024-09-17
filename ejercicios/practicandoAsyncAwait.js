//Ejemplos
/*
async function greet(){
    return "Hello World!";
}

greet().then(console.log);
*/
//Asyn siempre va al inicio de la funcion
/*
function delay(ms){
    return  new Promise(resolve => setTimeout(resolve, ms));
}

async function demo(){
    console.log("Starting....");
    await delay(2000);
    console.log("2 seconds later....");
}

demo();
*/
/*
async function fetchData(){
    try {
        let response = await fetch("asjdhkasnd");
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
*/

