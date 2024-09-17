//Un cambio de color
const buttonColor = document.getElementById("simple__Boton__id");
const primerCuadrado = document.getElementById("cubo__id");

buttonColor.addEventListener("click", function(){

    primerCuadrado.style.backgroundColor = "black";

});

//Un toggle
const buttonColor__num2 = document.getElementById("simple__Boton__id__num2");
const segundoCuadrado = document.getElementById("cubo__id__num2");

buttonColor__num2.addEventListener("click", function(){

    segundoCuadrado.classList.toggle("cubo__num2__negro");

});

//Diferentes colores
function obtenerColorAleatorio(){

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;

}

const buttonColor__num3 = document.getElementById("simple__Boton__id__num3");
const tercerCuadrado = document.getElementById("cubo__id__num3");

buttonColor__num3.addEventListener("click", function(){
    
    tercerCuadrado.style.backgroundColor = obtenerColorAleatorio();

});