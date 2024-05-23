const formregister = document.getElementById("formulario");
const inputemail = document.getElementById("Email");
const inputnombre = document.getElementById("nombre");
const inputTelefono = document.getElementById("Telefono");
const inputPlanes = document.getElementById("Planes");
const inputwarning = document.getElementById("error");

formregister.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings="";
    let valor=false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexSoloLetras = /^[a-zA-Z]+$/;
    let valornumerico = /^[0-9]+$/;
    inputwarning.innerHTML="";

    if(inputnombre.value.length<3){
        warnings+=`El Nombre es Corto<br>`;
        valor=true;
    }

    if(inputnombre.value.length>30){
        warnings+=`El Nombre es Demasiado Largo <br>`;
        valor=true;
    }

    if(!regexEmail.test(inputemail.value)){
        warnings+=`El email no es valido <br>`;
        valor=true;
    }

    if(inputPlanes.value==="default"){
        warnings+=`Seleccione una opción <br>`;
        valor=true;
    }

    if(!inputTelefono.value.match(valornumerico)){
        warnings+=`Ingrese solamente números en Telefono <br>`;
        valor=true;
    }

    if(!regexSoloLetras.test(inputnombre.value)){
        warnings+=`Ingrese solamente letras en Nombre <br>`;
        valor=true;
    }

    if(valor){
        inputwarning.innerHTML=warnings;
    }
    else{
        inputwarning.innerHTML="Enviado ;)";
    }
});