// [x] instanciar XMLHttpRequest()
// [x] o que fazer depois que receber a resposta
// [x] fazer a requisição com open() e send()
// [x] tratar response
// [x] iterar sobre o array e mostrar as três imagens usando for()
// [x] iterar sobre o array e mostrar as três imagens usando for...of
// [x] iterar sobre o array e mostrar as três imagens usando forEach

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

// Versão 2 (utilizando for):

const request = new XMLHttpRequest();
const div = document.getElementById("root");
request.onreadystatechange = getFotos;

// function getFotos() {
//     if (request.readyState === 4 && request.status === 200) {
//         const response = request.response;
//         const json = JSON.parse(response);
//         const data = json.data;
        
//         for (let i = 0; i < data.length; i++) {
//             const img = document.createElement("img");
//             div.appendChild(img);
//             img.src = data[i].imagem;
//             const txt  = document.createElement("p");
//             div.appendChild(txt);
//             txt.textContent = data[i].nome;

//             // outra forma de criar o for:
//             // const element = data[i];
//             // const img = `<img src=${element.imagem}>`;
//             // div.innerHTML += img

//         }
//     } else  {
//         console.log(request.readyState, request.status);
//     }
// }

const url = "./data/dados.json"
request.open("GET", url);
request.send(null);

// Versão 3 (utilizando forEach):

// function getFotos() {
//     if (request.readyState === 4 && request.status === 200) {
//         const response = request.response;
//         const json = JSON.parse(response);
//         const data = json.data;

//         data.forEach(element => {
//             const img = document.createElement("img");
//             div.appendChild(img);
//             img.src = element.imagem;
//             const txt  = document.createElement("p");
//             div.appendChild(txt);
//             txt.textContent = element.nome;
//         });
        
//     } else  {
//         console.log(request.readyState, request.status);
//     }
// }

// Versão 4 (utilizando for...of):

function getFotos() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response;
        const json = JSON.parse(response);
        const data = json.data;

        for (const posicao of data) {
            const img = document.createElement("img");
            div.appendChild(img);
            img.src = posicao.imagem;
            const txt  = document.createElement("p");
            div.appendChild(txt);
            txt.textContent = posicao.nome;
        }
        
    } else  {
        console.log(request.readyState, request.status);
    }
}


            