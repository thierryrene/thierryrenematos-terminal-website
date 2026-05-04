---
description: Como criar commits separados por topico no Terminal Portfolio
---

# Workflow de Commits por Topico

Toda sessao de trabalho que produzir mudancas em multiplos topicos logicos deve resultar em multiplos commits, **um por topico**. Esta e uma regra inegociavel do projeto.

## 1. Auditoria pre-commit

Antes de stagiar qualquer arquivo, identificar os topicos logicos no working tree:

```bash
git status
git diff --stat
git diff
```

Listar mentalmente (ou no chat com o usuario) os topicos detectados. Exemplos de topicos isolados:
- "remove light theme"
- "add Last.fm cache"
- "fix focus hijack on touch"
- "update i18n strings for blog"

## 2. Separacao quando topicos compartilham arquivos

Se dois topicos modificaram o mesmo arquivo, o procedimento e:

1. Identificar quais trechos pertencem a cada topico.
2. Reverter no working tree os trechos do topico B (re-aplicando o codigo original via Edit).
3. Validar (`node --check`, smoke test) e commitar o topico A.
4. Re-aplicar a remocao/alteracao do topico B no working tree.
5. Validar e commitar o topico B.

Alternativa: usar `git stash`, restaurar HEAD, aplicar topico A, commitar; pop stash, commitar B. Para sessoes complexas, o caminho via Edit e mais auditavel.

## 3. Padrao de mensagem

Seguir Conventional Commits:

```
<tipo>(<escopo opcional>): <descricao curta minuscula>

<corpo opcional explicando o porque>

Co-Authored-By: <agente> <noreply@anthropic.com>
```

Tipos validos: `feat`, `fix`, `refactor`, `chore`, `style`, `docs`, `perf`, `test`.

## 4. Push

Apos todos os commits do tema da sessao, push unico:

```bash
git push origin main
```

## 5. Anti-padroes proibidos

- Commit unico cobrindo dois ou mais topicos nao-relacionados ("cleanup geral", "varios ajustes").
- `git commit -am` sem auditoria previa do diff.
- Mensagens vagas tipo "wip", "update", "fix stuff".
- Commitar sem pedido explicito do usuario.
- Pular hooks (`--no-verify`) ou amend de commits ja publicados sem aprovacao.
