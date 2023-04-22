//Elección por letra

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(digimon => agregarDigimon(digimon))


let agregarDigimon = (digimon) => {
    
    let tabla = document.getElementById("tabla");
    
    let letras = document.querySelectorAll("#indice span");

    // Agregar evento a cada letra del índice
    letras.forEach(letra => {
        letra.addEventListener("click", () => {
            // Obtener la letra seleccionada
            let letraSeleccionada = letra.innerText;

            // Filtrar los digimones que empiezan con la letra seleccionada
            let digimonFiltrados = digimon.filter(digimon => digimon.name.startsWith(letraSeleccionada));

            // Vaciar la tabla
            tabla.getElementsByTagName("tbody")[0].innerHTML = "";

            // Recorrer el nuevo array de digimones y agregar las filas correspondientes a la tabla
            digimonFiltrados.forEach(digimon => {
                tabla.getElementsByTagName("tbody")[0].innerHTML +=
                `
                <tr class="table-warning">
                    <th scope="row"></th>
                    <td><a href="${digimon.img}">${digimon.name}</a></td>
                    <td>${digimon.level}</td>
                    <td><a href="${digimon.img}"><img src="${digimon.img}" style="width: 30px; height: 30px;" alt=""></a></td>
                </tr>
                `;
            });

            //Agrandar imagenes cuando se filtra por letra.
            let imagenes = document.querySelectorAll('img');
            for (let i = 0; i < imagenes.length; i++) {
                imagenes[i].addEventListener('mouseenter', function() {
                this.classList.add('ampliada');
                });
                imagenes[i].addEventListener('mouseleave', function() {
                this.classList.remove('ampliada');
                });
            }
        });
    });
};


