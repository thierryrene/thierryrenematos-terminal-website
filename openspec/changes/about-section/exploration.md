## Exploration: `about` / `sobre` command

### Current State
The terminal web app has a dictionary of commands (`commandsStrategy`) defined in `main.js`. It generates output by cloning HTML templates (`<template>`) from `index.html` or rendering basic HTML strings directly. Currently, there is no `about` or `sobre` command registered in this strategy. The "Especificações do Projeto" mentions `about` only as an example of a Quick Action button aria-label.

### Affected Areas
- `main.js` — Needs updating to register the `about` (and `sobre` as an alias) command in `commandsStrategy` and `quickActionsList`. Also, a new dictionary constant (e.g., `aboutText`) must be created to hold the raw text.
- `index.html` (Optional) — Might need a new `<template id="tpl-about">` if we choose to structure the about text cleanly via cloning as done for other complex renderers.
- `linkedin_dump.txt` — This is the source for the professional summary.

### Approaches
1. **Template-based Rendering** — Add an `<article>` to a new template in `index.html`, and a function in `commandsStrategy` that clones it and populates it with text from a JS constant.
   - Pros: Follows the established pattern of `tpl-cmds`, `tpl-projects`, `tpl-experience`. Decouples markup from JS.
   - Cons: Slightly more verbose to set up (two files touched).
   - Effort: Low

2. **Inline Literal String Rendering** — Construct the HTML string directly within `commandsStrategy['about']` function, using styled `div`s and `p`s.
   - Pros: Extremely fast to implement. Keeps everything in `main.js`.
   - Cons: Logic handles UI concerns directly.
   - Effort: Low

3. **External Fetch** — Create an `about.md` and fetch it on command execution logic, then parse markdown to HTML.
   - Pros: Makes content updates very easy without touching code.
   - Cons: Overkill for a static text block. Needs a markdown parser (or write a very simple one). Breaks the single JS bundle pattern.
   - Effort: Medium

### Recommendation
**Approach 1 (Template-based Rendering)** is recommended. It conforms perfectly to the architecture the existing code uses for other commands like `blog`, `experience`, and `ls`. We will extract the introductory summary from `linkedin_dump.txt` and place it in a constant in `main.js`, add a template in `index.html`, and wire the new command (with an alias for Portuguese `sobre`).

### Risks
- Content length: Too much text without truncation or scroll containment could look weird in a terminal interface. We should keep it concise (2-3 paragraphs) resembling a standard CLI output.

### Ready for Proposal
Yes — The orchestrator can proceed to drafting the proposal and specs.