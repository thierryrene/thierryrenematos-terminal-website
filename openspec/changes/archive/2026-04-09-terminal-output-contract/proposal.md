# Proposal: Terminal Output Contract

## Intent

Definir e aplicar um contrato visual e estrutural único para o output dos comandos do terminal, reduzindo divergências de fonte, espaçamento, hierarquia e metadados entre seções como `about`, `skills`, `blog`, `read` e `contact`.

## Scope

### In Scope
- Definir padrão de output terminal (header, meta, body, footer/hint).
- Criar helpers de renderização em `main.js` para aplicar padrão sem duplicação.
- Padronizar os comandos `about`, `skills`, `blog`, `read`, `contact` e `help`.
- Normalizar tipografia para evitar mistura inconsistente de classes e fontes.

### Out of Scope
- Tradução completa (i18n) de todos textos.
- Reestruturação de slug/roteamento do blog.
- Mudanças profundas de conteúdo dos dados (somente forma de exibição).

## Approach

Implementar um contrato mínimo com blocos reutilizáveis:
1. Linha de título de seção.
2. Linha de metadados (quando aplicável).
3. Corpo principal com largura e espaçamento consistentes.
4. Linha de dica/ação opcional.

A implementação será feita com funções utilitárias em `main.js` para montar blocos padronizados e reduzir `innerHTML` ad hoc por comando.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `main.js` | Modified | Helpers de output e refactor dos comandos renderizados. |
| `index.html` | Modified | Ajustes pontuais de templates (`tpl-post`, `tpl-about`, `tpl-skills`). |
| `style.css` | Modified | Classes utilitárias leves de contrato visual terminal (se necessário). |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Regressão visual em comandos já estáveis. | Medium | Aplicar por etapas e validar comando a comando com checklist. |
| Quebra de legibilidade no mobile. | Low | Definir limites responsivos e validar em viewport estreita. |

## Rollback Plan

Reverter alterações em `main.js`, `index.html` e `style.css` para o commit anterior da change caso haja regressão visual relevante.

## Dependencies

- Nenhuma dependência externa nova.
- Reuso das variáveis de tema já existentes (`--term-*`).

## Success Criteria

- [ ] Comandos-alvo exibem output com o mesmo padrão de estrutura visual.
- [ ] Não há divergência não intencional de fonte entre seções equivalentes.
- [ ] Output permanece legível em desktop e mobile.
- [ ] Checklist manual de validação dos comandos é aprovado.
