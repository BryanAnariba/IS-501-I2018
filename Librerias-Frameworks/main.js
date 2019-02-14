$(document).ready(function(){
	console.log("programar");

});
$('header .wrap #btn-menu').click(function(){
	if($(".btn-menu span").attr("class")!= "fa fa-bars" ){
		console.log("Si entro aqui");
		$(".full-menu").css({"right":"0"});

	}
});
$('header .wrap #btn-menu2').click(function(){
	if($(".btn-menu2 span").attr("class")!="fas fa-times"){
		console.log("Entro aqui");
		$(".full-menu").css({"right":"-100%"});
	}
});