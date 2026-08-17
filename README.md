# ⚽ Leilão dos Campeões

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?style=for-the-badge&logo=github)](https://maiconalmeida027.github.io/leilao-dos-campeoes/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

> Jogo interativo de estratégia e leilão de cartas de futebol desenvolvido para consolidar lógica de programação, manipulação do DOM e desenvolvimento web responsivo.

---

## 🎯 Sobre o Projeto

O **Leilão dos Campeões** coloca 2 ou 3 participantes para disputar cartas de atletas em um sistema de lances com saldo limitado de moedas. O objetivo é gerenciar o orçamento e preencher todas as posições táticas (Goleiro, Zagueiro, 2 Meias e Atacante) para alcançar a maior pontuação — ou a menor, caso você encare o desafio da Liga Bagres!

🌐 **Jogue agora:** [https://maiconalmeida027.github.io/leilao-dos-campeoes/](https://maiconalmeida027.github.io/leilao-dos-campeoes/)

---

## 🕹️ Funcionalidades (MVP 1.1)

- 👥 **Controle de Participantes:** Suporte para 2 ou 3 jogadores com validação de nomes únicos.
- 🏟️ **Múltiplos Campeonatos:**
  - ⚽ Brasileirão
  - 🏆 Liga dos Campeões
  - 🌎 Copa do Mundo 2026
  - 👑 Liga Lendas do Futebol
  - 🩼 **Liga Pernas de Pau (Modo Inverso):** Vitória concedida ao time de pior pontuação total.
- 🃏 **Sistema de Leilão com Mistério:** As notas dos atletas ficam ocultas durante os lances e são reveladas apenas no apito final.
- 📋 **Prancheta Tática & UI:** 
  - Visual moderno no estilo Dark/Gold inspirado em cards de futebol.
  - Barra de progresso do elenco montado (ex: `3/5`).
  - Badges com status de cada posição (`Contratado` ou `Disponível`).
  - Botão de seleção rápida do comprador direto pelo card.
  - Rolagem suave automática ao registrar lances no mobile.
- 🚑 **Banco de Reservas de Emergência:** Preenchimento automático com atletas folclóricos caso os sorteios acabem sem completar o elenco.
- 🏆 **Ranking & Pódio Final:** Cálculo seguro das notas e tela de celebração do campeão.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica por seções.
- **CSS3:** Variáveis CSS (`:root`), Flexbox, CSS Grid e design responsivo (Mobile-first).
- **JavaScript (Vanilla ES6+):** Manipulação dinâmica do DOM, controle de fluxo de estados, métodos de array (`filter`, `map`, `every`, `sort`, `shift`) e spread operator.
- **Git & GitHub:** Versionamento contínuo e deploy automatizado via GitHub Pages.

---

## 📂 Estrutura do Projeto

```text
leilao-dos-campeoes/
├── css/
│   └── style.css            # Estilização completa e responsiva (Tema Dark/Gold)
├── js/
│   ├── atletas/
│   │   ├── bagres.js        # Elenco do modo inverso
│   │   ├── brasileirao.js   # Elenco do Campeonato Brasileiro
│   │   ├── champions.js     # Elenco da Champions League
│   │   ├── copa2026.js      # Elenco da Copa do Mundo
│   │   ├── lendas.js        # Elenco das Lendas
│   │   └── reservas.js      # Banco de reservas para emergências
│   └── script.js            # Lógica do jogo e manipulação do DOM
├── CHANGELOG.md             # Histórico de versões e marcos
├── index.html               # Estrutura principal da aplicação
└── README.md                # Documentação do projeto

📌 Próximos Passos (Roadmap)
[ ] Modularização do JavaScript (ES Modules).

[ ] Transições e efeitos visuais animados na revelação das cartas.

[ ] Criação de Back-end com Node.js e Express.

[ ] Implementação de partidas multiplayer em tempo real com WebSockets (Socket.io).

👨‍💻 Autor
Desenvolvido por Maicon Almeida