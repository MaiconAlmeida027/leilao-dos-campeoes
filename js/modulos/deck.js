// js/modulos/deck.js

// RN-01: Atualiza contador total e por posição
function atualizarContadorDeck(){
    const totalElemento = document.getElementById("totalDeck");
    const containerPosicoes = document.getElementById("contadorDeckPosicoes");

    if(!totalElemento || !containerPosicoes) return;

    totalElemento.innerText = atletasDisponiveis.length;

    const contagem = {
        goleiro: 0,
        zagueiro: 0,
        meia: 0,
        atacante: 0
    };

    atletasDisponiveis.forEach(function(atleta){
        const pos = atleta.posicao.toLowerCase();
        if(contagem[pos] !== undefined){
            contagem[pos]++;
        }
    });

    containerPosicoes.innerHTML = `
        <div class="mini-badge-posicao ${contagem.goleiro === 0 ? 'esgotado' : ''}">
            <span>🧤 Goleiros</span>
            <strong>${contagem.goleiro}</strong>
        </div>
        <div class="mini-badge-posicao ${contagem.zagueiro === 0 ? 'esgotado' : ''}">
            <span>🛡️ Zagueiros</span>
            <strong>${contagem.zagueiro}</strong>
        </div>
        <div class="mini-badge-posicao ${contagem.meia === 0 ? 'esgotado' : ''}">
            <span>🎯 Meias</span>
            <strong>${contagem.meia}</strong>
        </div>
        <div class="mini-badge-posicao ${contagem.atacante === 0 ? 'esgotado' : ''}">
            <span>⚽ Atacantes</span>
            <strong>${contagem.atacante}</strong>
        </div>
    `;
}

// RN-02: Expurga cartas de posições que todos os times fecharam
function expurgarPosicoesEsgotadas(){
    const todosTemGoleiro = jogadores.every(j => j.time.goleiro !== null);
    const todosTemZagueiro = jogadores.every(j => j.time.zagueiro !== null);
    const todosTemMeias = jogadores.every(j => j.time.meias.length >= 2);
    const todosTemAtacante = jogadores.every(j => j.time.atacante !== null);

    atletasDisponiveis = atletasDisponiveis.filter(function(atleta){
        const pos = atleta.posicao.toLowerCase();
        if(pos === "goleiro" && todosTemGoleiro) return false;
        if(pos === "zagueiro" && todosTemZagueiro) return false;
        if(pos === "meia" && todosTemMeias) return false;
        if(pos === "atacante" && todosTemAtacante) return false;
        return true;
    });
}

function sortearAtleta(){
    expurgarPosicoesEsgotadas();
    atualizarContadorDeck();

    if(atletasDisponiveis.length === 0){
        finalizarJogo();
        return;
    }

    const indice = Math.floor(Math.random() * atletasDisponiveis.length);
    atletaAtual = atletasDisponiveis[indice];

    document.getElementById("nomeAtleta").innerText = atletaAtual.nome;
    document.getElementById("posicaoAtleta").innerText = atletaAtual.posicao;
}