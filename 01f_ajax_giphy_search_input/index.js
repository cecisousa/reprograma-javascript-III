// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const request = new XMLHttpRequest();
const input = document.getElementById("gifInput");
const body = document.body;
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
            const img = document.createElement("img");
            body.appendChild(img);
            img.src = json.data[1].images.original.url;
            console.log(img.src)
        } else {
            console.log(request.readyState, request.status);
        }
    }  
});
