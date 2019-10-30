// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response



// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach

// Versão 1 (sem array):

// const request = new XMLHttpRequest();
// const div = document.getElementById("root");
// const img1 = document.createElement("img");
// const img2 = document.createElement("img");
// const img3 = document.createElement("img");
// div.appendChild(img1);
// div.appendChild(img2);
// div.appendChild(img3);

// request.onreadystatechange = getFotos;

// function getFotos() {
//     if (request.readyState === 4 && request.status === 200) {
//         const response = request.response;
//         const json = JSON.parse(response);
//         img1.src = json.data[0].imagem;
//         img2.src = json.data[1].imagem;
//         img3.src = json.data[2].imagem;

//     } else  {
//         console.log(request.readyState, request.status);
//     }
// }

// const url = "./data/dados.json"
// request.open("GET", url);
// request.send(null);

// Versão 2 (utilizando array):

const request = new XMLHttpRequest();
const div = document.getElementById("root");
request.onreadystatechange = getFotos;

function getFotos() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
        
        for (let i = 0; i < json.data.length; i++) {
            const img = document.createElement("img");
            div.appendChild(img);
            img.src = json.data[i].imagem;
        }
    } else  {
        console.log(request.readyState, request.status);
    }
}

const url = "./data/dados.json"
request.open("GET", url);
request.send(null);