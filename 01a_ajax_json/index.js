// [x] instanciar XMLHttpRequest()
// [x] o que fazer depois que receber a resposta
// [x] fazer a requisição com open() e send()
// [x] tratar response
const div = document.getElementById("root");
const imagem = document.createElement("img");
const request = new XMLHttpRequest();

request.onreadystatechange = getDados;

function getDados() {
    if(request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
        imagem.src = json.data[0].imagem;
        div.appendChild(imagem);
    } else {
        console.log(request.readyState, request.status);
    }
}

// forma detalhada da function:

// function getDados() {
//     if(request.readyState === 4 && request.status === 200) {
//         const response = request.response;
//         const json = JSON.parse(response);
//         const data = json.data;
//         const obj = data[0];
//         const imgSrc = obj.imagem;
//         imagem.src = imgSrc;
//         div.appendChild(imagem);
//     } else {
//         console.log(request.readyState, request.status);
//     }
// }

const url = "./data/dados.json";
request.open("GET", url);
request.send(null);
