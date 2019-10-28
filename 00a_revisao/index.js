// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] alterar cor de <body>
// [x] escutar o clique do botão
// [x] criar função de alterar a cor usando rgb()
// [x] usar Math.random() e Math.floor() ou parseInt()

const botao = document.getElementById("trocaCor");
const corpo = document.querySelector("body");
// outra forma de capturar um elemento HTML: const corpo = document.body;

corpo.style.backgroundColor = "purple";
// para trocar a cor do background sem necessariamente linkar com o botão

// botao.addEventListener("click", function(){
//     corpo.style.backgroundColor = "purple";
// });

botao.addEventListener("click", trocaCor);
// para criar uma função fora do addEventListener

function geraNumero() {
    const numeroInteiro = Math.floor(Math.random() * 255);
    return numeroInteiro;
}

function trocaCor() {
    const corRandomicaR = geraNumero();
    const corRandomicaG = geraNumero();
    const corRandomicaB = geraNumero();
// IMPORTANTE: para o botão gerar Randoms infinitamente, essas variáveis devem estar dentro da função

    corpo.style.backgroundColor = "rgb(" + corRandomicaR + "," + corRandomicaG + "," + corRandomicaB + ")";
    // console.log(corRandomicaR,corRandomicaG,corRandomicaB);
}