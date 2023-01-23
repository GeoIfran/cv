const url = 'https://randomuser.me/api/?nat=es';
let persona = "x";
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let persona = data.results;
    console.log(persona);
   
    
});

console.log(persona);