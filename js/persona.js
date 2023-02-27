const url_ramdomuser = 'https://randomuser.me/api/?nat=es';
const imagen = document.getElementById("foto");
const nombre_titulo = document.getElementById("primerNombre_tit");
const trtamiento_titulo = document.getElementById("tratamiemto_tit");
const apellido_titulo = document.getElementById("apellido_tit");
const sexo_profesion = document.getElementById('profesion_sexista');
const nombre_cont = document.getElementById("nombre_contenido");
const email_datos = document.getElementById("datos_email");
const apellido_cont = document.getElementById("apellido_contenido");
const tipo_doc = document.getElementById("tipo_documento");
const fn = document.getElementById("fecha_nacimiento");
const data_edad = document.getElementById("edad");
const num_doc = document.getElementById("numero_documento");
const genero = document.getElementById("sexo");
const dir_calle = document.getElementById("calle");
const dir_nemeracion = document.getElementById("puerta");
const dir_localidad = document.getElementById("localidad-dir");
const tel_fijo = document.getElementById("fijo");
const tel_mobil = document.getElementById("celular");
const titulo_web = document.getElementById('title_web');
const tel_wp = document.getElementById('whatsapp');
const dir_foot = document.getElementById('domicilio_footer');
const tel_foot = document.getElementById('telefono_footer');
const wp_foot = document.getElementById('wp_footer');
const email_foot = document.getElementById('email_footer');


const generarPersona = async() => {
    try {
        const respuesta = await fetch(url_ramdomuser);
        const { results } = await respuesta.json();
        const datos_persona = results[0];
        console.log(datos_persona);
        imagen.src = datos_persona.picture.large;
        nombre_titulo.textContent = datos_persona.name.first;
        nombre_cont.textContent = datos_persona.name.first;
        apellido_titulo.textContent = datos_persona.name.last;
        apellido_cont.textContent = datos_persona.name.last;
        titulo_web.textContent = 'CV de '+ datos_persona.name.first + " " + datos_persona.name.last;
        let terminaciones_referencia;
        let sexo_persona;
            if(datos_persona.gender == 'female'){
            sexo_persona = "Femenino";
            terminaciones_referencia = "a";
            } else if (datos_persona.gender == 'male') {
            sexo_persona = "Masculino";
            terminaciones_referencia = "o";           
            } else {
            sexo_persona = "Neutro";
            terminaciones_referencia = "e";           
            }
        sexo_profesion.textContent = terminaciones_referencia;
        genero.textContent = sexo_persona;
        email_datos.textContent = datos_persona.email;
        email_foot.textContent = datos_persona.email;
        tipo_doc.textContent = datos_persona.id.name;
        num_doc.textContent = datos_persona.id.value;
        data_edad.textContent = datos_persona.dob.age;
        fn.textContent = datos_persona.dob.date;
        dir_calle.textContent = datos_persona.location.street.name;
        dir_nemeracion.textContent = datos_persona.location.street.number;
        dir_localidad.textContent = datos_persona.location.city;
        dir_foot.textContent = datos_persona.location.street.name+" "+datos_persona.location.street.number+", "+datos_persona.location.city;;
        tel_fijo.textContent = datos_persona.phone;
        tel_foot.textContent = datos_persona.phone;
        tel_mobil.textContent = datos_persona.cell;
        tel_wp.textContent = datos_persona.cell;
        wp_foot.textContent = datos_persona.cell;
        
    } catch (error) {
        console.log(error);
    }
}
document.addEventListener('DOMContentLoaded', generarPersona() );