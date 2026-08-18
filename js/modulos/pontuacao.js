// js/modulos/pontuacao.js

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

function obterMelhorNotaAtleta(jogador){
    const notas = [];
    if(jogador.time.goleiro) notas.push(jogador.time.goleiro.nota);
    if(jogador.time.zagueiro) notas.push(jogador.time.zagueiro.nota);
    jogador.time.meias.forEach(m => { if(m) notas.push(m.nota); });
    if(jogador.time.atacante) notas.push(jogador.time.atacante.nota);

    return notas.length > 0 ? Math.max(...notas) : 0;
}

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

function finalizarJogo(){
    completarTimesComReservas();
    telaLeilao.style.display = "none";
    telaResultado.style.display = "block";
    mostrarResultado();
}

function mostrarResultado(){
    const rankingFinal = document.getElementById("rankingFinal");
    rankingFinal.innerHTML = "";

    const modoBagre = (ligaSelecionada === "bagres");

    let ranking = [];

    jogadores.forEach(function(jogador){
        ranking.push({
            nome: jogador.nome,
            pontos: calcularPontuacao(jogador),
            saldo: jogador.saldo,
            melhorNota: obterMelhorNotaAtleta(jogador),
            jogador: jogador
        });
    });

    ranking.sort(function(a, b){
        if(modoBagre){
            if(a.pontos !== b.pontos) return a.pontos - b.pontos;
            if(a.saldo !== b.saldo) return a.saldo - b.saldo;
            return a.melhorNota - b.melhorNota;
        } else {
            if(a.pontos !== b.pontos) return b.pontos - a.pontos;
            if(a.saldo !== b.saldo) return b.saldo - a.saldo;
            return b.melhorNota - a.melhorNota;
        }
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
            <p class="desempate-detalhe">🌟 Melhor carta individual: ${item.melhorNota} pts (critério de desempate)</p>
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