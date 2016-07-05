// JavaScript Document
//Mover 

$("#draggable").draggable();

function muestra() {
//Detectar el elemento "span" cuyo es "adicional".
var adicional = document.getElementById("adicional");
//Modificar el valor del atributo "className" por "visible".
adicional.className = "visible";
//Ocultar el link "seguir leyendo"
document.getElementById("enlace1").className = "oculto";
}
