// js/script.js

// Controles de Telas e Jogador 3
const doisJogadores = document.getElementById("doisJogadores");
const tresJogadores = document.getElementById("tresJogadores");
const jogador3 = document.getElementById("jogador3");

doisJogadores.addEventListener("click", function(){
    jogador3.style.display = "none";
});

tresJogadores.addEventListener("click", function(){
    jogador3.style.display = "block";
});

// Iniciar Jogo
const botaoIniciar = document.getElementById("iniciarJogo");
botaoIniciar.addEventListener("click", function(){
    const nome1 = document.getElementById("nomeJogador1").value.trim();
    const nome2 = document.getElementById("nomeJogador2").value.trim();
    const nome3 = document.getElementById("nomeJogador3").value.trim();

    if(nome1 === ""){ alert("Digite o nome do Jogador 1"); return; }
    if(nome2 === ""){ alert("Digite o nome do Jogador 2"); return; }
    if(tresJogadores.checked && nome3 === ""){ alert("Digite o nome do Jogador 3"); return; }

    let nomes = [nome1.toLowerCase(), nome2.toLowerCase()];
    if(tresJogadores.checked){ nomes.push(nome3.toLowerCase()); }

    let nomesUnicos = new Set(nomes);
    if(nomesUnicos.size !== nomes.length){
        alert("Os jogadores precisam ter nomes diferentes");
        return;
    }

    jogadores = [];
    jogadores.push(criarJogador(nome1));
    jogadores.push(criarJogador(nome2));
    if(tresJogadores.checked){ jogadores.push(criarJogador(nome3)); }

    ligaSelecionada = document.getElementById("campeonato").value;
    atletasDisponiveis = [...bancos[ligaSelecionada]];

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

    const jogador = jogadores.find(j => j.nome.toLowerCase() === nome);

    if(!jogador){ alert("Jogador não encontrado"); return; }
    if(valor <= 0 || isNaN(valor)){ alert("Digite um valor válido de moedas"); return; }
    if(jogador.saldo < valor){ alert("Saldo insuficiente"); return; }

    const posicao = atletaAtual.posicao.toLowerCase();

    if(posicao === "meia"){
        if(jogador.time.meias.length >= 2){ alert("Você já possui 2 meias"); return; }
    } else {
        if(jogador.time[posicao] !== null){ alert("Você já possui essa posição"); return; }
    }

    jogador.saldo -= valor;

    if(posicao === "meia"){
        jogador.time.meias.push(atletaAtual);
    } else {
        jogador.time[posicao] = atletaAtual;
    }

    atletasDisponiveis = atletasDisponiveis.filter(a => a !== atletaAtual);

    atualizarPainelJogadores();
    document.getElementById("nomeComprador").value = "";
    document.getElementById("valorCompra").value = "";

    window.scrollTo({ top: 0, behavior: "smooth" });

    if(verificarFimDeJogo()){ return; }

    sortearAtleta();
});

// Ninguém Quer
const botaoNinguem = document.getElementById("ninguem");
botaoNinguem.addEventListener("click", function(){
    atletasDisponiveis = atletasDisponiveis.filter(a => a !== atletaAtual);
    window.scrollTo({ top: 0, behavior: "smooth" });
    sortearAtleta();
});

// Novo Campeonato
const botaoNovoCampeonato = document.getElementById("novoCampeonato");
if(botaoNovoCampeonato){
    botaoNovoCampeonato.addEventListener("click", function(){
        telaResultado.style.display = "none";
        telaInicial.style.display = "block";
    });
}