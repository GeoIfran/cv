const url = 'https://randomuser.me/api/?nat=es';
let persona = "x";

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let persona = data.results;    
    
    return persona.map(function(persona){document.getElementById("nombreCompleto-titulo").innerHTML = `${persona.name.last}, ${persona.name.first}`});   
    
})  
.then [let persona = data.results]
.then(persona.map(profesionSexista(persona.gender)));
,then ()
    



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