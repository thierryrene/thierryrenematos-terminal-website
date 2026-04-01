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
