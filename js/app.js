//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

//Listeners
eventListeners();

function eventListeners() {
    //Inicio de la aplicación y deshabilitar 'submit'
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
}

//Funciones
function inicioApp() {
    //deshabilitar el envío
    btnEnviar.disabled = true;
}

//valida que el campo tenga algo escrito
function validarCampo() {
    //console.log('dentro del input')

    // Se valida la lomgitud del campo y que no esté vacío
    validarLongitud(this);

    //Validar unicamente el email
    if(this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        }     
    }
}

function validarLongitud(campo) {
    //console.log(campo.value.length);
    
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1) { // En caso de que encuentre un @ en el string
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}