let catalogoAbierto = false;

document.querySelector('#boton').addEventListener('click', toggleCatalog);

function toggleCatalog(){
        if(!catalogoAbierto){
        //Abre catologo
          const album = new albumRequest();
          album.open('GET', 'catalog.json', true);
          album.send();
          album.onreadystatechange = function(){
             if(this.readyState == 4 && this.status == 200){

                let datos = JSON.parse(this.responseText);
                let respuesta = document.querySelector('#respuesta');
                respuesta.innerHTML = '';
                for(let item of datos){
                    
                    respuesta.innerHTML += `
                        <tr>
                            
                            <td>${item.iframe}</td>
                        </tr>
                    
                    `;
                }
             }
          }
          catalogoAbierto = true;
         }else {
            // Cierra el catálogo JSON
            document.querySelector('#respuesta').innerHTML = '';
            catalogoAbierto = false;
     
     }
}