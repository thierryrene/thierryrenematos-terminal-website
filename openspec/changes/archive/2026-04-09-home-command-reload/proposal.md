# Proposal: Rename `neofetch` button to `home` and reload terminal

## Intent

Replace the visible `neofetch` action with `home` and make `home` behave like a terminal initial load, including a fresh GA page view when triggered.

## Scope

### In Scope
- Replace `neofetch` in quick actions/help with `home`.
- Keep backward compatibility for users typing `neofetch`.
- Execute full terminal reload behavior when `home` runs.
- Ensure command tracking sends a new GA screen/page view for `home`.

### Out of Scope
- Removing the existing system snapshot content.
- Changing theme/language control behavior.

## Approach

1. Set `home` as canonical command in available commands.
2. Map `neofetch` as alias to `home` in command normalization.
3. Refactor existing snapshot renderer into an internal helper used by boot sequence.
4. Make `home` execute the boot sequence again to emulate initial page load.
5. Track `home` in analytics command tracking.

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Boot sequence re-entry side effects | Low | Reset interactive blog state before replaying startup flow. |

## Success Criteria

- [ ] Quick action label shows `home` instead of `neofetch`.
- [ ] Running `home` reloads terminal initial output.
- [ ] Running `home` generates GA tracking event through command tracking.
- [ ] Typing `neofetch` still works via alias.
