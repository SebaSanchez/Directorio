// JavaScript Document
// JavaScript Document
function muestra() {
//Detectar el elemento "span" cuyo es "adicional".
var adicional = document.getElementById("adicional");

//Modificar el valor del atributo "className" por "visible".
adicional.className = "visible";
//Ocultar el link "seguir leyendo"
document.getElementById("enlace").className = "oculto";
}

//Manulapular el evento "click" y "dblclick" para 
//modificar los atributos del objeto.
var imagen = $("#imgYES");
imagen.on("click", function(){imagen.attr("src", "img/Boton_Me_gusta.jpg")});
	imagen.on("dblclick", function(){imagen.attr("src", "img/no-me-gusta.jpg")});
	
$("#abrirDialogo").on("click",function(){
	$("#dialogo").dialog();
});

//Detectar el evento "mouseenter" sobre el id "capa".
$("#capa").on("mouseenter",function(){
	$("#mensaje").css("display","block");	
});
//Detectar el evento "mouseleave" sobre el id "capa".
$("#capa").on("mouseleave",function(){
	$("#mensaje").css("display","none");	
});

//Aplicar y quitar efectos sobre el div "efectos".
$("#aplicarEfecto").on("click", function(){
	$("#tablaPrincipal").fadeOut(2000);
});
$("#quitarEfecto").on("click", function(){
	$("#tablaPrincipal").fadeIn(2000);		
});