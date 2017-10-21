// Ready function
$ (function() {
	var tableProm = $(".table-prom");
	
	//console.log (tableProm.length);
	
	/*
		Tipos de valores:
			-Valores de cadena de texto   -> STRING
			-Valor numérico               -> NUMBER
			-Valor de tipo arreglo        -> ARRAY
			-Valor boleano                -> BOLEANO
	*/

var verdaderi = true;
var falso = false;

	
var texto1 = "hola mundo";
var texto2 = "2017"	

var numero1 = 10;
var numero2	= 20;

var resultado = numero1 + numero2;

//ARRAY === Arreglo, Vector o Matriz
var diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
	
/*	
	Menor que devuelve un BOLEAN -> 5 < 10 === TRUE
	"++" Incremento. p.ej: 10++  === 11
	"--" Decremento  p.ej: 10--  === 9

	
    resultado++;
	resultado++;
	resultado++;
	resultado++;
	console.log(resultado);
*/
	
	//iterador "for"
	var numeroDiasSemana = diaSemana.length;
	for( var i = 0; i < numeroDiasSemana; i++){
		console.log(diaSemana[i]);
	}

});