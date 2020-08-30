var respuestaCorrecta = "Libro";
var contador = 0;
document.getElementById("Boton").disabled = true;
document.getElementById("Respuesta").disabled = true;

function Empezar() {
    if (document.getElementById("Boton").disabled == true && document.getElementById("Respuesta").disabled == true) {
        document.getElementById("Boton").disabled = false;
        document.getElementById("Respuesta").disabled = false;
    }


}

function Terminar() {
    document.getElementById("Respuestas").innerHTML += "";
    document.getElementById("Boton").disabled = true
    document.getElementById("Respuesta").disabled = true;
}



function Adivinar() {


    if (contador == 0) {
        var respuestaIngresada = document.getElementById("Respuesta").value;
        if (respuestaIngresada == respuestaCorrecta) {
            document.getElementById("Respuestas").innerHTML += "<br>  -Respuesta correcta";
            document.getElementById("Respuesta").value = "";
            Terminar();



        } else {

            document.getElementById("Respuestas").innerHTML += "<br>  -Respuesta incorrecta te quedan 3 intentos";
            document.getElementById("Respuesta").focus();
            document.getElementById("Respuesta").value = "";
            contador += 1;


        }

    } else if (contador == 1) {
        var respuestaIngresada = document.getElementById("Respuesta").value;
        if (respuestaIngresada == respuestaCorrecta) {
            document.getElementById("Respuestas").innerHTML += "<br>  -Respuesta correcta";
            document.getElementById("Respuesta").value = "";
            Terminar();



        } else {

            document.getElementById("Respuestas").innerHTML += "<br>  -Respuesta incorrecta te quedan 2 intentos";
            document.getElementById("Respuestas").innerHTML += "<br> - Pista.... tiene dos tapas";
            document.getElementById("Respuesta").focus();
            document.getElementById("Respuesta").value = "";
            contador += 1;


        }
    } else if (contador == 2) {
        var respuestaIngresada = document.getElementById("Respuesta").value;
        if (respuestaIngresada == respuestaCorrecta) {
            document.getElementById("Respuestas").innerHTML += "<br>  -Respuesta correcta";
            document.getElementById("Respuesta").value = "";
            Terminar();



        } else {

            document.getElementById("Respuestas").innerHTML += "<br>  -Respuesta incorrecta te queda 1 intento";
            document.getElementById("Respuestas").innerHTML += "<br> - Pista.... lo usas para leer";
            document.getElementById("Respuesta").focus();
            document.getElementById("Respuesta").value = "";
            contador += 1;

        }
    } else if (contador == 3) {
        var respuestaIngresada = document.getElementById("Respuesta").value;
        if (respuestaIngresada == respuestaCorrecta) {
            document.getElementById("Respuestas").innerHTML += "<br>  -Respuesta correcta";
            document.getElementById("Respuesta").value = "";
            Terminar();



        } else {

            document.getElementById("Respuestas").innerHTML += "<br>  -Respuesta incorrecta";
            document.getElementById("Respuestas").innerHTML += "<br>  -Perdio todos los intentos, lo siento";
            document.getElementById("Respuesta").value = "";
            Terminar();

        }



    }
}