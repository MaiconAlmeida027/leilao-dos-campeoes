// =====================================
// LEILÃO DOS CAMPEÕES
// SCRIPT PRINCIPAL
// =====================================

// =====================================
// BANCO DE DADOS UNIFICADO
// =====================================
const bancos = {
    brasileirao: brasileirao,
    champions: champions,
    copa2026: copa2026,
    lendas: lendas,
    bagres: bagres
};

// =====================================
// PARTE 1: Controle quantidade jogadores
// =====================================
const doisJogadores = document.getElementById("doisJogadores");
const tresJogadores = document.getElementById("tresJogadores");
const jogador3 = document.getElementById("jogador3");

doisJogadores.addEventListener("click", function(){
    jogador3.style.display = "none";
});

tresJogadores.addEventListener("click", function(){
    jogador3.style.display = "block";
});

// =====================================
// PARTE 2: Controle das telas
// =====================================
const telaInicial = document.getElementById("telaInicial");
const telaLeilao = document.getElementById("telaLeilao");
const telaResultado = document.getElementById("telaResultado");

// =====================================
// PARTE 3: Estado do jogo
// =====================================
let jogadores = [];
let atletaAtual = null;
let atletasDisponiveis = [];
let ligaSelecionada = "";

// =====================================
// PARTE 4: Criar jogador
// =====================================
function criarJogador(nome){
    return {
        nome: nome.trim(),
        saldo: 20,
        time: {
            goleiro: null,
            zagueiro: null,
            meias: [],
            atacante: null
        }
    };
}

// =====================================
// PARTE 5: Iniciar campeonato
// =====================================
const botaoIniciar = document.getElementById("iniciarJogo");

botaoIniciar.addEventListener("click", function(){
    const nome1 = document.getElementById("nomeJogador1").value.trim();
    const nome2 = document.getElementById("nomeJogador2").value.trim();
    const nome3 = document.getElementById("nomeJogador3").value.trim();

    if(nome1 === ""){
        alert("Digite o nome do Jogador 1");
        return;
    }

    if(nome2 === ""){
        alert("Digite o nome do Jogador 2");
        return;
    }

    if(tresJogadores.checked && nome3 === ""){
        alert("Digite o nome do Jogador 3");
        return;
    }

    let nomes = [nome1.toLowerCase(), nome2.toLowerCase()];
    if(tresJogadores.checked){
        nomes.push(nome3.toLowerCase());
    }

    let nomesUnicos = new Set(nomes);
    if(nomesUnicos.size !== nomes.length){
        alert("Os jogadores precisam ter nomes diferentes");
        return;
    }

    jogadores = [];
    jogadores.push(criarJogador(nome1));
    jogadores.push(criarJogador(nome2));

    if(tresJogadores.checked){
        jogadores.push(criarJogador(nome3));
    }

    // Grava a liga selecionada
    ligaSelecionada = document.getElementById("campeonato").value;
    atletasDisponiveis = [...bancos[ligaSelecionada]];

    telaInicial.style.display = "none";
    telaLeilao.style.display = "block";

    atualizarPainelJogadores();
    sortearAtleta();
});

// =====================================
// PARTE 6: Sortear atleta
// =====================================
function sortearAtleta(){
    if(atletasDisponiveis.length === 0){
        finalizarJogo();
        return;
    }

    const indice = Math.floor(Math.random() * atletasDisponiveis.length);
    atletaAtual = atletasDisponiveis[indice];

    document.getElementById("nomeAtleta").innerText = atletaAtual.nome;
    document.getElementById("posicaoAtleta").innerText = atletaAtual.posicao;
}

// =====================================
// PARTE 7: Comprar atleta
// =====================================
const confirmarCompra = document.getElementById("confirmarCompra");

