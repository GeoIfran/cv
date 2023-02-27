async function consultar_datos() {
  let contenedor_datos = await fetch("https://randomuser.me/api/?nat=es")
                                .then (response => response.json())
                                .then (data => data)
  console.log(contenedor_datos)
}
