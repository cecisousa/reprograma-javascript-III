// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] alterar cor de <body>
// [x] escutar o clique do botão
// [x] criar função de alterar a cor usando rgb()
// [x] usar Math.random() e Math.floor() ou parseInt()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [x] remover repetição de código
// [x] anonymous function
// [x] arrow function
// [x] template string

const corpo = document.querySelector("body");
const botao = document.getElementById("trocaCor");

// Anonymous function

// corpo.style.backgroundColor = "purple";
// botao.addEventListener("click", function() {
//     const corRandomicaR = geraNumero();
//     const corRandomicaG = geraNumero();
//     const corRandomicaB = geraNumero();

//     corpo.style.backgroundColor = "rgb(" + corRandomicaR + "," + corRandomicaG + "," + corRandomicaB + ")";
// });

// function geraNumero() {
//     const numeroInteiro = Math.floor(Math.random() * 255);
//     return numeroInteiro;
// }

// Arrow function

// corpo.style.backgroundColor = "purple";
// botao.addEventListener("click", () => {
//     const corRandomicaR = geraNumero();
//     const corRandomicaG = geraNumero();
//     const corRandomicaB = geraNumero();

//     corpo.style.backgroundColor = "rgb(" + corRandomicaR + "," + corRandomicaG + "," + corRandomicaB + ")";
// });

// geraNumero = () => {
//     return Math.floor(Math.random() * 255);;
// }

// Arrow function sem () para um ÚNICO parâmetro, sem {} e sem return

// corpo.style.backgroundColor = "purple";
// botao.addEventListener("click", () => {
//     const corRandomicaR = geraNumero(255);
//     const corRandomicaG = geraNumero(255);
//     const corRandomicaB = geraNumero(255);

//     corpo.style.backgroundColor = "rgb(" + corRandomicaR + "," + corRandomicaG + "," + corRandomicaB + ")";
// });

// geraNumero = num => Math.floor(Math.random() * num);

// Template String

// corpo.style.backgroundColor = "purple";
// botao.addEventListener("click", () => {
//     const corRandomicaR = geraNumero(255);
//     const corRandomicaG = geraNumero(255);
//     const corRandomicaB = geraNumero(255);

//     corpo.style.backgroundColor = `rgb(${corRandomicaR}, ${corRandomicaG}, ${corRandomicaB})`;
// });

// Classes
corpo.style.backgroundColor = "purple";
botao.addEventListener("click", mudaBody);
class MudaCor {
    constructor() {
        this.r = this.geraNumero(255);
        this.g = this.geraNumero(255);
        this.b = this.geraNumero(255);
    };

    geraNumero(num) {
        return Math.floor(Math.random() * num);
    };

    geraRGB() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
};

function mudaBody () {
    const mudaColor = new MudaCor();
    corpo.style.backgroundColor = mudaColor.geraRGB();

    // Também podemos instanciar direto:
    // corpo.style.backgroundColor = new MudaCor().geraRGB();
}

