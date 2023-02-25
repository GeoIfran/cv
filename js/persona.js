const url_ramdomuser = 'https://randomuser.me/api/?nat=es';


function traer_datos_actuales() {
    // La función fetch() de la API devuelve una Promesa. Esta función
    // expone una API similar, pero el valor de cumplimiento
    // de la Promesa de esta función tiene más tareas
    // implementadas sobre ella.
    return fetch(url_ramdomuser).then((response) => {
      
      var j = response.json();
      // podríamos hacer algo con j
      return j; // valor de cumplimiento asignado al usuario de
                // fetch_datos_actuales().then()
    });
  }
const persona = traer_datos_actuales();


console.log(persona);
function profesionSexista (sexo){
    if(sexo=="female"){
        return document.getElementById("profesion-titulo").innerHTML ="Experta en refrigeración de materiales de la construcción"
    }else if(sexo=="male"){
        return  document.getElementById("profesion-titulo").innerHTML ="Experto en refrigeración de materiales de la construcción"
    }else{
        return document.getElementById("profesion-titulo").innerHTML ="Experte en refrigeración de materiales de la construcción"
    }
}