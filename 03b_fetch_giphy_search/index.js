// fetch da imagem
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] usar o endpoint de busca
// [x] usar o método fetch() para a url da API Giphy
// [x] transformar o dado recebido
// [x] apresentar <img>

const input = document.getElementById("gifInput");
const btn = document.getElementById("gifButton");
const div = document.getElementById("root")

btn.addEventListener("click", function (evento){
    evento.preventDefault();
    div.innerHTML = "";
    const termoBuscado = input.value;
    input.value = "";
    const url = `http://api.giphy.com/v1/gifs/search?q=${termoBuscado}&api_key=dc6zaTOxFJmzC&limit=4&offset=0`;

    fetch(url)
        .then(response => response.json())
        .then(json => mostrarResultado(json))
        .catch(erro => console.error(erro))
        
});

function mostrarResultado(json) {
    const listaGifs = json.data

    listaGifs.forEach(element => {
        const srcImg = element.images.original.url;
        const img = document.createElement("img");
        div.appendChild(img);
        img.src = srcImg;

    });
}

