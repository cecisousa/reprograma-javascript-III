// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const request = new XMLHttpRequest();
const input = document.getElementById("gifInput");
const busca = input.value;

console.log(busca);