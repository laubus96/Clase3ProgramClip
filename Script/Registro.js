function Registrar() {

    function TomarDatos(nombre, apellido, usuario, email, password) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.usuario = usuario,
            this.email = email,
            this.password = password
    };

    var NombreRegistro = document.getElementById("InputNombre").value;
    var ApellidoRegistro = document.getElementById("InputApellido").value;
    var UsuarioRegistro = document.getElementById("InputUsuario").value;
    var EmailRegistro = document.getElementById("InputEmail1").value;
    var PasswordRegistro = document.getElementById("InputPassword").value;

    NuevosUsuarios = new TomarDatos(NombreRegistro, ApellidoRegistro, UsuarioRegistro, EmailRegistro, PasswordRegistro);
    Agregar();
}

var listaUsuarios = [];

function Agregar() {
    listaUsuarios.push(NuevosUsuarios);
    alert("Te has registrado!!")
}