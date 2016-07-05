// JavaScript Document

//Aplicar y quitar efectos sobre el div "efectos".
$("#aplicarEfecto").on("click", function(){
	$("#formulario").fadeOut(2000);
});
$("#quitarEfecto").on("click", function(){
	$("#formulario").fadeIn(2000);		
});

$('#rut_demo_1').Rut();

$("#acordion").accordion();