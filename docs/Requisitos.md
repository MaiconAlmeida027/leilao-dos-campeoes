# 📋 Documento de Especificação e Requisitos de Software (SRS)

## 📌 Projeto: Leilão dos Campeões
**Versão:** 1.4.0 (MVP 1.0 - Single Page Client-Side)  
**Status:** Concluído / Em Produção  
**Repositório:** [Leilão dos Campeões - GitHub] https://maiconalmeida027.github.io/leilao-dos-campeoes/

---

## 1. Visão Geral do Sistema
O **Leilão dos Campeões** é um jogo tático e estratégico para navegador onde 2 ou 3 participantes competem através de um leilão de cartas de futebol. O objetivo é montar o elenco mais forte (ou mais cômico, no caso do modo inverso) gerenciando um saldo finito de moedas e preenchendo as 5 posições obrigatórias do esquema tático.

---

## 2. Regras de Negócio (RN)

| ID | Regra de Negócio | Descrição |
|---|---|---|
| **RN-01** | **Distribuição Proporcional do Deck** | Todo leilão inicia com exatamente **20 cartas**, distribuídas obrigatoriamente na proporção tática: **4 Goleiros, 4 Zagueiros, 8 Meias e 4 Atacantes**. O sorteio inicial embaralha cada categoria separadamente antes de consolidar o monte final. |
| **RN-02** | **Economia e Saldo Fixo** | Cada participante inicia o campeonato com exatamente **20 moedas**. O valor do lance não pode exceder o saldo atual do jogador nem ultrapassar o teto de **20 moedas**. |
| **RN-03** | **Esquema Tático Obrigatório** | Cada equipe possui 5 vagas titulares: **1 Goleiro, 1 Zagueiro, 2 Meias e 1 Atacante**. Um jogador não pode arrematar atletas para posições já preenchidas. |
| **RN-04** | **Rejeição de Cartas (Ninguém Quer)** | Caso nenhum participante deseje arrematar a carta da rodada, a mesma é descartada definitivamente da partida. |
| **RN-05** | **Critério de Encerramento** | A partida encerra quando: (a) Todos os participantes completarem seus 5 titulares; ou (b) O deck de 20 cartas esgotar. |
| **RN-06** | **Banco de Reservas de Emergência** | Se o deck esgotar e algum participante ficar com posições vazias, o sistema preenche automaticamente com cartas de nota neutra (50 pontos no padrão ou 100 pontos no modo inverso) custando 0 moedas. |
| **RN-07** | **Cálculo da Pontuação Final** | A pontuação final é a **média aritmética das notas dos 5 titulares** somada a um bônus residual de **+1 ponto por cada 5 moedas economizadas**. |
| **RN-08** | **Condição de Vitória e Modo Inverso** | Nas ligas convencionais, vence a equipe com maior pontuação final. Na **Liga Pernas de Pau (Modo Inverso)**, vence a equipe que atingir a **menor** pontuação média. |

---

## 3. Requisitos Funcionais (RF)

- **[RF-01] Seleção de Ligas:** O sistema deve permitir a escolha entre 6 bases de dados temáticas:
  1. Brasileirão
  2. Liga dos Campeões
  3. Copa do Mundo 2026
  4. Lendas do Futebol
  5. ⏳ Nostalgia Anos 2000
  6. 🤡 Liga Pernas de Pau (Bagres)
- **[RF-02] Configuração de Participantes:** Permitir partidas entre 2 ou 3 jogadores, validando nomes obrigatórios e impedindo nomes duplicados.
- **[RF-03] Painel de Status em Tempo Real:** Exibir no cabeçalho o nome da liga ativa e o contador de cartas restantes no leilão detalhado por posição (Goleiros, Zagueiros, Meias e Atacantes).
- **[RF-04] Prancheta Visual dos Times:** Renderizar em tempo real o saldo atualizado e o preenchimento tático de cada participante.
- **[RF-05] Processamento de Lances:** Validar o nome do comprador, saldo disponível, limite máximo de lance e disponibilidade da posição antes de efetivar o débito.
- **[RF-06] Pódio e Tela de Resultados:** Exibir ranking ordenado com médias, detalhamento dos elencos e botão para reiniciar uma nova partida.

---

## 4. Requisitos Não Funcionais (RNF)

- **[RNF-01] Arquitetura Modular:** Separação estrita de responsabilidades em módulos JavaScript (`estado.js`, `deck.js`, `ui.js`, `pontuacao.js` e bases de atletas independentes).
- **[RNF-02] Cache Busting:** Inclusão de versionamento por query parameter (`?v=X.X`) nos scripts para evitar carregamento de cache defasado no cliente.
- **[RNF-03] Performance e Imutabilidade:** Uso de algoritmos de embaralhamento sem viés (*Fisher-Yates*) e manipulação não-destrutiva de dados.
- **[RNF-04] Responsividade:** Interface adaptada para navegação em desktops e dispositivos móveis.

---

## 5. Estrutura e Arquitetura de Pastas

```text
leilao-dos-campeoes/
├── css/
│   └── style.css            # Folha de estilos e layout visual
├── docs/
│   └── REQUISITOS.md        # Documentação e regras de negócio
├── js/
│   ├── atletas/             # Bancos de dados de atletas por liga
│   │   ├── bagres.js
│   │   ├── brasileirao.js
│   │   ├── champions.js
│   │   ├── copa2026.js
│   │   ├── lendas.js
│   │   ├── nostalgia.js
│   │   └── reservas.js
│   ├── modulos/             # Lógica dividida por responsabilidade
│   │   ├── estado.js        # Estado global e fábrica de instâncias
│   │   ├── deck.js          # Sorteio e manipulação de cartas
│   │   ├── ui.js            # Renderização de pranchetas e status
│   │   └── pontuacao.js     # Validações de fim de jogo e ranking
│   └── script.js            # Controlador principal e eventos DOM
├── index.html               # Estrutura semântica da aplicação
└── README.md                # Apresentação do projeto no GitHub