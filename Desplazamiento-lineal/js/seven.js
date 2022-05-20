"use strict"

const button = document.getElementById("button");
const formP = document.getElementById("formP");
 const cerrarForm = document.getElementById("cerrarForm"); 

button.addEventListener("click", function(){
    formP.classList.remove("form-hidden");
    formP.classList.add("form-visible");

  
});

 cerrarForm.addEventListener("click", function(){
    formP.classList.remove("form-visible");
    formP.classList.add("form-hidden");

}); 