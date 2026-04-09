## Exploration: contact section formatting

### Current State
The `contact` command in [main.js](main.js) renders rows using a fixed-width 2-column grid (`grid-cols-[100px_1fr]`) and appends HTML by mutating `innerHTML` inside a loop. This works in basic desktop cases but can look misaligned on small viewports and produces less predictable spacing than other terminal sections.

### Affected Areas
- [main.js](main.js) — `commandsStrategy['contact']` currently builds the section with string concatenation and rigid column sizing.
- [index.html](index.html) — has `tpl-contact`, but current implementation does not use a robust row-based rendering strategy.

### Approaches
1. Keep fixed grid and tune CSS only.
- Pros: minimal code changes.
- Cons: still brittle for long links and does not align with current command rendering style.
- Effort: Low.

2. Build each contact row as semantic DOM nodes with responsive structure.
- Pros: robust formatting, safer rendering, better mobile behavior, consistent with other command sections.
- Cons: slightly more JS code.
- Effort: Low.

### Recommendation
Approach 2. Render each contact item as a dedicated row container with a label column and value column, using responsive classes and direct DOM creation instead of string concatenation.

### Risks
- Minor visual regressions if spacing diverges from current style.
- Need to preserve link behavior and hover affordances.

### Ready for Proposal
Yes.
