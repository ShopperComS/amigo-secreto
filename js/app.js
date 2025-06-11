let nomes = [];

function adicionar() {




    let nome = document.getElementById('nome-amigo').value;

    if (nome !== "" && !nomes.includes(nome)) {
        nomes.push(nome);
        atualizarListaVisual();
        console.log(nomes);
    } else {
        alert("Nome vazio ou já adicionado.");
    }

    document.getElementById('nome-amigo').value = "";  // Limpa o input
}

function reiniciar() {
    nomes = [];

    // Limpa a visualização da lista de nomes
    listaVisual.innerHTML = `<p id="lista-amigos"></p>`;

    // Limpa o resultado do sorteio
    document.getElementById("lista-sorteio").innerHTML = "";

    // Limpa o campo de entrada (opcional)
    document.getElementById("nome-amigo").value = "";

    console.log(nomes);
    console.log('A lista foi completamente reiniciada!');
}



function atualizarListaVisual() {
    listaVisual.innerHTML = `<p id="lista-amigos"> ${nomes.join(", ")} </p>`;
}

function sortear() {
        if (nomes.length < 4 ) {
        alert('Adicione pelo menos 4 amigos!');
        return;

    }


    if (nomes.length < 2) {
        alert("Adicione pelo menos 2 nomes para sortear.");
        return;
    }

    let sorteio = {};
    let sorteados = [...nomes];

    // Embaralhar os nomes sorteados
    sorteados.sort(() => Math.random() - 0.5);

    // Verifica se alguém tirou a si mesmo
    let tentativaSegura = false;

    for (let tentativas = 0; tentativas < 100; tentativas++) {
        tentativaSegura = true;
        sorteados.sort(() => Math.random() - 0.5); // Embaralha de novo

        for (let i = 0; i < nomes.length; i++) {
            if (nomes[i] === sorteados[i]) {
                tentativaSegura = false;
                break;
            }
        }

        if (tentativaSegura) break;
    }

    if (!tentativaSegura) {
        alert("Não foi possível sortear sem repetições. Tente novamente.");
        return;
    }

    // Criar os pares de amigo secreto
    let resultado = "";

    for (let i = 0; i < nomes.length; i++) {
        sorteio[nomes[i]] = sorteados[i];
        resultado += `<p>${nomes[i]} ➡️ ${sorteados[i]}</p>`;
    }

    // Mostrar na tela
    document.getElementById("lista-sorteio").innerHTML = resultado;
    console.log(sorteio);
}


