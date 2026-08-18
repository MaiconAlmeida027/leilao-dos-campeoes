// ==================================================
// BANCO DE DADOS: LIGA PERNAS DE PAU (BAGRES & FOLCLORE)
// js/atletas/bagres.js
// ==================================================

const bagres = [
    // 🧤 GOLEIROS (12)
    { nome: "Muralha (Pula pro mesmo lado)", posicao: "Goleiro", nota: 42 },
    { nome: "Denis (Braço de Jacaré)", posicao: "Goleiro", nota: 40 },
    { nome: "Lucão da Colina", posicao: "Goleiro", nota: 38 },
    { nome: "Felipe Alves (Adiantado)", posicao: "Goleiro", nota: 45 },
    { nome: "Deola (Rei do Frango)", posicao: "Goleiro", nota: 39 },
    { nome: "Loris Karius (Modo Final 2018)", posicao: "Goleiro", nota: 35 },
    { nome: "Bruno Grassi (Gol Fantasma)", posicao: "Goleiro", nota: 37 },
    { nome: "Jandrei (Saída em Falso)", posicao: "Goleiro", nota: 44 },
    { nome: "Tiago Volpi (Rei dos Pênaltis Contra)", posicao: "Goleiro", nota: 46 },
    { nome: "Paulo Victor (Espalma pra Dentro)", posicao: "Goleiro", nota: 43 },
    { nome: "Renan Rocha (Vistas Grossas)", posicao: "Goleiro", nota: 36 },
    { nome: "Goleiro do Interclasse", posicao: "Goleiro", nota: 30 },

    // 🛡️ ZAGUEIROS (12)
    { nome: "Lucão (Gol Contra Clássico)", posicao: "Zagueiro", nota: 38 },
    { nome: "Márcio Araújo (Improvisado na Zaga)", posicao: "Zagueiro", nota: 42 },
    { nome: "Bressan (Pênalti em Semifinal)", posicao: "Zagueiro", nota: 36 },
    { nome: "Harry Maguire (Meme da Premier)", posicao: "Zagueiro", nota: 48 },
    { nome: "Werley (Quebra Canela)", posicao: "Zagueiro", nota: 40 },
    { nome: "Jéci (Pixotada Garantida)", posicao: "Zagueiro", nota: 35 },
    { nome: "Zelão (Driblado pelo Vento)", posicao: "Zagueiro", nota: 39 },
    { nome: "Paulão Desmaio", posicao: "Zagueiro", nota: 41 },
    { nome: "Gladstone (Avenida Livre)", posicao: "Zagueiro", nota: 37 },
    { nome: "Domingos (Falta Tática Voadora)", posicao: "Zagueiro", nota: 43 },
    { nome: "Edcarlos (Tropeço na Bola)", posicao: "Zagueiro", nota: 40 },
    { nome: "Chicão do Sintético", posicao: "Zagueiro", nota: 32 },

    // 🎯 MEIAS (20)
    { nome: "Luan Menino de Condomínio", posicao: "Meia", nota: 46 },
    { nome: "Lucas Lima (Dormindo no Campo)", posicao: "Meia", nota: 48 },
    { nome: "Carlos Alberto (Caneta do Arrasca)", posicao: "Meia", nota: 47 },
    { nome: "Ganso (Modo 0.5x)", posicao: "Meia", nota: 49 },
    { nome: "Willian Farias (Só Toca de Lado)", posicao: "Meia", nota: 41 },
    { nome: "Fellipe Bastos (Bate Falta na Lua)", posicao: "Meia", nota: 43 },
    { nome: "Rômulo (Trote Elegante)", posicao: "Meia", nota: 40 },
    { nome: "Marlos Moreno (Gira e Não Sai do Lugar)", posicao: "Meia", nota: 44 },
    { nome: "Gabriel Girotto (Cartão Amarelo aos 5 min)", posicao: "Meia", nota: 42 },
    { nome: "Ibson (Toque de Calcanhar Errado)", posicao: "Meia", nota: 45 },
    { nome: "Canteros (Perdido no Meio)", posicao: "Meia", nota: 39 },
    { nome: "Richarlyson (Comentando o Jogo)", posicao: "Meia", nota: 44 },
    { nome: "Marquinhos Gabriel (Pede a Bola e Some)", posicao: "Meia", nota: 43 },
    { nome: "Ramiro (Volante Ponta Falsa)", posicao: "Meia", nota: 45 },
    { nome: "Maicon Feijoada (Sem Ritmo)", posicao: "Meia", nota: 41 },
    { nome: "Alisson (Volante Recuador de Bola)", posicao: "Meia", nota: 44 },
    { nome: "Toró (Chute sem Direção)", posicao: "Meia", nota: 38 },
    { nome: "Valdívia PokoPikeno", posicao: "Meia", nota: 42 },
    { nome: "Cícero (Passo de Tartaruga)", posicao: "Meia", nota: 43 },
    { nome: "Tchê Tchê (Perninha e Mascaradinho)", posicao: "Meia", nota: 46 },

    // ⚽ ATACANTES (12)
    { nome: "Deyverson (Piscadinha e Expulsão)", posicao: "Atacante", nota: 50 },
    { nome: "Ribamar (Hoje Tem Gol do... Não Tem)", posicao: "Atacante", nota: 42 },
    { nome: "Pablo (O Milionário do Chute Torto)", posicao: "Atacante", nota: 44 },
    { nome: "Borja (O Erro de 40 Milhões)", posicao: "Atacante", nota: 45 },
    { nome: "Negreiros (O Inesquecível)", posicao: "Atacante", nota: 33 },
    { nome: "Souza Caveirão (Sem Freio)", posicao: "Atacante", nota: 40 },
    { nome: "Keirrison (Sumiu na Europa)", posicao: "Atacante", nota: 41 },
    { nome: "Clodoaldo Matador de Pombo", posicao: "Atacante", nota: 38 },
    { nome: "Bill (Gol Sem Querer)", posicao: "Atacante", nota: 42 },
    { nome: "Kieza (Perde Gol sem Goleiro)", posicao: "Atacante", nota: 43 },
    { nome: "Biro-Biro do Terrão", posicao: "Atacante", nota: 36 },
    { nome: "Wellington Paulista (Rei do Impedimento)", posicao: "Atacante", nota: 46 }
];