//JavaScript
function EnviarPHP(reg){

	datos = "NombreAmigo="+reg;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.30/practica12/buscaramigo.php",
		data: datos
	}).done(function(msg) {

//var n=msg.lastIndexOf("}")+1;
//msg = msg.slice(0,n);
alert (msg);

var DatosJSON = JSON.parse(msg);

//$.parseJSON(msg);
alert(DatosJSON.datos);
alert (DatosJSON.amigos.length);
if (DatosJSON.datos == 1)
 {
$('#resultados').empty();	 
$('#ocultar').show();	 
	for (var i = 0; i <DatosJSON.amigos.length  ; i++) {


$('#resultados').append('<div style="width:100%; font-size:1em; font-weight:bold;" class="foto"><img src="http://192.168.1.30/practica12/'+DatosJSON.amigos[i].IdAmigo+'.jpg" class="famigo" id="'+DatosJSON.amigos[i].IdAmigo+'" style="vertical-align:middle;"><a href="#" class="detalle">'+DatosJSON.amigos[i].Nombre + ' '+ DatosJSON.amigos[i].ApPaterno + ' ' + DatosJSON.amigos[i].ApMaterno +'</a><hr></div>');

}

$('.detalle').attr("data-role", "button");
$('.famigo').width($('.foto').width()/5);
$('#Buscar').trigger('pagecreate');




//alert("jsonobj.ValueRsp[0].Customer_Id: " + jsonobj.ValueRsp[0].Customer_Id);
//$('#cheta').width($('.foto').width()/5);
//<div style='width:80%; font-size:1.5em; font-weight:bold;' class='foto'><a href='#' class='detalle'><img src='imagenes/{id}.jpg' id='{id}' style='vertical-align:middle;'></a> {nombre}<hr></div> 
	 
 }
if (DatosJSON.datos == 0)
 {
	alert ("no hay amigos"); 
 }


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
//$('#ocultar').hide();

//$('#cheta').width($('.foto').width()/5);

//$('#cheta').css('vertical-align', 'middle');

/*alert ($('.foto').height());
$('.nombre').height($('#cheta').height());
alert($('.nombre').height());
$('.nombre').css('vertical-align','middle');*/


	document.addEventListener("deviceready",function(){

/*
$(window).on('orientationchange', function () {
$('.famigo').width($('.foto').width()/5);
});
*/
					

$('.detalle').tap(function(){
	alert ('detalle');
});
					$('.Send').tap(function(){
						
		var formulario = $(this).parents('form');

	switch(formulario.attr('name'))
	{
		
			case 'BAmigo':
alert ('dentro');
			var NombreBuscar = $('#NombreAmigo').val();
			alert (NombreBuscar);
				EnviarPHP(NombreBuscar);
				$.mobile.changePage("#datos");
				
				/*
			borrar contenido de div resultados
				for que va a reccorrer el arreglo json y agregará al div resultados
				
				<div style='width:80%; font-size:1.5em; font-weight:bold;' class='foto'><a href='#' class='detalle'><img src='imagenes/{id}.jpg' id='{id}' style='vertical-align:middle;'></a> {nombre}<hr></div> 
				 
				 N veces
				 
				
				*/
	
				break;	
				
		}
	});

    
	},false); //deviceready
});//ready