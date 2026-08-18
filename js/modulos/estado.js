// js/modulos/estado.js

const bancos = {
    brasileirao: brasileirao,
    champions: champions,
    copa2026: copa2026,
    lendas: lendas,
    bagres: bagres
};

let jogadores = [];
let atletaAtual = null;
let atletasDisponiveis = [];
let ligaSelecionada = "";

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