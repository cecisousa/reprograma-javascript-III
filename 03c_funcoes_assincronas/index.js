// função assíncrona

// function lavaLouca (callback1, callback2) {
//     callback1().then(() => {
//         callback2();
//     });
// }

// function ensaboar() {
//     return new Promise((resolve, reject) => {
//         console.log("Comecei a ensaboar");
//         setTimeout(() => {
//             resolve(console.log("Terminei de ensaboar"));
//         }, 5000);
//     });
// }

// function enxaguar() {
//     console.log("Comecei a enxaguar");
//     setTimeout(() => {
//         console.log("Terminei de enxaguar");
//     }, 2000);
// }

// lavaLouca(ensaboar, enxaguar);

// outra forma de resolver:

function criaTexto(texto) {
    const div = document.getElementById("root");
    div.innerHTML += `<h1>${texto}</h1>`
}

const sabao = true;
const agua = true;

function ensaboar() {
    return new Promise((resolve, reject) => {
        if (sabao) {
            criaTexto("Começou a ensaboar");
            setTimeout(() => {
                resolve("Terminou de ensaboar");
            }, 5000);
        } else {
            reject("Não consigo ensaboar");
        }
    });
}

function enxaguar () {
    return new Promise((resolve, reject) => {
        if (agua) {
            setTimeout(() => {
                criaTexto("Começou a enxaguar");
                setTimeout(() => {
                    resolve("Terminou de enxaguar");
                }, 2000);
            }, 1000);
        } else {
            reject("Não consigo enxaguar")
        }
    })
}

ensaboar()
    .then(res => {
        criaTexto(res)
        enxaguar()
            .then(res2 => criaTexto(res2))
            .catch(erro2 => criaTexto(erro2))
    })
    .catch(erro => criaTexto(erro))

// outro jeito de chamar, dessa vez usando Promise.all()

// Promise.all([ensaboar, enxaguar]).then(resultado => console.log(resultado));