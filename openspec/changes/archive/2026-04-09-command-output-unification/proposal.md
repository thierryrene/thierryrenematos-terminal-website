# Proposal: Command Output Unification

## Intent

Apply a single terminal output contract to all interactive commands so every command result follows consistent section hierarchy, spacing, typography, and metadata behavior.

## Scope

### In Scope
- Standardize output rendering for `neofetch`, `ls`, `experience`, `projects`, `shortcuts`, and `read`.
- Keep existing standardized commands (`help`, `about`, `skills`, `blog`, `contact`) consistent with the same contract.
- Localize new section titles/meta/hints through existing i18n mechanism.
- Preserve command behavior and navigation actions.

### Out of Scope
- Rewriting the underlying data dictionaries (`projects`, `experiences`, blog content body).
- Introducing new commands or changing command names.

## Approach

1. Reuse `createTerminalSection` as the canonical renderer for all content commands.
2. Refactor remaining non-conforming command handlers to append content inside section body.
3. Extend i18n keys for new section labels and hints.
4. Keep command interactions intact (click-to-run, `read <id>` transitions, theme switching).

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `main.js` | Modified | Refactors command renderers and adds localized labels for newly standardized sections. |
| `openspec/specs/ui/spec.md` | Modified | Adds full command coverage requirement for contract consistency. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Visual regression in rich commands (`neofetch`, `read`) | Medium | Keep content blocks unchanged and only wrap with section contract. |
| Translation gaps in new labels | Low | Add required i18n keys for pt-BR and en with fallbacks. |

## Success Criteria

- [ ] All user-facing content commands render inside the shared terminal section contract.
- [ ] Typography hierarchy is consistent across command outputs.
- [ ] No command behavior regressions in navigation or interactions.
- [ ] Diagnostics show no errors in edited files.
