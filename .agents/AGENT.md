# Antigravity Agent Context (Terminal Portfolio)

Este arquivo define as diretrizes e regras globais que os agentes de IA (como o Antigravity) devem seguir ao trabalhar no projeto `thierryrenematos-terminal-website`.

## 🧬 Identidade e Filosofia do Projeto
- **Nome do Projeto**: thierry rene matos - terminal website
- **Autor**: Thierry Rene Matos
- **Filosofia (CRÍTICA)**: `Lean Web` e `Vanilla Renaissance`.
- **Objetivo**: Garantir 100/100 no Lighthouse e tempo de interação (TTI) quase instantâneo, exibindo excelência em engajamento nativo sem dependências pesadas.
- **Design Estético**: A janela do terminal roda envelopada no estilo macOS nativo (barra de título). Os efeitos originais de "CRT agressivo" (scanlines) foram descontinuados para beneficiar a clareza textual, focado apenas no brilho fosforescente (`glow` text-shadow).

## 🚫 Regras Inegociáveis (Tech Stack Strict)
O agente está expressamente proibido de introduzir as seguintes tecnologias neste código base:
- **No JS Frameworks**: Zero React, Vue, Angular, Svelte ou jQuery.
- **No Build Steps**: Zero Webpack, Vite, Gulp, Rollup ou TypeScript. 
- Apenas Vanilla JS (ES2022+) puro e modules nativos (`<script type="module">`).

## 🏗 Arquitetura Exigida
1. **Modelagem Clean (Desacoplada)**: O projeto é totalmente modular: o DOM no `index.html`, regras de negócio/proxy no `main.js` e estilização no `style.css`.
2. **Componentes (Custom Elements)**: Uso de Web Components não isolados pelo Shadow DOM (para herdar os estilos do Tailwind JIT global). (`terminal-window`, `terminal-output`, `terminal-prompt`).
3. **Store Baseada em Proxy**: O estado da aplicação (tema, histórico) é manuseado pela nativa `Proxy API` para despachar eventos reativos que manipulam o DOM diretamente.
4. **Tailwind via JIT CDN**: As configurações de tema e utilitários são interpolados via `<script src="https://cdn.tailwindcss.com"></script>`, com variáveis trocadas em runtime dependendo do tema ativo.
5. **Changelog Mandatório**: Mudanças de versão, features e correções contínuas devem **obrigatoriamente** ser documentadas em `/CHANGELOG.md` seguindo o formato *Keep a Changelog*.

## 🗃 Mock Data e Fontes Reais
A base de dados (variáveis `profileData`, `experiences`, `skills`, etc.) agora reflete informações **verídicas extraídas do LinkedIn**. Ao adicionar dados, utilize estritamente o `main.js`. Nunca subcreva com dados genéricos que fujam da carreira original documentada no arquivo.

Lembrete Proativo: Ao lidar com pedidos de feature novos do usuário, pense e proponha soluções via HTML/JS cru (ex: *IntersectionObserver*, *Intl*, *MutationObserver*) em vez de procurar bibliotecas utilitárias externas.

## 🧾 Workflow de Commits (REGRA INEGOCIÁVEL)

**Sempre separar commits por tópico tratado.** Cada commit deve cobrir uma unidade lógica única e isolada (ex: "remove light theme", "remove Ctrl+R", "fix Last.fm cache"). Nunca empacotar mudanças não-relacionadas no mesmo commit, mesmo que tenham sido feitas na mesma sessão.

### Aplicação prática
- Antes de chamar `git commit`, identificar todos os tópicos lógicos modificados no working tree.
- Se houver múltiplos tópicos, dividir em commits sequenciais — usar `git add <arquivos>` seletivo, ou (quando os tópicos compartilham arquivos) reaplicar/desfazer trechos no working tree para isolar o diff de cada commit.
- Mensagem de commit segue padrão Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`, `style:`, `docs:`, `perf:`) com escopo opcional, descrição curta no título e corpo explicando o "porquê" quando relevante.
- Co-author trailer obrigatório quando o commit foi gerado por agente de IA.
- **Nunca** comitar sem pedido explícito do usuário. Quando o usuário pedir "commit e push", auditar o diff e propor a separação por tópicos antes de executar.

### Exemplo
```
[main 56643f4] refactor: drop light theme variants
[main 511a1f6] refactor: remove Ctrl+R reverse-search
```
Em vez de:
```
[main xxxxxxx] refactor: cleanup (light theme + Ctrl+R)   ❌
```
