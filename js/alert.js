"use strict"
const button = document.getElementById("button");
const formP = document.getElementById("formP");
const divpadre =document.getElementById("padre");
const guardar=document.getElementById("guardar");
const eleminar=document.getElementById("eleminar");


button.addEventListener("click", function(){
    formP.classList.remove("form-hidden");
    formP.classList.add("form-visible");
    divpadre.classList.remove("div-padre-hidden");
    divpadre.classList.add("div-padre-visible")

  
});

guardar.addEventListener("click", function(){
    formP.classList.remove("form-visible");
    formP.classList.add("form-hidden");
    divpadre.classList.remove("div-padre-visible");
    divpadre.classList.add("div-padre-hidden")

  
});
eleminar.addEventListener("click", function(){
    formP.classList.remove("form-visible");
    formP.classList.add("form-hidden");
    divpadre.classList.remove("div-padre-visible");
    divpadre.classList.add("div-padre-hidden")

  
});

