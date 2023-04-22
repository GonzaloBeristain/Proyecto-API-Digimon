$(document).ready(function () {

    let tabla = document.querySelector("#tabla");

    let recorrer = 1;

    fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(json => carta(json))

    let carta = (json) => {

    for (temp of json) {

        tabla.innerHTML +=
        `
        <tbody class="table table-bordered">
            <tr class="table-warning">
                <th scope="row">${recorrer}</th>
                <td><a href = "${temp.img}">${temp.name}</a></td>
                <td>${temp.level}</td>
                <td><a href="${temp.img}"><img src="${temp.img}" style="width: 30px; height: 30px;" alt=""></a></td>
            </tr>
        </tbody>
        `
        recorrer ++;
    }

    let imagenes = document.querySelectorAll('img');

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('mouseenter', function() {
        this.classList.add('ampliada');
        });
        imagenes[i].addEventListener('mouseleave', function() {
        this.classList.remove('ampliada');
        });
    }

}})
