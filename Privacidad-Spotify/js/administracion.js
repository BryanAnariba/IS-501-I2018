$("#btn-login").click(function(){
	$.ajax({
		url:"ajax/login.php",
		data:"usuario="+$("#usuario").val() + "&password="+$("#password").val(),
		dataType:"json",
		method:"POST",
		success:function(respuesta){
			console.log(respuesta);
			if(respuesta.estatus == 1){
				if(respuesta.jerarquia=="administrador");
					window.location.href = "Pag-Administracion-General.php";
			}else{
				$("#notificacion").append(`<div  style="color:red; font-weight: 600; background-color:white; border-style: red; border-style: dashed; width: 100%; height:40px; margin-top:50px;">${respuesta.mensaje}</div>`);
			}
			
		},
		error:function(error){
			console.error(error);
			$("#notificacion").append(error.responseText);
		}
	}); 
	 /*$('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');*/
});