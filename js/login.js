//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("entrarBtn").addEventListener("click", function(){
let inputUsuario = document.getElementById("inputUsuario");
let inputContraseña = document.getElementById("inputContraseña");
let datoUsuario = true;
let datoContraseña = true;

if (inputUsuario.value === ''){
    datoUsuario = false ; 
    alert("El campo usuario no puede estar vacío")}
    else
    {datoUsuario=true;}
    
if (inputContraseña.value === ''){
    datoContraseña = false;
    alert(" El campo contraseña no puede estar vacío");
}
else
{datoContraseña = true;}

if (datoUsuario ===true && datoContraseña === true) 
{
localStorage.setItem('User-Logged', JSON.stringify({usuario: inputUsuario.value}));
window.location = "inicio.html";
}
})
});