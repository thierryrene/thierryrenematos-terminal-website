# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-04-01

### Added
- **Componentização Vanilla**: Projeto refatorado separando totalmente a lógica em `main.js`, estilos em `style.css` e front em `index.html`.
- **macOS Window Layout**: Design imersivo encapsulando a experiência do terminal em uma robusta janela desktop. Responsividade implementada (75% Desktop Window, 100% Fullscreen em telas pequenas/mobile).
- **Core Engine (Proxy)**: Criada uma máquina de estado usando Vanilla JS Proxies focada em observar as variações comportamentais do histórico e persistir no `localStorage`.
- **Sistema de Temas Dinâmico**: Os comandos de base agora conseguem trocar dinamicamente as classes Root mapeadas para suportar as variáveis dos temas `dracula`, `monokai`, e suas variações `.light`.
- **Ambiente Shell Mock/Terminal**: Incorporação de Boot Sequence em tempo de visualização randômico; Comandos nativos completos emulados iterativamente com tab-completion ghosted UI, além de tratamento amigável de erros baseados em Levenshtein Distance (`Did you mean?`).
- **Data Schemas do LinkedIn**: Importação verídica em lote das timelines (Experiências e Skills Reais de Produção) processadas pelo agente localmente da branch offline do desktop.
- **Workflow Antigravity**: Primeiras documentações AI `.agents/AGENT.md` e `.agents/workflows/preview.md` orientadas a instrução de agentes e rodadas rápidas de preview local.
- **Micro UI Toolbar**: Criado Quick Actions no rodapé para engajar usuários de Toque (Touchscreen Navigations).

### Removed
- Efeito de simulação pesada dos scanlines de monitor de TUBO CTR (varredura e Flicker), mitigando ruído cognitivo nas passagens de leitura profunda.
