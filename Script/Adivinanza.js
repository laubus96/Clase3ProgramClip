var respuestaCorrecta = "Libro";
var contador = 0;
document.getElementById("botonAdivinar").disabled = true;
document.getElementById("Respuesta").disabled = true;

/* Funcion que permite empezar  el juego habilitando y desabilitando componentes  */
function Empezar() {
    document.getElementById("Respuestas").innerHTML = "";
    if (document.getElementById("botonAdivinar").disabled == true && document.getElementById("Respuesta").disabled == true) {
        document.getElementById("botonAdivinar").disabled = false;
        document.getElementById("Respuesta").disabled = false;
        document.getElementById("botonEmpezar").disabled = true;
    }
    document.getElementById("Respuestas").innerHTML += "<br> -----------------------------------------------------------";
    document.getElementById("Respuestas").innerHTML += "<br> Comianza el juego, mucha suerte!!";
    document.getElementById("Respuestas").innerHTML += "<br>  Primer intento: ";
    document.getElementById("Respuesta").focus();


}
/* Funcion que permite terminar  el juego habilitando y desabilitando componentes  */
function Terminar() {

    document.getElementById("botonAdivinar").disabled = true
    document.getElementById("Respuesta").disabled = true;
    if (document.getElementById("botonEmpezar").disabled == true) {
        document.getElementById("botonEmpezar").disabled = false;
    }
    contador = 0;
    document.getElementById("botonEmpezar").focus();

}


/* Funcion que permite contar la cantidad de respuestas y a partir de ahi actuar a diferentes condiciones  */
function Adivinar() {


    if (contador == 0) {
        var respuestaIngresada = document.getElementById("Respuesta").value;
        if (respuestaIngresada == respuestaCorrecta) {
            document.getElementById("Respuestas").innerHTML += "<br>  ----------------------------------------------------------------------";
            document.getElementById("Respuestas").innerHTML += "<br>  -Has adivinado!!!!! Libro era la respuesta correcta!! Felicitaciones!!";
            document.getElementById("Respuestas").innerHTML += "<br>  ----------------------------------------------------------------------";
            document.getElementById("Respuesta").value = "";
            Terminar();



        } else {

            document.getElementById("Respuestas").innerHTML += "<br>  -Respuesta incorrecta";
            document.getElementById("Respuestas").innerHTML += "<br>  ------------------------";
            document.getElementById("Respuestas").innerHTML += "<br>  Segundo intento: ";
            document.getElementById("Respuesta").focus();
            document.getElementById("Respuesta").value = "";;
            contador += 1;


        }

    } else if (contador == 1) {
        var respuestaIngresada = document.getElementById("Respuesta").value;
        if (respuestaIngresada == respuestaCorrecta) {
            document.getElementById("Respuestas").innerHTML += "<br>  ----------------------------------------------------------------------";
            document.getElementById("Respuestas").innerHTML += "<br>  -Has adivinado!!!!! Libro era la respuesta correcta!! Felicitaciones!!";
            document.getElementById("Respuestas").innerHTML += "<br>  ----------------------------------------------------------------------";
            document.getElementById("Respuesta").value = "";
            Terminar();



        } else {

            document.getElementById("Respuestas").innerHTML += "<br>  -Respuesta incorrecta";
            document.getElementById("Respuestas").innerHTML += "<br> +Pista.... tiene dos tapas.... piense..";
            document.getElementById("Respuestas").innerHTML += "<br>  ------------------------";
            document.getElementById("Respuestas").innerHTML += "<br>  Tercer intento: ";
            document.getElementById("Respuesta").focus();
            document.getElementById("Respuesta").value = "";
            contador += 1;


        }
    } else if (contador == 2) {
        var respuestaIngresada = document.getElementById("Respuesta").value;
        if (respuestaIngresada == respuestaCorrecta) {
            document.getElementById("Respuestas").innerHTML += "<br>  ----------------------------------------------------------------------";
            document.getElementById("Respuestas").innerHTML += "<br>  -Has adivinado!!!!! Libro era la respuesta correcta!! Felicitaciones!!";
            document.getElementById("Respuestas").innerHTML += "<br>  ----------------------------------------------------------------------";
            document.getElementById("Respuesta").value = "";
            Terminar();



        } else {

            document.getElementById("Respuestas").innerHTML += "<br>  -Respuesta incorrecta te queda 1 intento";
            document.getElementById("Respuestas").innerHTML += "<br>  +Pista.... lo usas para leer.... tomese un momento para pensar...";
            document.getElementById("Respuestas").innerHTML += "<br>  ------------------------";
            document.getElementById("Respuestas").innerHTML += "<br>  Cuarto intento intento: ";
            document.getElementById("Respuesta").focus();
            document.getElementById("Respuesta").value = "";
            contador += 1;

        }
    } else if (contador == 3) {
        var respuestaIngresada = document.getElementById("Respuesta").value;
        if (respuestaIngresada == respuestaCorrecta) {
            document.getElementById("Respuestas").innerHTML += "<br>  ----------------------------------------------------------------------";
            document.getElementById("Respuestas").innerHTML += "<br>  -Has adivinado!!!!! Libro era la respuesta correcta!! Felicitaciones!!";
            document.getElementById("Respuestas").innerHTML += "<br>  ----------------------------------------------------------------------";
            document.getElementById("Respuesta").value = "";
            Terminar();



        } else {

            document.getElementById("Respuestas").innerHTML += "<br>  -Respuesta incorrecta";
            document.getElementById("Respuestas").innerHTML += "<br>  --------------------------------------";
            document.getElementById("Respuestas").innerHTML += "<br>  -Perdio todos los intentos, lo siento";
            document.getElementById("Respuestas").innerHTML += "<br>  --------------------------------------";
            document.getElementById("Respuesta").value = "";
            Terminar();

        }



    }
}