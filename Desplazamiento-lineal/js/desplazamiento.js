const toyotahome = document.getElementById("toyota-home");
const toyotabanner= document.getElementById("toyota-banner");
const toyotaraize = document.getElementById("toyota-raize");
const botonAdelante = document.getElementById("botonAdelante");
const botonAtras = document.getElementById("botonAtras");
const circulo1 =document.getElementById("circulo1")
const circulo2 =document.getElementById("circulo2")
const circulo3 =document.getElementById("circulo3")

botonAdelante.addEventListener("click",function(){
  if(  toyotahome.classList.contains("toyota-home-visible")){
    toyotahome.classList.add("toyota-home-oculta");
    toyotahome.classList.remove("toyota-home-visible");
    toyotabanner.classList.add("toyota-banner-visible");
    toyotabanner.classList.remove("toyota-banner-oculta-derecha");
    circulo1.classList.add("color-claro");
    circulo1.classList.remove("color-oscuro");
    circulo2.classList.add("color-oscuro");
    circulo2.classList.remove("color-claro");
}else{
    toyotabanner.classList.add("toyota-banner-oculta-izquierda");
    toyotabanner.classList.remove("toyota-banner-visible");
    toyotaraize.classList.add("toyota-raize-visible");
    toyotaraize.classList.remove("toyota-raize-oculta");
    circulo2.classList.add("color-claro");
    circulo2.classList.remove("color-oscuro");
    circulo3.classList.add("color-oscuro");
    circulo3.classList.remove("color-claro");
}
});

botonAtras.addEventListener("click",function(){
    if(  toyotaraize.classList.contains("toyota-raize-visible")){
        toyotaraize.classList.add("toyota-raize-oculta");
        toyotaraize.classList.remove("toyota-raize-visible");
        toyotabanner.classList.add("toyota-banner-visible");
        toyotabanner.classList.remove("toyota-banner-oculta-izquierda");
        circulo3.classList.add("color-claro");
        circulo3.classList.remove("color-oscuro");
        circulo2.classList.add("color-oscuro");
        circulo2.classList.remove("color-claro");
    }else{
        toyotabanner.classList.add("toyota-banner-oculta-derecha");
        toyotabanner.classList.remove("toyota-banner-visible");
        toyotahome.classList.add("toyota-home-visible");
        toyotahome.classList.remove("toyota-home-oculta");
        circulo2.classList.add("color-claro");
        circulo2.classList.remove("color-oscuro");
        circulo1.classList.add("color-oscuro");
        circulo1.classList.remove("color-claro");

    }
});

