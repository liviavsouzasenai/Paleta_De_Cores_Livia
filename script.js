let tela = document.querySelector("#tela-de-pintura");
let corAzul = document.querySelector("#pincel-azul");
let corVermelho = document.querySelector("#pincel-vermelho");
let corAmarelo = document.querySelector("#pincel-amarelo");
let corRoxo = document.querySelector("#pincel-roxo");
let corRosa = document.querySelector("#pincel-rosa");
let corLaranja = document.querySelector("#pincel-laranja");
let corVioleta = document.querySelector("#pincel-violeta");
let corMarrom = document.querySelector("#pincel-marrom");
let corVerde = document.querySelector("#pincel-verde");



corAzul.addEventListener("click", azul);
corVermelho.addEventListener("click", vermelho);
corAmarelo.addEventListener("click", amarelo);
corRoxo.addEventListener("click", roxo);
corRosa.addEventListener("click", rosa);
corLaranja.addEventListener("click", laranja);
corVioleta.addEventListener("click", violeta);
corMarrom.addEventListener("click", marrom);
corVerde.addEventListener("click", verde);
let nomeCor = document.documentSelector("h3")

function azul(){
    tela.style.background = "blue";
    nomeCor.innerHTML = "Azul"
}
function vermelho(){
    tela.style.background = "tomato";
    nomeCor.innerHTML = "vemelho";
}
function amarelo(){
    tela.style.background = "gold";
    nomeCor.innerHTML = "amarelo";
}
function roxo(){
    tela.style.background = "purple";
    nomeCor.innerHTML = "roxo";
}
function rosa(){
    tela.style.background = "pink";
    nomeCor.innerHTML = "rosa";
}
function laranja(){
    tela.style.background = "orangered";
    nomeCor.innerHTML = "laranja";
}
function violeta(){
    tela.style.background = "violet";
    nomeCor.innerHTML = "violeta";
}
function marrom(){
    tela.style.background = "brown";
    nomeCor.innerHTML = "marrom";
}
function verde(){
    tela.style.background = "green";
    nomeCor.innerHTML = "verde";
}
