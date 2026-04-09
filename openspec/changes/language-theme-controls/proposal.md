# Proposal: Add Language and Theme Mode Controls

## Intent

The terminal website currently has no direct layout controls for language switching and dark/light mode. Users should be able to switch between Portuguese and English, and toggle light/dark mode quickly through a familiar top-right control area.

## Scope

### In Scope
- Add a language toggle button (`PT-BR` / `EN`) in the far-right area of the window header.
- Add a theme mode toggle button (`Dark` / `Light`) in the same control group.
- Persist selected language and selected theme in `localStorage`.
- Localize key terminal UI messages and command outputs for `pt-BR` and `en`.
- Keep command compatibility and current command architecture intact.

### Out of Scope
- Full translation of every portfolio content block (e.g., full experience history and blog post body).
- Introducing a third language.

## Approach

1. Add a compact control group in the header (`index.html`) with two accessible buttons.
2. Style controls using existing terminal palette and typography (`style.css`).
3. Extend the existing state machine with `language` and dispatch `languageChanged` events.
4. Introduce an i18n dictionary in `main.js` and consume translations in command outputs and interface labels.
5. Add a dark/light toggle that switches between paired themes (e.g., `dracula` <-> `dracula-light`).

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `index.html` | Modified | Adds header control buttons and input title in English canonical form. |
| `style.css` | Modified | Adds reusable `.control-btn` styling for layout control buttons. |
| `main.js` | Modified | Adds language state, i18n dictionary, control handlers, and localized command output strings. |
| `openspec/specs/ui/spec.md` | Modified | Adds requirements for language control and theme mode control. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Partial translation inconsistency | Medium | Localize core UI/command scaffolding first; preserve content integrity for long-form text. |
| Theme mode mismatch for custom theme names | Low | Toggle logic falls back to dracula pair when counterpart is unavailable. |

## Success Criteria

- [ ] A language toggle button is visible in the far-right area of the header and switches UI texts between `pt-BR` and `en`.
- [ ] A dark/light toggle button is visible next to language control and flips current theme mode.
- [ ] Language and theme selections persist across reloads.
- [ ] Existing command execution behavior remains functional.
