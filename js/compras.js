// Recupera a lista de compras do localStorage ou inicializa como array vazio
let compras =  JSON.parse(localStorage.getItem("compras")) || [];

// Função para adicionar itens à lista de compras
function comprar(){
    let continuar = true;

    // Loop para permitir adicionar múltiplos itens
    while(continuar){
        // Solicita ao usuário o nome do item
        let item = prompt("Digite um item:");

        // Se o item não for vazio, adiciona à lista
        if(item && item.trim() !== ""){
            compras.push(item.trim());
        }

        // Pergunta se deseja adicionar outro item
        let resposta = prompt("Adicionar outro item? (s/n)");
        // Se a resposta não for 's', encerra o loop
        if(!resposta || resposta.toLowerCase() !== "s") continuar = false;
    }
    // Salva a lista atualizada no localStorage
    localStorage.setItem("compras", JSON.stringify(compras));
}

// Função para atualizar a lista de compras na página
function atualizarLista(){
    const lista = document.getElementById("listaCompras");
    lista.innerHTML = "";
    // Para cada item, cria um elemento <li> e adiciona à lista
    compras.forEach((item, i) => {
        const li = document.createElement("li");
        li.textContent = `${i + 1}. ${item}`;
        lista.appendChild(li);
    });
       
}

function limparLista() {
    // Limpa a lista de compras e remove do localStorage
    compras = [];
    localStorage.removeItem("compras");
    atualizarLista();
}
window.addEventListener("DOMContentLoaded", atualizarLista);