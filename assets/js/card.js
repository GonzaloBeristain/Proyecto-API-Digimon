$(document).ready(function () {

    let contenido = document.querySelector("#contenido");

    let recorrer = 1;
    
    
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(json => carta(json))
        
        
        function carta(json) {  

            for(temp of json) {

            contenido.innerHTML +=
            
            
                `
                <div class="card border-3 border-danger bg-warning  col-2 m-2 col-lg-2 col-md-3 col-sm-5 col-12 ">
                <img src="${temp.img}" class="card-img-top mt-3" alt="...">
                <div class="card-body" ">
                    <h5 class="card-title"><b>#${recorrer} ${temp.name}</b></h5>
                    <hr>
                    <p class="card-text">${temp.level}</p>
                </div>
                </div> 
                `
            recorrer ++
            }
        }
    }
);
