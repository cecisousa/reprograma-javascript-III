// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const request = new XMLHttpRequest();
const input = document.getElementById("gifInput");
const div = document.getElementById("root");
const btn = document.getElementById("gifButton");

btn.addEventListener("click", function(evento){
    request.onreadystatechange = pesquisaGif;
    evento.preventDefault();
    const textoBuscado = input.value;
    const chaveAPI = "dc6zaTOxFJmzC";
    const url = `http://api.giphy.com/v1/gifs/search?q=${textoBuscado}&api_key=${chaveAPI}&limit=3&offset=0`
    request.open("GET", url);
    request.send(null);

    function pesquisaGif () {
        if (request.readyState === 4 && request.status === 200) {
            const response = request.response;
            const json = JSON.parse(response);
            const img1 = document.createElement("img");
            div.appendChild(img1);
            img1.src = json.data[0].images.original.url;
            const img2 = document.createElement("img");
            div.appendChild(img2);
            img2.src = json.data[1].images.original.url;
            const img3 = document.createElement("img");
            div.appendChild(img3);
            img3.src = json.data[2].images.original.url;
        } else {
            console.log(request.readyState, request.status);
        }
    }  
});
