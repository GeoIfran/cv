$.ajax({
    url: 'https://randomuser.me/api/?nat=es',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      const persona = data.results;
     
      let titulo_pagina = $('CV de ');
      
      titulo_pagina += persona.name.last;
      titulo_pagina += $(', ');
      titulo_pagina.appemd (persona.name.first);
      $(document.title).innerHTML = titulo_pagina;
    }
  });