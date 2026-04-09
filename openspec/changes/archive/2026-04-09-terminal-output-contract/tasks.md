# Tasks: Terminal Output Contract

## Phase 1: Foundation (Contract Definition)

- [x] 1.1 Define reusable output roles in `main.js` (title, meta, body, hint) as helper builders.
- [x] 1.2 Map current commands to the contract and identify mismatches in `main.js`.
- [x] 1.3 Add/adjust minimal utility classes in `style.css` only if existing classes are insufficient.

## Phase 2: Core Implementation (Command Refactor)

- [x] 2.1 Refactor `about` output in `main.js` to use contract helpers.
- [x] 2.2 Refactor `skills` output in `main.js` to use contract helpers while preserving terminal-style progress bars.
- [x] 2.3 Refactor `blog` list output in `main.js` to align header/meta/body/hint hierarchy.
- [x] 2.4 Refactor `read` post output in `main.js` and `tpl-post` in `index.html` for consistent metadata and body typography.
- [x] 2.5 Refactor `contact` and `help` blocks in `main.js` to align spacing and title/body roles.

## Phase 3: Integration (Template Alignment)

- [x] 3.1 Align `tpl-about`, `tpl-skills`, and `tpl-post` in `index.html` with the shared output contract.
- [x] 3.2 Ensure theme tokens (`--term-*`) continue applying correctly after refactor.

## Phase 4: Verification (Manual Checklist)

- [x] 4.1 Validate visual consistency for commands: `help`, `about`, `skills`, `blog`, `read`, `contact`.
- [x] 4.2 Validate mobile readability and wrapping behavior for section bodies.
- [x] 4.3 Validate desktop hierarchy and spacing across all refactored blocks.
- [x] 4.4 Confirm no regression in command execution and no console errors.
