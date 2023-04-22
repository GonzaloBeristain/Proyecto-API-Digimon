    let boton = document.querySelector("#boton");
    let contenido = document.querySelector("#contenido");
    let eleccion = "";
    let recorrer = 1;

    function digimon2(){

        eleccion = document.getElementById("nombre").value.toLowerCase();

        fetch('https://digimon-api.vercel.app/api/digimon')
        
        .then(response => response.json())
        .then(data => {
            const digimon = data.find(digimon => digimon.name.toLowerCase() === eleccion);
            if (digimon) {
            card2(digimon);
            } else {
            alert("No se encontró ningún digimon con ese nombre.");
            }
        })}

        
        boton.addEventListener("click", digimon2)

        boton.addEventListener("click", function() {
            if (contenido.style.display === "none") {
                contenido.style.display = "block";
            } else {
                contenido.style.display = "none";
            }
            })
        
        
        
        function card2(valor) {  

            contenido.innerHTML = `
                
                <div class="d-flex justify-content-center align-items-center h-100">    
                    <div class="card bg-warning">
                        <img src="${valor.img}" class="card-img-topg  " alt="..." id="foto">
                        <div class="card-body">
                            <h5 class="card-title" id="titulo"><center><b>${valor.name}</b></center></h5>
                            <hr>
                            <p class="card-text" id="descripcion"><center>${valor.level}</center></p>
                        </div>
                    </div>
                </div>
                `
                }
