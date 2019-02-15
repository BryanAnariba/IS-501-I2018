$(document).ready(function(){
	console.log("programar");

});
//Para la Ventana oculta
$('header .wrap #btn-menu').click(function(){
	if($(".btn-menu span").attr("class")!= "fa fa-bars" ){//al dar click cambia el icono de librito a x
		console.log("Si entro aqui");
		$(".full-menu").css({"right":"0"});

	}
});
$('header .wrap #btn-menu2').click(function(){//al volver a dar click cambia el icono de x al librito
	if($(".btn-menu2 span").attr("class")!="fas fa-times"){
		console.log("Entro aqui");
		$(".full-menu").css({"right":"-100%"});
	}
});