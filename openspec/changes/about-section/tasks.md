# Tasks: Add `about` / `sobre` command

## Phase 1: Preparation (Content Extraction)

- [x] 1.1 Read `linkedin_dump.txt` and extract a 2-3 paragraph professional summary in Portuguese.
- [x] 1.2 Define a new constant `aboutData` (string or array of paragraphs) in `main.js`.

## Phase 2: HTML Template definition (Presentation)

- [x] 2.1 Add `<template id="tpl-about">` in `index.html` referencing the layout of `tpl-experience` or similar content block.
- [x] 2.2 Include a wrapper `div` with responsive spacing (`my-4`, `space-y-4`, `slide-in`).
- [x] 2.3 Set a placeholder element (e.g. `<div class="about-content"></div>`) inside `tpl-about` to receive text formatting.

## Phase 3: Command Registration (Logic)

- [x] 3.1 Update `commandsStrategy` in `main.js` to handle `about()`.
- [x] 3.2 Inside `about()`, select `tpl-about` from the DOM, clone it.
- [x] 3.3 Inject `aboutData` into the cloned template, creating paragraph tags `<p>` for readability. Add it to standard output.
- [x] 3.4 Append `sobre` to `commandsStrategy` as a direct alias for `about()`.
- [x] 3.5 Add `about` and `sobre` (or combined) to the `help` command documentation list (with emoji `📖`).

## Phase 4: Toolbar Integration (Accessibility/UX)

- [x] 4.1 Update `quickActionsList` or relevant array in `main.js` to include the `Sobre` button.
- [x] 4.2 Verify if the button appears cleanly at the screen bottom navbar.

## Phase 5: Verification (Done explicitly in sdd-verify later)

- [ ] 5.1 Test typing `about`.
- [ ] 5.2 Test typing `sobre`.
- [ ] 5.3 Click the UI button to test auto-complete + auto-execute action.
