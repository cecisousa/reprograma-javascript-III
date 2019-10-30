// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [x] remover repetição de código
// [x] anonymous function
// [x] arrow function
// [x] template string

// 3. adicinando classe
// [x] criar classe e chamar

const body = document.body;
const botao = document.getElementById('trocaCor');

body.style.backgroundColor = 'purple';
botao.addEventListener('click', mudaBody)

function mudaBody() {
  const mudaC = new MudaCor()
  body.style.backgroundColor = mudaC.geraRGB();
}