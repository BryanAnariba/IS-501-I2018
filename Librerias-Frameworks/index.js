$(document).ready(function(){
    console.log("Funcionalidad Javascript al boton");
    $('#btn-menu').click(function(){
		if( $('.btn-menu span').attr('class') == 'fa fa-bars' ){

			$('.btn-menu span').removeClass('fa fa-bars').addClass('fa fa-close').css({'color':'#fff'});
			$('.full-menu').css({'right':'0'});

		}else{
			$('.btn-menu span').removeClass('fa fa-close').addClass('fa fa-bars').css({'color':'#000'});
			$('.full-menu').css({'right':'-100%'});
		}
	});
});