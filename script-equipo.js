$(document).ready(function(){
	$.getJSON('https://raw.githubusercontent.com/profesorfaco/clase-7/gh-pages/datos-equipo.json', function (data) {
		console.log("¡Ya tenemos los datos del JSON!");
		// la estructura en partes para simplificar el append dentro del ciclo for
		var primera = "<div class=\"col-md-4\"><div class=\"team-member\"><img class=\"mx-auto rounded-circle\" src=\"";
		var segunda = "\"><h4>";
		var tercera = "</h4><p class=\"text-muted\">";
		var cuarta = "</p><ul class=\"list-inline social-buttons\"><li class=\"list-inline-item\"><a href=\"";
		var quinta = "\"><i class=\"fab fa-twitter\"></i></a></li><li class=\"list-inline-item\"><a href=\"";
		var sexta = "\"><i class=\"fas fa-envelope\"></i></a></li><li class=\"list-inline-item\"><a href=\"";
		var septima = "\"><i class=\"fab fa-instagram\"></i></a></li></ul></div></div>";
		// ahora el ciclo for
		for (var a = 0; a < data.length; a++){
			$( "div#equipo" ).append(primera + data[a]["foto"] + segunda + data[a]["nombre"] + tercera + data[a]["cargo"] + cuarta + data[a]["twitter"] + quinta + data[a]["mail"] +sexta + data[a]["instagram"] + septima);
		}
	});
});