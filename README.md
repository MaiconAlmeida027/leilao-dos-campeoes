# 🏆 Leilão dos Campeões

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-success?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=for-the-badge&logo=github)

> Um jogo tático e estratégico para navegador onde os participantes disputam cartas de jogadores em um leilão dinâmico para montar a equipe titular dos sonhos (ou dos bagres).

🔗 **Acesse o jogo online:** [Leilão dos Campeões no GitHub Pages](https://maiconalmeida027.github.io/leilao-dos-campeoes/)

---

## 🎮 Sobre o Jogo

O **Leilão dos Campeões** coloca 2 ou 3 jogadores frente a frente em uma disputa acirrada de lances e estratégia financeira. Cada participante administra um saldo limitado de moedas e precisa preencher as 5 posições obrigatórias do esquema tático antes que o deck do leilão se esgote.

### 🌟 Principais Destaques
- **6 Ligas Disponíveis:** Brasileirão, Liga dos Campeões, Copa do Mundo 2026, Lendas do Futebol, Nostalgia Anos 2000 e a cômica Liga Pernas de Pau (Bagres).
- **Deck Tático Balanceado:** Toda partida conta com exatamente **20 cartas** sorteadas por proporção fixa (**4 Goleiros, 4 Zagueiros, 8 Meias e 4 Atacantes**).
- **Modo Inverso (Bagres):** Na liga de pernas de pau, a regra se inverte: o grande vencedor é aquele que terminar com a **menor** pontuação média.
- **Banco de Emergência:** Caso o leilão acabe e algum time fique incompleto, cartas de reposição com nota neutra são atribuídas automaticamente.

---

## 📊 Regras de Negócio e Mecânicas

| Regra | Descrição |
|---|---|
| **Formação Tática** | 1 Goleiro 🧤, 1 Zagueiro 🛡️, 2 Meias 🎯 e 1 Atacante ⚽ (5 titulares). |
| **Economia** | Cada jogador inicia com **20 moedas**. O lance máximo por carta é de 20 moedas. |
| **Pontuação Final** | **Média das notas dos 5 titulares** + **1 ponto extra para cada 5 moedas restantes**. |
| **Rejeição** | Cartas descartadas pelo botão "Ninguém Quer" são removidas permanentemente do campeonato. |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica em fluxo Single Page Application (SPA).
- **CSS3:** Pranchetas táticas, temas visuais, badges de posição e responsividade mobile.
- **JavaScript Moderno (ES6+):** Arquitetura modular de estado, manipulação de arrays e algoritmo de embaralhamento não-viesado (*Fisher-Yates*).
- **Git & GitHub:** Versionamento com commits convencionais e deploy automatizado via GitHub Pages.

---

## 📁 Estrutura do Projeto

```text
leilao-dos-campeoes/
├── css/
│   └── style.css            # Estilização visual e responsividade
├── docs/
│   └── REQUISITOS.md        # Documentação técnica e regras de negócio
├── js/
│   ├── atletas/             # Bancos de dados de atletas (56 cartas por liga)
│   │   ├── bagres.js
│   │   ├── brasileirao.js
│   │   ├── champions.js
│   │   ├── copa2026.js
│   │   ├── lendas.js
│   │   ├── nostalgia.js
│   │   └── reservas.js
│   ├── modulos/             # Módulos com separação de responsabilidades
│   │   ├── estado.js        # Estado global e fábrica de jogadores
│   │   ├── deck.js          # Sorteio e manipulação de cartas
│   │   ├── ui.js            # Renderização de pranchetas e status
│   │   └── pontuacao.js     # Validações de fim de jogo e ranking
│   └── script.js            # Controlador principal e eventos DOM
├── index.html               # Ponto de entrada da aplicação
└── README.md                # Apresentação do repositório


👨‍💻 Autor
Desenvolvido por Maicon Almeida

GitHub: @MaiconAlmeida027