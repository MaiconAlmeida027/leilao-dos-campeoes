// js/modulos/ui.js

function atualizarPainelJogadores(){
    const lista = document.getElementById("listaJogadores");
    lista.innerHTML = "";

    jogadores.forEach(function(jogador){
        let totalContratados = 0;
        if(jogador.time.goleiro) totalContratados++;
        if(jogador.time.zagueiro) totalContratados++;
        totalContratados += jogador.time.meias.length;
        if(jogador.time.atacante) totalContratados++;

        const porcentagem = (totalContratados / 5) * 100;

        const div = document.createElement("div");
        div.className = "cardTime";

        div.innerHTML = `
            <div class="cardTime-header">
                <h3>👤 ${jogador.nome}</h3>
                <span class="badge-moedas">💰 ${jogador.saldo} moedas</span>
            </div>

            <div class="progresso-container">
                <div class="progresso-info">
                    <span>Elenco montado</span>
                    <strong>${totalContratados}/5</strong>
                </div>
                <div class="barra-fundo">
                    <div class="barra-preenchida" style="width: ${porcentagem}%;"></div>
                </div>
            </div>

            <div class="slots-posicoes">
                <div class="slot-item">
                    <span class="slot-label">🧤 Goleiro</span>
                    <span class="${jogador.time.goleiro ? 'slot-nome contratado' : 'slot-nome pendente'}">
                        ${jogador.time.goleiro ? jogador.time.goleiro.nome : 'Disponível'}
                    </span>
                </div>

                <div class="slot-item">
                    <span class="slot-label">🛡️ Zagueiro</span>
                    <span class="${jogador.time.zagueiro ? 'slot-nome contratado' : 'slot-nome pendente'}">
                        ${jogador.time.zagueiro ? jogador.time.zagueiro.nome : 'Disponível'}
                    </span>
                </div>

                <div class="slot-item">
                    <span class="slot-label">🎯 Meia 1</span>
                    <span class="${jogador.time.meias[0] ? 'slot-nome contratado' : 'slot-nome pendente'}">
                        ${jogador.time.meias[0] ? jogador.time.meias[0].nome : 'Disponível'}
                    </span>
                </div>

                <div class="slot-item">
                    <span class="slot-label">🎯 Meia 2</span>
                    <span class="${jogador.time.meias[1] ? 'slot-nome contratado' : 'slot-nome pendente'}">
                        ${jogador.time.meias[1] ? jogador.time.meias[1].nome : 'Disponível'}
                    </span>
                </div>

                <div class="slot-item">
                    <span class="slot-label">⚽ Atacante</span>
                    <span class="${jogador.time.atacante ? 'slot-nome contratado' : 'slot-nome pendente'}">
                        ${jogador.time.atacante ? jogador.time.atacante.nome : 'Disponível'}
                    </span>
                </div>
            </div>

            <button class="btn-selecionar-comprador" onclick="selecionarComprador('${jogador.nome}')">
                🎯 Selecionar para Compra
            </button>
        `;

        lista.appendChild(div);
    });
}

function selecionarComprador(nomeJogador){
    const inputComprador = document.getElementById("nomeComprador");
    inputComprador.value = nomeJogador;
    
    document.getElementById("nomeComprador").scrollIntoView({ behavior: "smooth" });
    document.getElementById("valorCompra").focus();
}