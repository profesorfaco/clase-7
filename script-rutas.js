$(document).ready(function(){
	$.getJSON('https://raw.githubusercontent.com/profesorfaco/clase-7/gh-pages/datos-rutas.json', function (data) {
		console.log("¡Ya tenemos los datos del JSON!");
		// la estructura en partes para simplificar el append dentro del ciclo for
		var primera = "<div class=\"timeline-image\"><img class=\"rounded-circle img-fluid\" src=\"";
		var segunda = "\"></div><div class=\"timeline-panel\"><div class=\"timeline-heading\"><h6>";
		var tercera = "</h6><h4>";
		var cuarta = "</h4></div><div class=\"timeline-body\"><p class=\"text-muted\">";
		var quinta = " (<a data-toggle=\"modal\" href=\"#portfolioModal";
		var sexta = "\">ver más</a>).</p></div></div></li><div class=\"portfolio-modal modal fade\" id=\"portfolioModal";
		var septima = "\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"close-modal\" data-dismiss=\"modal\"><div class=\"lr\"><div class=\"rl\"></div></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-lg-10 col-xl-8 mx-auto\"><div class=\"modal-body py-5\"><h3 class=\"pt-5\">";
		var octava = "</h3><p class=\"lead\">";
		var novena = "</p><img class=\"img-fluid d-block mx-auto mb-3\" src=\"";
		var decima = "\">";
		var onceava = "</div></div></div></div></div></div></div>";
		var lado;
		// ahora el ciclo for
		for (var a = 0; a < data.length; a++){
			//antes defino el contenido de lado según sea par o impar
			if (a & 1){ lado = "<li>" } else { lado = "<li class=\"timeline-inverted\">" }
			// ahora si, a construir cada ruta, incluyendo modal
			$( "ul#rutas" ).append(
				lado +
				primera + 
				data[a]["foto"] + 
				segunda + 
				data[a]["fecha"] +
				tercera + 
				data[a]["nombre"] + 
				cuarta + 
				data[a]["lead"] + 
				quinta + 
				a + 
				sexta + 
				a + 
				septima + 
				data[a]["nombre"] + 
				octava + 
				data[a]["lead"] +
				novena + 
				data[a]["foto"] + 
				decima + 
				data[a]["texto"] + 
				onceava
				);			
		}
		$( "ul#rutas" ).append("<li class=\"timeline-inverted\"><div class=\"timeline-image\"><h4>Until<br>the<br>pico</h4></div></li>");
	});
});
