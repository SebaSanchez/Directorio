// JavaScript Document
//Detectar el evento "mouseenter" sobre el id "capa".
$("#capa1").on("mouseenter",function(){
	$("#mensaje1").css("display","block");	
});
//Detectar el evento "mouseleave" sobre el id "capa".
$("#capa1").on("mouseleave",function(){
	$("#mensaje1").css("display","none");	
});

$("#capa2").on("mouseenter",function(){
	$("#mensaje2").css("display","block");	
});
//Detectar el evento "mouseleave" sobre el id "capa".
$("#capa2").on("mouseleave",function(){
	$("#mensaje2").css("display","none");	
});

$("#capa3").on("mouseenter",function(){
	$("#mensaje3").css("display","block");	
});
//Detectar el evento "mouseleave" sobre el id "capa".
$("#capa3").on("mouseleave",function(){
	$("#mensaje3").css("display","none");	
});
//Mover 
$("#draggable").draggable();

//Aplicar y quitar efectos sobre el div "efectos".
$("#aplicarEfecto").on("click", function(){
	$("#aseguramos").fadeOut(2000);
});
$("#quitarEfecto").on("click", function(){
	$("#aseguramos").fadeIn(2000);		
});