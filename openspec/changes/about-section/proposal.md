# Proposal: Add `about` / `sobre` command

## Intent

The terminal portfolio currently lacks a dedicated command to display the professional summary of the developer. Users might instinctively type `about` or `sobre` to learn more about the author. We need to add this capability using the text provided in the user's LinkedIn dump.

## Scope

### In Scope
- Define the `aboutData` inside `main.js` holding the professional summary (extracted from `linkedin_dump.txt`).
- Create `<template id="tpl-about">` in `index.html`.
- Register the `about` command in `commandsStrategy`.
- Register the `sobre` alias mapping to the `about` command.
- Add an action button for "Sobre" in the `quick-actions` toolbar.

### Out of Scope
- Dynamically fetching the professional summary from an external markdown file.
- Creating an editing interface for the about text.

## Approach

We will use **Template-based Rendering**, matching the existing architecture of commands like `experience` and `projects`. The content will be extracted from `linkedin_dump.txt` and formatted into a concise, 2-3 paragraph string literal or data object in `main.js`. This data will be injected into a clone of the `tpl-about` template whenever the command is executed.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `main.js` | Modified | Add `aboutData`, update `commandsStrategy`, modify `quickActionsList`. |
| `index.html` | Modified | Add `<template id="tpl-about">` with the desired markup. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Content clipping on mobile | Low | Ensure the template uses responsive classes (`text-sm`, `sm:text-base`) and relies on the existing `.overflow-y-auto` container. |

## Rollback Plan

Revert the commits/changes in `main.js` and remove the `<template>` block from `index.html`.

## Dependencies

- None (Vanilla JS stack).

## Success Criteria

- [ ] Typing `about` outputs the professional summary formatted similarly to blog posts or experience items.
- [ ] Typing `sobre` produces the exact same output.
- [ ] Clicking the new "Sobre" button in the Quick Actions toolbar auto-types and executes `sobre`.
