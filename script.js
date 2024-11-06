// Altera o texto do parágrafo inicial
function alterarTexto() {
    document.getElementById("text").innerText = "Ao clicar, eu mudei!!";
}

// Adiciona um novo parágrafo ao final do corpo
function adicionarParagrafo() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "depois que você clicou, eu apareci  !!";
    document.body.appendChild(novoParagrafo);
}

// Remove o último parágrafo, se houver mais de um 
function removerParagrafo() {
    const paragrafos = document.querySelectorAll("p");
    if (paragrafos.length > 1) {
        paragrafos[paragrafos.length - 1].remove();
    } else {
        alert("Não há mais parágrafos para remover  !!");
    }
}

//Muda a cor de fundo da página para uma cor aleatória
function mudarCorFundo() {
    const corAleatoria = 
}