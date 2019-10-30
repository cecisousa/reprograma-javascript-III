// [] XMLHttpRequest ddo gif
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function

const request = new XMLHttpRequest();
const img = document.getElementById("imagem");
const corpo = document.body;
const img2 = document.createElement("img");
const img3 = document.createElement("img");
corpo.appendChild(img2);
corpo.appendChild(img3);

request.onreadystatechange = mostraGif;

// function mostraGif() {

//     if (request.readyState === 4 && request.status === 200) {
//         const response = request.response;
//         const json = JSON.parse(response);
//         const gifAleatorio = json.data.images.original.url;
//         img.setAttribute("src", gifAleatorio);
//     } else {
//         console.log (request.readyState, request.status);
//     }
// }

// const url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=funny+cat"

// Para acessar outra URL, com Array, dessa API

function mostraGif() {

    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
        const gifAleatorio = json.data[0].images.original.url;
        img.setAttribute("src", gifAleatorio);
        const gifAleatorio1 = json.data[1].images.original.url;
        img2.setAttribute("src", gifAleatorio1);
        const gifAleatorio2 = json.data[2].images.original.url;
        img3.setAttribute("src", gifAleatorio2);
    }
}

// Outra forma de incluir os elementos dentro do body:

// function mostraGif() {

//     if (request.readyState === 4 && request.status === 200) {
//         const response = request.response;
//         const json = JSON.parse(response);
//         const corpo = document.body;

//         corpo.innerHTML = `
//         <img src=${json.data[0].images.original.url}>
//         <img src=${json.data[1].images.original.url}>
//         <img src=${json.data[2].images.original.url}>
//         `
//     }
// }

const termoBuscado = "most+cute+cats";

const url = `http://api.giphy.com/v1/gifs/search?q=${termoBuscado}&api_key=dc6zaTOxFJmzC&limit=3&offset=0`

request.open("GET", url);
request.send(null);