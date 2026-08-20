// ==================================================
// LEILÃO DOS CAMPEÕES - ESTADO GLOBAL
// js/modulos/estado.js
// ==================================================

// Elementos da Interface (Telas)
const telaInicial = document.getElementById("telaInicial");
const telaLeilao = document.getElementById("telaLeilao");
const telaResultado = document.getElementById("telaResultado");

// Variáveis de Estado da Partida
let jogadores = [];
let ligaSelecionada = "";
let atletasDisponiveis = [];
let atletaAtual = null;

// Mapeamento dos Bancos de Dados
const bancos = {
    brasileirao: typeof brasileirao !== "undefined" ? brasileirao : [],
    champions: typeof champions !== "undefined" ? champions : [],
    copa2026: typeof copa2026 !== "undefined" ? copa2026 : [],
    lendas: typeof lendas !== "undefined" ? lendas : [],
    nostalgia: typeof nostalgia !== "undefined" ? nostalgia : [],
    premier_league: typeof premier_league !== "undefined" ? premier_league : [],
    bagres: typeof bagres !== "undefined" ? bagres : []
};

// Fábrica de Objeto Jogador (Saldo Inicial: 20 moedas)
function criarJogador(nome){
    return {
        nome: nome,
        saldo: 20, // 👈 Definido em exatamente 20 moedas
        time: {
            goleiro: null,
            zagueiro: null,
            meias: [],
            atacante: null
        }
    };
}