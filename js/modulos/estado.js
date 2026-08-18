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
    brasileirao: brasileirao,
    champions: champions,
    copa2026: copa2026,
    lendas: lendas,
    nostalgia: nostalgia,
    bagres: bagres
};

// Fábrica de Objeto Jogador (Estrutura Tática 1-1-2-1)
function criarJogador(nome){
    return {
        nome: nome,
        saldo: 100,
        time: {
            goleiro: null,
            zagueiro: null,
            meias: [],
            atacante: null
        }
    };
}