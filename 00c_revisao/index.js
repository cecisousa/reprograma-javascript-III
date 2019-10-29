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

corpo.style.backgroundColor = "purple";
botao.addEventListener("click", mudaBody);

function mudaBody () {
  const mudaColor = new MudaCor();
  corpo.style.backgroundColor = mudaColor.geraRGB();

  // Também podemos instanciar direto:
  // corpo.style.backgroundColor = new MudaCor().geraRGB();
}
