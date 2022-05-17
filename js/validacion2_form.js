//validacion del formulario de contacto

const formulario = document.getElementById('fvalida');
const inputs = document.querySelectorAll('#fvalida input');

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const interes = document.getElementById("interes");
const comentarios = document.getElementById("comentarios");
const form = document.getElementById("fvalida");
const parrafo = document.getElementById("warnings");

fvalida.addEventListener("submit", (e) => {

    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (nombre.value.length == 0) {
        warnings += 'Debe introducir un nombre <br>'
        entrar = true
    }

    if (comentarios.value.length == 0) {
        warnings += 'Debe introducir una consulta <br>'
        entrar = true
    }

    if (!regexEmail.test(email.value)) {
        warnings += 'El mail no es valido <br>'
        entrar = true
    }


    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
    }
});
