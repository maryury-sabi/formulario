let nodeTable  =undefined;

function registrarInfo(){
    
    if(validarFormulario() ){
      crearEncabezado();
     cargarproducto(); 
     limpiarFormulario();
  }
}

function crearEncabezado() {
  if (!document.getElementById("table-content")){
    nodeTable = document.createElement("table");
    let contenedortabla =document.getElementById("table-js");
    contenedortabla.appendChild(nodeTable);

    nodeTable.setAttribute("id","table-content");
    nodeTable.setAttribute("class","table-style")


    let nodeTR1 = document.createElement("tr");
    nodeTable.appendChild(nodeTR1);
    let nodeTH1 = document.createElement("th")
    nodeTR1.appendChild(nodeTH1);
    let nodeTH1Txt = document.createTextNode("Codigo")
    nodeTH1.appendChild(nodeTH1Txt);
    
    let nodeTH2 = document.createElement("th")
    nodeTR1.appendChild(nodeTH2);
    let nodeTH2Txt = document.createTextNode("Descripcion")
    nodeTH2.appendChild(nodeTH2Txt);

    let nodeTH3 = document.createElement("th")
    nodeTR1.appendChild(nodeTH3);
    let nodeTH3Txt = document.createTextNode("Valor Unitario")
    nodeTH3.appendChild(nodeTH3Txt);

    let nodeTH4 = document.createElement("th")
     nodeTR1.appendChild(nodeTH4);
      let nodeTH4Txt = document.createTextNode("Unidades en Stock")
      nodeTH4.appendChild(nodeTH4Txt);

      

  }
 
}



function cargarproducto (){ 
  let nodeTR2 = document.createElement("tr");
  nodeTable.appendChild(nodeTR2);
  
  
  let nodeTd1= document.createElement("td")
  nodeTR2.appendChild(nodeTd1);
  let inputCodigo = document.getElementById("cod").value;
  let nodotxtcodigo = document.createTextNode(inputCodigo);
  nodeTd1.appendChild(nodotxtcodigo);
  
  
  let nodeTd2= document.createElement("td")
  nodeTR2.appendChild(nodeTd2);
  let inputDescripcion= document.getElementById("descripcion").value;
  let nodotxtdescripcion =document.createTextNode(inputDescripcion);
  nodeTd2.appendChild(nodotxtdescripcion);


  let nodeTd3= document.createElement("td")
   nodeTR2.appendChild(nodeTd3);
   let inputvalorUni = document.getElementById("valorUnitario").value;
   let nodotxtvalorUni =document.createTextNode(inputvalorUni);
    nodeTd3.appendChild(nodotxtvalorUni);

    
    let nodeTd4= document.createElement("td")
    nodeTR2.appendChild(nodeTd4);
     let inputunidadeStock = document.getElementById("valoStock").value;
     let nodotxtunidadStock =document.createTextNode(inputunidadeStock);
     nodeTd4.appendChild(nodotxtunidadStock);

} 


function validarFormulario(){
   if(document.getElementById("cod").value.trim() == ""){
     alert ("Por favor ,ingrese el código del producto");
     document.getElementById("cod").focus();
     return false;
   }
   if(document.getElementById("descripcion").value.trim()== ""){
    alert ("Por favor ,ingrese el descripcion del producto");
    document.getElementById("descripcion").focus();
    return false;
  }
  if(document.getElementById("valorUnitario").value.trim() == ""){
    alert ("Por favor ,ingrese el valor Unitario del producto");
    document.getElementById("valorUnitario").focus();
    return false;
  }if(document.getElementById("valoStock").value.trim() == ""){
    alert ("Por favor ,ingrese el Unidades en Stock  del producto");
    document.getElementById("valoStock").focus();
    return false;
  }


   return true;
}

function limpiarFormulario(){
  document.getElementById("cod").value= "";
  document.getElementById("descripcion").value= "";
  document.getElementById("valorUnitario").value= "";
  document.getElementById("valoStock").value= "";

}

    
