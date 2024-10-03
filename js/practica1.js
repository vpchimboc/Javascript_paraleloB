console.log("Hola mundo javascrit 2");
//Variables
var nombre = "Verónica";
let edad = 33;
const nacionalidad = "Ecuatoriana";

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Nacionalidad:", nacionalidad);

//Operadores
var num1 = 3;
var num2 = 5;
var operacion = num1 - num2;
console.log("Suma", num1 + num2);
console.log("Resta", operacion);
console.log("Multiplicación", num1 * num2);
console.log("División", num1 / num2);
console.log("Exponente", num1 ** num2);

//Sentencias de control
if (num1 == num2) {
    console.log("Son iguales");
} else {
    console.log("Son diferentes");
}
var nota = 85;
if (nota < 70) {
    console.log("Estudiante Regular");
} else if (nota >= 70 && nota <= 80) {
    console.log("Estudiante Bueno");
} else if (nota > 80 && nota <= 90) {
    console.log("Estudiante Muy bueno");
} else if (nota > 90 && nota <= 100) {
    console.log("Estudiante Excelente");
}

var dia = 8;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    default:
        console.log("No es un dia de la semana");
}

//Bucles o sentencias repetitivas
//for
for(var i=0;i<=10;i++){
    console.log(i,"*",1,"=",i*1);
}
//While
console.log("While");
var contador=0;
while(contador<=10){
    console.log(contador,"*",1,"=",contador*1);
    contador++;
}
//do while
var numero=0;
do{
 console.log(numero);
 numero++;
}while(numero<=10);

function suma(){
    var a = 5;
    var b = 10;
    return a+b;
}

function suma2(a,b){
   return a+b;
}
console.log("La suma es ",suma());
console.log("La suma2 es ",suma2(5,10));
document.addEventListener('DOMContentLoaded', function () {
//Manipulación de elementos HTML
const elemento = document.getElementById("titulo");
elemento.innerHTML="Manipulación e elementos de HTML";
elemento.style.color="Red";

var boton=document.getElementById("btnEnviar");
boton.addEventListener('click', function(event) {
    // Prevenir que el formulario se envíe y la página se recargue
    event.preventDefault();
    console.log("Has pulsado el botón");
    var nombre=document.getElementById("nombre");
    console.log(nombre.value);
    var edad=document.getElementById("edad");
    console.log(edad.value);
    elemento.innerHTML=nombre.value;

 });
});