confirmarCompra.addEventListener("click", function(){
    const nome = document.getElementById("nomeComprador").value.trim().toLowerCase();
    const valor = Number(document.getElementById("valorCompra").value);

    const jogador = jogadores.find(function(j){
        return j.nome.toLowerCase() === nome;
    });

    if(!jogador){
        alert("Jogador não encontrado");
        return;
    }

    if(valor <= 0){
        alert("Digite um valor válido");
        return;
    }

    if(jogador.saldo < valor){
        alert("Saldo insuficiente");
        return;
    }

    const posicao = atletaAtual.posicao.toLowerCase();

    if(posicao === "meia"){
        if(jogador.time.meias.length >= 2){
            alert("Você já possui 2 meias");
            return;
        }
    } else {
        if(jogador.time[posicao] !== null){
            alert("Você já possui essa posição");
            return;
        }
    }

    jogador.saldo -= valor;

    if(posicao === "meia"){
        jogador.time.meias.push(atletaAtual);
    } else {
        jogador.time[posicao] = atletaAtual;
    }

    atletasDisponiveis = atletasDisponiveis.filter(function(atleta){
        return atleta !== atletaAtual;
    });

    atualizarPainelJogadores();

    document.getElementById("nomeComprador").value = "";
    document.getElementById("valorCompra").value = "";

    // Rola suavemente até o topo da tela
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if(verificarFimDeJogo()){
        return;
    }

    sortearAtleta();
});

// =====================================
// PARTE 8: Ninguém quer
// =====================================
const botaoNinguem = document.getElementById("ninguem");

botaoNinguem.addEventListener("click", function(){
    atletasDisponiveis = atletasDisponiveis.filter(function(atleta){
        return atleta !== atletaAtual;
    });

    // Rola suavemente até o topo da tela
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    sortearAtleta();
});

// =====================================
// PARTE 9: Atualizar painel jogadores
// =====================================
function atualizarPainelJogadores(){
    const lista = document.getElementById("listaJogadores");
    lista.innerHTML = "";

    jogadores.forEach(function(jogador){
        const div = document.createElement("div");
        div.className = "cardTime";

        div.innerHTML = `
            <h3>👤 ${jogador.nome}</h3>
            <p>💰 Moedas: ${jogador.saldo}</p>
            <p>🧤 Goleiro: ${jogador.time.goleiro ? jogador.time.goleiro.nome : "Vazio"}</p>
            <p>🛡️ Zagueiro: ${jogador.time.zagueiro ? jogador.time.zagueiro.nome : "Vazio"}</p>
            <p>🎯 Meias: ${
                jogador.time.meias.length > 0
                    ? jogador.time.meias.map(m => m.nome).join(" - ")
                    : "Vazio"
            }</p>
            <p>⚽ Atacante: ${jogador.time.atacante ? jogador.time.atacante.nome : "Vazio"}</p>
        `;

        lista.appendChild(div);
    });
}

// =====================================
// PARTE 10: Verificar fim do campeonato
// =====================================
function verificarFimDeJogo(){
    const completo = jogadores.every(function(jogador){
        return (
            jogador.time.goleiro !== null &&
            jogador.time.zagueiro !== null &&
            jogador.time.meias.length >= 2 &&
            jogador.time.atacante !== null
        );
    });

    if(completo){
        finalizarJogo();
        return true;
    }

    return false;
}

// =====================================
// FUNÇÃO: Preencher posições vazias com reservas
// =====================================
function completarTimesComReservas(){
    const reservasDisponiveis = {
        goleiro: [...bancoReservas.goleiro],
        zagueiro: [...bancoReservas.zagueiro],
        meia: [...bancoReservas.meia],
        atacante: [...bancoReservas.atacante]
    };

    jogadores.forEach(function(jogador){
        if(!jogador.time.goleiro){
            jogador.time.goleiro = reservasDisponiveis.goleiro.shift() || { nome: "Goleiro Emergência", posicao: "Goleiro", nota: 50 };
        }

        if(!jogador.time.zagueiro){
            jogador.time.zagueiro = reservasDisponiveis.zagueiro.shift() || { nome: "Zagueiro Emergência", posicao: "Zagueiro", nota: 50 };
        }

        while(jogador.time.meias.length < 2){
            const reservaMeia = reservasDisponiveis.meia.shift() || { nome: "Meia Emergência", posicao: "Meia", nota: 50 };
            jogador.time.meias.push(reservaMeia);
        }

        if(!jogador.time.atacante){
            jogador.time.atacante = reservasDisponiveis.atacante.shift() || { nome: "Atacante Emergência", posicao: "Atacante", nota: 50 };
        }
    });
}

