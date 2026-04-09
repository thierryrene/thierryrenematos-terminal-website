# Proposal: Review and fix contact section formatting

## Intent
Improve formatting quality of the contact section so information remains readable and consistently aligned across desktop and mobile, matching the terminal UI style.

## Scope
### In Scope
- Refactor `contact` command renderer in [main.js](main.js).
- Replace loop-time `innerHTML +=` with structured DOM node creation.
- Use responsive layout classes for better spacing and wrapping.

### Out of Scope
- Changing contact data values.
- Adding/removing social channels.
- Global redesign of terminal UI.

## Affected Areas
| Area | Impact | Description |
|------|--------|-------------|
| [main.js](main.js) | Modified | Refactor of `commandsStrategy['contact']` layout renderer |

## Risks
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Visual mismatch with existing sections | Low | Keep existing colors, typography, and spacing conventions |
| Link overflow in narrow viewports | Low | Add wrapping classes and avoid fixed rigid widths |

## Rollback Plan
Revert the `contact` command block in [main.js](main.js) to previous implementation.

## Success Criteria
- [ ] Contact rows are consistently aligned on desktop.
- [ ] Contact values remain readable on mobile (no broken hard clipping).
- [ ] Links keep hover style and open externally.
- [ ] No script diagnostics errors are introduced.
