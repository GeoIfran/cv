const url = 'https://randomuser.me/api/?nat=es';
let persona = {};
function profesionSexista (sexo){
    if(sexo == "male"){
        return 'Experto en refrigeración de materiales de la construcción';
    }else{
        return 'Experta en refrigeración de materiales de la construcción';
    }
};
/**dejo de andar y no entiendo porque */
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let persona = data.results
    console.log(persona)
    persona.map(function(persona){
        document.getElementById("nombreCompleto-titulo").innerHTML = `${persona.name.last}, ${persona.name.first}`

    })
    
}); 

 