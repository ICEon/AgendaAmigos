//JavaScript
function EnviarPHP(reg){

	datos = "Id="+reg;
	$.ajax({
		type: "POST",
		url: "192.168.1.30/practica12/buscaramigo.php",
		data: datos
	}).done(function(msg) {

//var n=msg.lastIndexOf("}")+1;
//msg = msg.slice(0,n);
alert (msg);
/*var Datos = JSON.parse (msg);

$('#devic table td').eq(1).text(Datos['Nombre']);
$('#devic table td').eq(3).text(Datos['ApellidoP']);
$('#devic table td').eq(5).text(Datos['ApellidoM']);
$('#devic table td').eq(7).text(Datos['Secundaria']);
$('#devic table td').eq(9).text(Datos['POpcion']);
$('#devic table td').eq(11).text(Datos['SOpcion']);
$('#devic table td').eq(13).text(Datos['TOpcion']);
$('#devic table td').eq(15).text(Datos['COpcion']);
*/
	});
}	
$(document).ready(function(e){	
	document.addEventListener("deviceready",function(){
		
					$('.Send').tap(function(){
						
		var formulario = $(this).parents('form');

	switch(formulario.attr('name'))
	{
		
			case 'BAmigo':

			var IdBuscar = $('#IdAmigo').val();
				EnviarPHP(IdBuscar);
	
				break;	
				
		}
	});

    
	},false); //deviceready
});//ready