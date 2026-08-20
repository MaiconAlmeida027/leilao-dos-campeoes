// ==================================================
// LEILÃO DOS CAMPEÕES - CONTROLADOR PRINCIPAL
// js/script.js
// ==================================================

// Alternar exibição do Jogador 3
const doisJogadores = document.getElementById("doisJogadores");
const tresJogadores = document.getElementById("tresJogadores");
const jogador3 = document.getElementById("jogador3");

doisJogadores.addEventListener("click", function(){
    jogador3.style.display = "none";
});

tresJogadores.addEventListener("click", function(){
    jogador3.style.display = "block";
});

// Nomes amigáveis para exibição no cabeçalho
const nomesLigas = {
    brasileirao: "BRASILEIRÃO",
    champions: "LIGA DOS CAMPEÕES",
    copa2026: "COPA DO MUNDO 2026",
    lendas: "LENDAS DO FUTEBOL",
    nostalgia: "NOSTALGIA ANOS 2000",
    premier_league: "PREMIER LEAGUE",
    bagres: "LIGA PERNAS DE PAU"
};

// Função auxiliar para embaralhar qualquer array (Fisher-Yates)
function embaralharArray(lista) {
    let copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

// Iniciar Campeonato
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

    ligaSelecionada = document.getElementById("campeonato").value;

    const baseLiga = bancos[ligaSelecionada];
    if (!baseLiga || !Array.isArray(baseLiga)) {
        alert("Erro: Liga selecionada não foi carregada corretamente.");
        console.error("Liga inválida:", ligaSelecionada, "Bancos:", bancos);
        return;
    }

    // Atualiza o título dinâmico da tela do leilão
    const tituloLigaAtiva = document.getElementById("tituloLigaAtiva");
    if (tituloLigaAtiva) {
        tituloLigaAtiva.innerText = nomesLigas[ligaSelecionada] || "CAMPEONATO";
    }

    // 1. Separa o banco por posições
    const goleiros = baseLiga.filter(a => a.posicao.toLowerCase() === "goleiro");
    const zagueiros = baseLiga.filter(a => a.posicao.toLowerCase() === "zagueiro");
    const meias = baseLiga.filter(a => a.posicao.toLowerCase() === "meia");
    const atacantes = baseLiga.filter(a => a.posicao.toLowerCase() === "atacante");

    // 2. Embaralha cada posição e pega a cota exata (4 Goleiros, 4 Zagueiros, 8 Meias, 4 Atacantes)
    const deckGoleiros = embaralharArray(goleiros).slice(0, 4);
    const deckZagueiros = embaralharArray(zagueiros).slice(0, 4);
    const deckMeias = embaralharArray(meias).slice(0, 8);
    const deckAtacantes = embaralharArray(atacantes).slice(0, 4);

    // 3. Junta as 20 cartas e embaralha a ordem final do leilão
    const deckFinal20 = [
        ...deckGoleiros,
        ...deckZagueiros,
        ...deckMeias,
        ...deckAtacantes
    ];

    atletasDisponiveis = embaralharArray(deckFinal20);

    telaInicial.style.display = "none";
    telaLeilao.style.display = "block";

    atualizarPainelJogadores();
    sortearAtleta();
});

// Confirmar Compra
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

    if(valor <= 0 || isNaN(valor)){
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

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if(verificarFimDeJogo()){
        return;
    }

    sortearAtleta();
});

// Botão Ninguém Quer
const botaoNinguem = document.getElementById("ninguem");

botaoNinguem.addEventListener("click", function(){
    atletasDisponiveis = atletasDisponiveis.filter(function(atleta){
        return atleta !== atletaAtual;
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    sortearAtleta();
});

// Botão Novo Campeonato
const botaoNovoCampeonato = document.getElementById("novoCampeonato");
if(botaoNovoCampeonato){
    botaoNovoCampeonato.addEventListener("click", function(){
        telaResultado.style.display = "none";
        telaInicial.style.display = "block";
    });
}