var UsuarioRegistrado = "Lau96";
var PasswordRegistrada = "111";

function InciarSesion() {
    var Usuario = document.getElementById("InputUsuario").value;
    var Passaword = document.getElementById("InputPassword").value;
    if (Usuario == UsuarioRegistrado && Passaword == PasswordRegistrada) {


        alert('Bienvenido ' + Usuario + '!!!!');

    } else {

        document.getElementById("InputUsuario").focus;
        alert('No se pudo ingresar, intente de vuelta o registrese');

    }

}