const fotos = document.querySelectorAll(".foto");

const voltar = document.getElementById("voltar");
const avancar = document.getElementById("avancar");

const numero = document.getElementById("numero");

let atual = 0;


function mostrarFoto() {

    fotos.forEach(function(foto) {
        foto.classList.remove("ativa");
    });

    fotos[atual].classList.add("ativa");

    numero.textContent = atual + 1;
}


avancar.onclick = function() {

    atual++;

    if (atual == fotos.length) {
        atual = 0;
    }

    mostrarFoto();
};


voltar.onclick = function() {

    atual--;

    if (atual < 0) {
        atual = fotos.length - 1;
    }

    mostrarFoto();
};


setInterval(function() {

    atual++;

    if (atual == fotos.length) {
        atual = 0;
    }

    mostrarFoto();

}, 5000);


document.getElementById("contatoBotao").onclick = function() {

    alert("Entre em contato para agendar uma visita!");

};