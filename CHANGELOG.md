# Changelog - Leilão dos Campeões

Todas as mudanças importantes do projeto serão registradas neste arquivo.

---

## [v1.1.0] - 2026-08-17

### Adicionado
- **Liga Pernas de Pau (Modo Bagres):** Modo de jogo inverso onde a menor pontuação total vence a partida.
- **Banco de Reservas de Emergência (`reservas.js`):** Preenchimento automático com atletas folclóricos caso o leilão termine sem posições preenchidas.
- **Prancheta Tática no Painel de Times:**
  - Barra de progresso visual do elenco montado (`X/5`).
  - Badges de status por posição (`Contratado` ou `Disponível`).
  - Botão de seleção rápida do comprador direto pelo card do jogador.
- **Rolagem Suave Automática:** Redirecionamento automático da visualização ao confirmar compra ou descartar atleta no mobile.

### Alterado
- **Redesign Dark/Gold:** Nova interface esportiva moderna com paleta escura, acabamento em dourado e sombras suaves.
- **Mecânica de Mistério:** Notas dos atletas ocultadas durante a fase de leilão, sendo reveladas apenas no ranking final.
- **Modularização de Atletas:** Separação das bases em arquivos dedicados (`brasileirao.js`, `champions.js`, `copa2026.js`, `lendas.js`, `bagres.js`, `reservas.js`).

---

## [v1.0.0] - Primeira Versão Oficial do MVP

### Adicionado
- Sistema completo e autônomo de leilão de cartas de futebol.
- Documentação profissional no `README.md` com badges e guia de arquitetura.
- Histórico oficial de alterações no `CHANGELOG.md`.

---

## [v0.5.0] - Melhorias Visuais

### Interface
- Tema inicial inspirado em gramado de futebol.
- Reformulação dos cartões dos jogadores.
- Melhorias na tipografia e nos botões.
- Responsividade inicial para telas menores.

---

## [v0.4.0] - Sistema Completo de Partida

### Melhorias Implementadas
- Validação de compras sem distinção de maiúsculas/minúsculas.
- Desconto dinâmico do saldo de moedas.
- Remoção automática dos atletas contratados da lista de sorteio.
- Atualização em tempo real do painel de times.

### Final de Partida
- Criação da tela de resultado final.
- Cálculo automático da pontuação do time.
- Exibição de ranking e destaque para o campeão.

---

## [v0.3.0] - Estrutura dos Times

### Lógica
- Definição da formação tática: 1 Goleiro, 1 Zagueiro, 2 Meias e 1 Atacante.
- Validação e bloqueio de posições duplicadas/excedentes.

---

## [v0.2.0] - Sistema de Leilão

### Lógica
- Sorteio aleatório de atletas.
- Sistema de lances e registro de compras.
- Controle individual de saldo de moedas.

---

## [v0.1.0] - Primeira Versão Pública

### Inicial
- Estrutura base do projeto (HTML, CSS e JS).
- Seleção de campeonato e quantidade de jogadores (2 ou 3).
- Cadastro inicial dos participantes.

---

## Próximas Versões (Roadmap)

### [v1.2.0]
- Modularização do JavaScript usando ES Modules (`import`/`export`).
- Animações e efeitos na revelação das cartas.
- Sons e efeitos sonoros de lances e apito final.

### [v2.0.0]
- Arquitetura de Back-end com Node.js e Express.
- Modo Multiplayer em tempo real via WebSockets (Socket.io).