// =====================================
// PARTE 11: Finalizar jogo atualizada
// =====================================
function finalizarJogo(){
    completarTimesComReservas();

    telaLeilao.style.display = "none";
    telaResultado.style.display = "block";

    mostrarResultado();
}

// =====================================
// PARTE 12: Calcular pontuação com segurança
// =====================================
function calcularPontuacao(jogador){
    let pontos = 0;

    if(jogador.time.goleiro) pontos += jogador.time.goleiro.nota;
    if(jogador.time.zagueiro) pontos += jogador.time.zagueiro.nota;

    jogador.time.meias.forEach(function(meia){
        if(meia) pontos += meia.nota;
    });

    if(jogador.time.atacante) pontos += jogador.time.atacante.nota;

    return pontos;
}

// =====================================
// PARTE 13: Mostrar resultado (Modo Bagre vs Normal)
// =====================================
function mostrarResultado(){
    const rankingFinal = document.getElementById("rankingFinal");
    rankingFinal.innerHTML = "";

    const modoBagre = (ligaSelecionada === "bagres");

    let ranking = [];

    jogadores.forEach(function(jogador){
        ranking.push({
            nome: jogador.nome,
            pontos: calcularPontuacao(jogador),
            jogador: jogador
        });
    });

    ranking.sort(function(a, b){
        return modoBagre ? (a.pontos - b.pontos) : (b.pontos - a.pontos);
    });

    ranking.forEach(function(item, index){
        const div = document.createElement("div");
        div.className = "cardResultado";

        let colocacao = "";
        if(index === 0) colocacao = modoBagre ? "🥇 PIOR TIME (CAMPEÃO DO BAGRE)" : "🥇 CAMPEÃO";
        else if(index === 1) colocacao = "🥈 VICE CAMPEÃO";
        else if(index === 2) colocacao = "🥉 TERCEIRO LUGAR";

        const jogador = item.jogador;

        div.innerHTML = `
            <h2>${colocacao}</h2>
            <h3>👤 ${jogador.nome} FC</h3>
            <p>⭐ Pontuação Total: ${item.pontos} pontos</p>
            <p>💰 Moedas restantes: ${jogador.saldo}</p>
            <hr>
            <p>🧤 Goleiro: ${jogador.time.goleiro ? jogador.time.goleiro.nome : "Sem goleiro"}</p>
            <p>🛡️ Zagueiro: ${jogador.time.zagueiro ? jogador.time.zagueiro.nome : "Sem zagueiro"}</p>
            <p>🎯 Meias: ${
                jogador.time.meias.length > 0 
                    ? jogador.time.meias.map(m => m.nome).join(" - ") 
                    : "Sem meias"
            }</p>
            <p>⚽ Atacante: ${jogador.time.atacante ? jogador.time.atacante.nome : "Sem atacante"}</p>
        `;

        rankingFinal.appendChild(div);
    });

    mostrarCampeao(ranking, modoBagre);
}

// =====================================
// PARTE 14: Mostrar campeão
// =====================================
function mostrarCampeao(ranking, modoBagre){
    const campeao = ranking[0];
    const area = document.getElementById("campeaoFinal");

    const titulo = modoBagre ? "🩼 MAIOR BAGRE DO LEILÃO" : "🏆 CAMPEÃO DO LEILÃO";

    area.innerHTML = `
        <div class="campeao">
            <h1>${titulo}</h1>
            <h2>${campeao.nome} FC</h2>
            <h3>⭐ ${campeao.pontos} pontos</h3>
        </div>
    `;
}

// =====================================
// PARTE 15: Botão Novo Campeonato
// =====================================
const botaoNovoCampeonato = document.getElementById("novoCampeonato");
if(botaoNovoCampeonato){
    botaoNovoCampeonato.addEventListener("click", function(){
        telaResultado.style.display = "none";
        telaInicial.style.display = "block";
    });
}