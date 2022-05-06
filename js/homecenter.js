"use strict"

const ana = document.getElementById("ana");
const formana =document.getElementById("formana");
const cerrarfrom = document.getElementById("cerrarfrom")


ana.addEventListener("click",function(){
    formana.classList.remove("form-ana-hidden");
    formana.classList.add("contenedor-visible");
    ana.classList.remove("image-ana-visible");
    ana.classList.add("image-ana-hidden");
})
cerrarfrom.addEventListener("click",function(){
    formana.classList.add("form-ana-hidden");
    formana.classList.remove("contenedor-visible");
    ana.classList.add("image-ana-visible");
    ana.classList.remove("image-ana-hidden"); 
  
})




const lupa = document.getElementById("idLupa");
const menu1 = document.getElementById("idHeader");
const menu2 = document.getElementById("idhearder2");
const cerrarMenu2 = document.getElementById("cerrarcontenedor2");


lupa.addEventListener("click",function(){
    menu1.classList.remove("encabezado");
    menu1.classList.add("encabezadoInvisible");
    menu2.classList.add("encabezado2");
    menu2.classList.remove("encabezado2invisible");
})

cerrarMenu2.addEventListener("click",function(){
    menu2.classList.remove("encabezado2");
    menu2.classList.add("encabezado2invisible");
    menu1.classList.add("encabezado");
    menu1.classList.remove("encabezadoInvisible");
})