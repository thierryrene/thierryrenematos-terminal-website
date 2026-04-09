# Design: Home Last.fm now playing block

## Architecture Decisions

### Decision 1: Client-side API fetch in Home renderer
- **Why**: Project is static frontend and needs quick integration without backend.
- **Tradeoff**: API key is exposed in frontend; acceptable for initial rollout with scoped key.

### Decision 2: Isolated render lifecycle for Last.fm block
- **Why**: Home snapshot must not fail if Last.fm API fails.
- **Implementation**: Render initial loading shell, then hydrate block asynchronously.

### Decision 3: Derive Last.fm artist/album URLs from metadata
- **Why**: Recent tracks endpoint may not always include canonical album URL.
- **Implementation**: Build artist URL as `/music/{artist}` and album URL as `/music/{artist}/{album}` with encoded segments.

## Sequence Flow
1. `homeSnapshot` appends base template with host info.
2. Last.fm block container is rendered in loading state.
3. Async fetch requests `user.getrecenttracks` (`limit=1`).
4. Response is normalized into view model.
5. UI updates to now-playing or last-played state.
6. On error/timeout/missing config, fallback message is rendered.

## File Changes
- [main.js](main.js)
  - Add Last.fm config object.
  - Add helper methods: fetch recent track, format relative elapsed time, encode Last.fm paths, render/hydrate block.
  - Inject Last.fm hydrate call in `homeSnapshot`.
- [index.html](index.html)
  - Add `<div class="lastfm-block-container"></div>` under home info grid in `tpl-neofetch`.

## Data Contract (normalized)
- `isNowPlaying`: boolean
- `trackName`: string
- `artistName`: string
- `albumName`: string
- `albumImage`: string | null
- `artistUrl`: string
- `albumUrl`: string
- `elapsedLabel`: string (only for non-now-playing)
