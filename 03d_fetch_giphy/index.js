// documentacao da api do github  https://developer.github.com/v3/
// requisição na api pela url https://api.github.com
// fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma

const termoBuscado = "cat";
const url = `http://api.giphy.com/v1/gifs/search?q=${termoBuscado}&api_key=dc6zaTOxFJmzC&limit=1&offset=0`;

// fetch(url)
//     .then(response => response.json())
//     .then(json => mostrarImagem(json.data))
//     .catch(erro => console.error(erro))

// function mostrarImagem(lista) {
//     document.body.innerHTML = `
//     <img src=${lista[0].images.original.url}>
//     `
// }

// 1. Sintaxe mais recente para o fetch():

// async function buscarAPI (url) {
//     const response = await fetch(url);
//     if (response.ok) {
//         const json = await response.json();
//         mostrarImagem(json.data);
//     } else {
//         document.body.innerHTML = `<h1>${response.status}: ${response.statusText}</h1>`
//     }
// }

// function mostrarImagem(lista) {
//     if (lista.length) {
//         document.body.innerHTML = `
//         <img src=${lista[0].images.original.url}>
//         `
//     } else {
//         console.warn("Não foi possível carregar a imagem");
//     }
// }

// buscarAPI(url).catch(erro => console.error(erro));

// 2. Outro jeito para tratar erros usando try catch:

async function buscarAPI (url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const json = await response.json();
            mostrarImagem(json.data);
        } else {
            const erro = `${response.status}: ${response.statusText}`
            criaErro(erro);
        }
    } catch (error) {
        criaErro("Falha na requisição da API");
    }
}

function mostrarImagem(lista) {
    if (lista.length) {
        document.body.innerHTML = `
        <img src=${lista[0].images.original.url}>
        `
    } else {
        console.warn("Não foi possível carregar a imagem");
    }
}

function criaErro (erro) {
    document.body.innerHTML = `<h1>${erro}</h1>`
}

buscarAPI(url).catch(erro => console.error(erro));