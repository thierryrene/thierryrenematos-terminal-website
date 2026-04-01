# 👨‍💻 Thierry Rene Matos - Terminal Portfolio V2 🚀

Bem-vindo ao meu portfólio interativo! Este projeto é uma simulação imersiva de um terminal baseado em web, focado na filosofia **"Lean Web" e "Vanilla Renaissance"**. Criado para rodar direto no seu navegador sem as dependências pesadas de frameworks, é a verdadeira união da nostalgia dos terminais com a performance fluida em estado da arte. ⚡

## ✨ Principais Funcionalidades

- **Janela Estilo macOS:** Uma moldura limpa (com os três clássicos botões) e sombra de profundidade englobando o terminal. Extremamente responsivo: consome 75% da sua janela no Desktop e fica modo super-imersivo em tela cheia na versão Mobile! 🍏
- **Foco Absoluto em Leitura:** Deixamos os velhos efeitos visuais pesados (scanlines que emulavam CTRs) no passado. O visual da V2 favorece código limpo utilizando apenas um levíssimo brilho fosfórico (`glow`) para emular os antigos painéis verdes digitais. 👓
- **Motor Shell Iterativo:** Exatamente como no seu Unix! O console escuta e aceita seus comandos de forma nativa e conta até com auto-complete dinâmico:
  - Digite `help` 🛟 para a lista mestra.
  - Experimente `neofetch` 🐧 para informações de host, tech stack e sistema operacional.
  - Teste `experience` 👔 para uma timeline real estruturada direto do banco de dados do meu LinkedIn.
  - Navegue por `projects`, `skills`, `blog` e `contact` 💻.
- **Correção Automática "Did you mean?":** Errou o typo num comando apressado? Graças a matemática de Distância Levenshtein o cursor sugere amigavelmente a instrução que você realmente queria executar! 🤖
- **Temas Inteligentes e Persistentes:** Prefere temas escuros ou um modesto *light mode*? Digite `theme dracula` ou `theme dracula-light`. Nossa biblioteca emula as cores em realtime via *Proxies* do JS e já salva tudo para a próxima sessão no seu `localStorage`! 🎨
- **Clean Architecture:** Desacoplamento raiz garantindo a sustentabilidade. A interface é puro `index.html`, o design visual repousa sossegado no `style.css` e o maestro lógico do proxy domina o palco em `main.js`. 🧱

## 🛠️ Stack Tecnológica

Zero frameworks de Javascript complexos e zero dor de cabeça para rodar os Build Steps.
* **Vanilla JS (ES2022+):** Orquestrando componentes Web Nativos, Templates HTML (`<template>`) e `Proxy API` para a gerência reativa do histórico de comandos e layout.
* **Tailwind CSS (JIT CDN):** Aplicando design moderno de utilitários no topo de marcação semântica com uma re-renderização imediata e flexibilidade robusta de personalização de propriedades CSS.
* **Sem Framework Nodes Extremos:** Esqueceu como era codar sem React, VueJS, webpack, TS e Gulp? Aproveite a volta no tempo, mas no futuro! 🚀

## 🚀 Como Rodar e Testar Localmente (Preview)

Fácil como um pulo no espaço! Basta possuir o módulo Python base instalado na máquina.

1. Navegue até a pasta raiz onde clonou este portfólio.
2. Inicie nosso workflow padrão ativando um *servidor web local* em uma única linha no seu bash original de trabalho: 
   ```bash
   python3 -m http.server 8080
   ```
3. Abra seu navegador favorito e clique em: [http://localhost:8080/](http://localhost:8080/) 🎉. Digite `neofetch` para ser feliz!

## 📝 Versionamento e Histórico

Como esse é um trabalho contínuo guiado a padrões open-source, verifique todas as re-estruturações (desde a V1 até a migração V2) e novas *features* diretamente pelo nosso log de versões [CHANGELOG.md](./CHANGELOG.md). Ah, e há também um manifesto oculto de comportamento IA na trilha `.agents/`, de onde a Antigravity me ajudou magistralmente neste projeto. 😉

## 💬 Contato

Vamos conversar e falar de Arquitetura Limpa, DevOps ou desenvolvimento avançado Web? Sinta-se à vontade para puxar uma conversa no meu [LinkedIn Profissional](https://linkedin.com/in/thierryrene) ou testar o comando `contact` diretamente pelo emulador.

---
*Esculpido com carinho, café quente ☕ e puro poder agnóstico Vanilla* 👾