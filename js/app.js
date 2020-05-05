//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');


//Listeners
eventListeners();

function eventListeners() {
    //Inicio de la aplicación y deshabilitar 'submit'
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Boton enviar en el submit
   //btnEnviar.addEventListener('click',enviarEmail); 
    formularioEnviar.addEventListener('submit',enviarEmail); 

    //Boton de reset
    resetBtn.addEventListener('click',resetFormulario);
}


//Funciones
function inicioApp() {
    //deshabilitar el envío
    btnEnviar.disabled = true;
}


//Valida que el campo tenga algo escrito
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


//Resetear el formulario
function resetFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();
}


//Cuando se envía el correo
function enviarEmail(e) {
    //console.log('Email enviado')

    //Spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif que enví email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //Ocultar spinner y mostrar gif enviado
    setTimeout(() => {
        spinnerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(() => {
            enviado.remove();
            formularioEnviar.reset();
        },5000);

    },3000);

    e.preventDefault();
}


//Verifica la longitud del texto en los campos
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


// Verífica que se escriba un texto con un '@' para quesea un email
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