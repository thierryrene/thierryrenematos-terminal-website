## Exploration: Last.fm now playing block below home info

### Current State
The Home/System Snapshot section is rendered by `commandsStrategy['homeSnapshot']` in [main.js](main.js), cloning [index.html](index.html) template `tpl-neofetch`. The ASCII art and host info grid are produced in JS (`logo-art` and `host-data`), and currently there is no external API integration for music status.

### Affected Areas
- [main.js](main.js) — home snapshot renderer location where the new Last.fm block should be injected after `host-data` and before the section ends.
- [index.html](index.html) — template `tpl-neofetch` may need a placeholder container for a dedicated music block below the info description.
- [style.css](style.css) — optional utility class additions if custom spacing/layout is needed beyond existing Tailwind classes.

### Approaches
1. **Client-side direct fetch to Last.fm API** — Call Last.fm from browser during home render and fill block dynamically.
- Pros: quick to implement, no backend dependency.
- Cons: API key exposed in frontend, CORS/reliability risk, harder to protect quotas.
- Effort: Low.

2. **Server-side proxy endpoint** — Frontend calls own endpoint, backend calls Last.fm and returns normalized payload.
- Pros: hides API key, enables caching/rate limiting, cleaner contract for future CMS/API integration.
- Cons: requires backend component not currently present in this static app.
- Effort: Medium/High.

### Recommendation
Approach 1 for initial rollout in this static architecture, but with a normalization layer in JS and defensive fallback states. Implement a dedicated `renderListeningBlock()` in [main.js](main.js) that:
- fetches Last.fm recent tracks,
- decides between “Now Playing” and “Last played X ago”,
- renders cover, track name, artist name,
- adds links to Last.fm artist and album pages.

### Risks
- Last.fm API key exposure in frontend unless proxy is adopted later.
- External API latency/failure can delay or degrade Home rendering if not isolated with timeout/fallback.

### Ready for Proposal
Yes — proceed to proposal/spec/design for a Home Last.fm block with explicit fallback behavior and link requirements.
