let saibaMais = document.getElementById("saiba-mais");
let fundoImagem = document.querySelector("body");

let botaoVoltar = document.querySelectorAll("img")[0];
let botaoAvancar = document.querySelectorAll("img")[1];

let temas = ["tema-rosa", "tema-amarelo", "tema-laranja", "tema-azul"];

let imagemDeFundo = [
  "fundo-rosa",
  "fundo-amarelo",
  "fundo-laranja",
  "fundo-azul",
];

i = 0;

saibaMais.classList.add(temas[0]);
fundoImagem.classList.add(imagemDeFundo[0]);
botaoVoltar.classList.add("fim-das-imagens");

botaoAvancar.addEventListener("click", function () {
  if (i == temas.length - 2) {
    botaoAvancar.classList.add("fim-das-imagens");
  }
  if (i < temas.length - 1) {
    i++;
    saibaMais.classList.replace(temas[i - 1], temas[i]);
    fundoImagem.classList.replace(imagemDeFundo[i - 1], imagemDeFundo[i]);
    botaoVoltar.classList.remove("fim-das-imagens");
    console.log(i);
  }
});

botaoVoltar.addEventListener("click", function () {
  if (i == 1) {
    botaoVoltar.classList.add("fim-das-imagens");
  }
  if (i > 0) {
    i--;
    saibaMais.classList.replace(temas[i + 1], temas[i]);
    fundoImagem.classList.replace(imagemDeFundo[i + 1], imagemDeFundo[i]);
    botaoAvancar.classList.remove("fim-das-imagens");
    console.log(i);
  } else {
    botaoVoltar.classList.add("fim-das-imagens");
  }
});
