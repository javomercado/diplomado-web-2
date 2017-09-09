/*
    1. Clic sobre imagen thumbnail.
    2. Tomar el valor del atributo "href" de la etiqueta "anchor".
    3. Guardar dicho valor en una variable con nombre "imagenOriginal".
    4. Cambiar el valor del atributo "src"de la imagen principal por el valor del atributo "href" que tenemos guardada en la variable.
*/

/*
    El método "ready" de jQuery asegura que el código JS se ejecutará cuando el arbol "DOM" del HTML esté renderizado.

    La sintaxis de la función anonima de JS es: 
            function() {}

    La sintais del metodo "ready"de jQ 
            $( "función anónima" )     
            es decir:
            $( function() {} )
        El código escrito adentro de las llaves, es el código que se va a ejecutar cuando el "DOM" del HTML esté renderizado.
            $( function () {
                //code here...
            } );
    Metodo on de jQuery sirve para escuchar eventos ej. "click, doubleclick, scroll"
    entre otros. la sintaxis es:
            elemento.on( evento a escuchar, código a ejecutar);
            
            por lo tanto:
            
            elemento.on(evento, función anónima);

            la sintaxis queda de la siguiente manera:
            elemento.on("click", function() {});
    
    El método "preventDefault()" del evento (event) bloquea el comportamiento 
    por defecto que tenga el elemento que desencadena el evento "click".
        
    El método "attr()" de jQerry funciona para dos cosas:
            1.  Para devolvernos el valor del atributo especificado, es decir
                recibre un párametro, el cual es el nombre del atributo del que queremos
                obtener su valor:

                elemento.attr("href");
            
            2. Para cambiar el valor del atributo especificado, es decir
            recibe dos parámetros:
            -Nombre del atributo que queremos modiicar.
            -El nuevo valor para éste atributo

            elemento.attr ("href",)"images/img-2.jpg);"

    */

$(function () {
    var imgMini = $(" .img-mini");
    var imgPrincipal = $("#imgPrincipal");
    //console.log( imgPrincipal );

    imgMini.on("click", function (event) {
        event.preventDefault();
        var imagenOriginal = $(this).attr("href");
        imgPrincipal.attr("src", imagenOriginal);
    });
});