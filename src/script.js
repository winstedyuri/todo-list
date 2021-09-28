'use strict';

function adicionarTarefa() {
    let input = document.getElementById("inputTarefa").value;
    let elementoLista = document.getElementById("lista");
    let valorAtualDaLista = elementoLista.innerHTML;
    let novoValorNaLista = "<div>" + input + "</div>";
    let valorFinalDaLista = novoValorNaLista + valorAtualDaLista;
    console.log("Valor atual da lista: " + valorAtualDaLista);
    console.log("Novo valor para colocar na lista: " + novoValorNaLista);
    console.log("Valor final da lista: " + valorFinalDaLista);
    elementoLista.innerHTML = valorFinalDaLista;
}