//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
  document.getElementById("btnAnadir").addEventListener("click", function(){
    
 

  let nameUsuario = document.getElementById("validationCustom01")
  let apellidoUsuario= document.getElementById("validationCustom02")
  let emailUsuario = document.getElementById("validationCustomUsername")
  let edadUsuario  = document.getElementById("validationCustom08")
  let telUsuario  = document.getElementById("validationCustom07")



localStorage.setItem('Nombre', JSON.stringify({ usuario : nameUsuario.value}));
localStorage.setItem('Apellido', JSON.stringify({ usuario : apellidoUsuario.value}));
localStorage.setItem('email', JSON.stringify({ usuario : emailUsuario.value}));
localStorage.setItem('edad', JSON.stringify({ usuario : edadUsuario.value}));
localStorage.setItem('telefono', JSON.stringify({ usuario :telUsuario.value}));

window.location = "my-profile.html";



}) 

}); 


document.addEventListener("DOMContentLoaded", function(e){
  let nombreCarga = localStorage.getItem('Nombre');
  let apellidoCarga = localStorage.getItem('Apellido');
  let emailCarga = localStorage.getItem('email');
  let edadCarga = localStorage.getItem('edad');
  let telCarga = localStorage.getItem('telefono');
  
  let nombreuser = document.getElementById("name");
  let apellidouser = document.getElementById("lastname");
  let emailuser = document.getElementById("email");
  let edaduser = document.getElementById("age");
  let teluser = document.getElementById("tel");
  
 
    nombreCarga = JSON.parse(nombreCarga);
    nombreuser.innerText = nombreCarga.usuario;

    apellidoCarga = JSON.parse(apellidoCarga);
    apellidouser.innerText = apellidoCarga.usuario;

    emailCarga = JSON.parse(emailCarga);
    emailuser.innerText = emailCarga.usuario;

    edadCarga = JSON.parse(edadCarga);
    edaduser.innerText = edadCarga.usuario;

   telCarga = JSON.parse(telCarga);
    teluser.innerText = telCarga.usuario;
       

  });