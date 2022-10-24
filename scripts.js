const SHEET_ID = '1noQnBaNyRS_17saC5QOZajpyOEjfTkBSwIt7hG4j3eY';

const TOKEN = 'ya29.a0Aa4xrXOXW7WZ_F-JdOLvdRhhvRLWd13ULnAeK6DofO04OIuTU26q2gSkgiHOXQkGkHAapWhp2utC-HOqTzrmSzMfPPac8JTNaa60sMbdQZ9OHzBBUCBi5EicU2AzoKW6niCug7LnbO3gGG8ziZYkVofUVASIaCgYKATASARESFQEjDvL9zKCZlNBSAPUza-CLZrgskQ0163';

fetch (
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/almuerzo!A:C`,
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
        },
    }
).then(function (response) {
    response.json().then(function (data) {
    const values = data.values;

    const lista = document.getElementById("lista-libros");

    for (var i = 0; i < values.length; i++) {

        const producto = document.createElement("div");
        producto.className =  "acervo-item";

        const nombreLibro= document.createElement("span");
        nombreLibro.className = "nombre libro";
        nombreLibro.innerHTML = values[i][0]; 

        const libroAutor = document.createElement("span");
        libroAutor.className = "item titulo";
        libroAutor.innerHTML = values[i][1];

        const ediciones = document.createElement("span");
        ediciones.className = "edicion";
        ediciones.innerHTML = values[i][2];

        producto.appendChild(nombreLibro);
        //producto.appendChild(libroAutor);
        producto.appendChild(ediciones);
        lista.appendChild(producto);
    }
    });
});
