# Proposal: Skills Review & UI Upgrade

## Intent

Atualizar os dados da seção de "Skills" do terminal para refletir tecnologias e níveis de experiência mais atuais do portfólio, além de trocar a representação visual analógica (caracteres ASCII `█░`) das barras de nível por barras fluídas em HTML/CSS (DOM real) melhorando a responsividade e estabilidade visual do comando `skills`.

## Scope

### In Scope
- Atualização do array `skills` no `main.js` com novas tecnologias e níveis recalibrados.
- Refatoração da função `skills()` no `commandsStrategy` do `main.js`.
- Alteração da lógica de renderização para utilizar elementos `<div class="bg-term-blue">` em vez de strings de caracteres para a barra de progresso.
- Garantir comportamento responsivo (adaptação a telas menores sem quebra de layout).

### Out of Scope
- Interatividade avançada como filtragem de skills via parâmetros de comando (ex: `skills backend`).
- Modificação de outras seções de dados como `experience` ou `projects`.

## Approach

A abordagem consiste em duas frentes atuando em simultâneo:
1. **Conteúdo**: Editar as categorias e itens do array `skills` para algo mais moderno (opção 1 da exploração).
2. **UI/UX**: Modificar o HTML injetado dinamicamente pelo loop em `main.js` substituindo a construção iterativa baseada no caractere "█" por uma estrutura CSS flexível (opção 2 da exploração), usando larguras percentuais (`width: X%`) atreladas à nota de 0 a 10.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `main.js` | Modified | Atualização do array de skills e refatoração visual na renderização do comando. |
| `index.html` | Modified (minor) | Ajustes potenciais no template `#tpl-skills` para suportar a nova estrutura. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Quebra de layout no mobile devido às barras flexíveis. | Low | Utilizar classes utilitárias do Tailwind CSS adequadas (`w-full`, `max-w-sm`) e testar variação de largura. |

## Rollback Plan

Reverter as modificações no arquivo `main.js` (array `skills` e método `skills` no `commandsStrategy`) e `index.html` (template `tpl-skills`) utilizando o controle de versão do git ou a partir do backup do commit anterior à esta mudança.

## Dependencies

- Tailwind CSS já presente na infraestrutura do terminal.

## Success Criteria

- [ ] Comando `skills` executando sem erros no console.
- [ ] Barras de habilidades sendo desenhadas via CSS/HTML elements e com visual adaptável até larguras de 320px sem quebrar colunas.
- [ ] Conteúdo do array `skills` reflete as experiências mais recentes presentes no perfil.
