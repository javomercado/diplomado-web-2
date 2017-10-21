// READY FUNCTION
$(function() {
	var tableProms = $(".table-prom");
	var prom = $("#prom");
	var numberTableProms = tableProms.length;
	var sumProms = 0;
	
	
	for( var i = 0; i < numberTableProms; i++) {
		var valorProm = $(tableProms[i]).text();
		var valorProNumber = parseInt(valorProm, 10);
		
		sumProms += valorProNumber;
	}
	
		var promedio = sumProms / numberTableProms;
		prom.text(promedio);
	
});