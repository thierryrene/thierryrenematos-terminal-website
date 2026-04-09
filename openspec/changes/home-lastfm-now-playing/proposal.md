# Proposal: Home Last.fm now playing block

## Intent
Add a music status block below the Home info description that shows current listening state from Last.fm. If nothing is currently playing, show the last played track and how long ago.

## Scope
### In Scope
- Add Last.fm client-side fetch integration in Home snapshot.
- Render block below host description containing:
  - album cover image,
  - track name,
  - artist name,
  - state (`now playing` or `last played {elapsed}`).
- Add links to Last.fm artist and album pages.
- Add graceful fallback states (loading/unavailable/no data).

### Out of Scope
- Backend proxy implementation.
- New command for music controls.
- Historical track list.

## Approach
Implement in frontend (`main.js`) using Last.fm `user.getrecenttracks` API. Keep block rendering isolated from Home summary rows so API failures do not break snapshot rendering.

## Affected Areas
| Area | Impact | Description |
|------|--------|-------------|
| [main.js](main.js) | Modified | Last.fm config, fetch helpers, relative time formatter, home block renderer |
| [index.html](index.html) | Modified | Add placeholder container below `host-data` in `tpl-neofetch` |

## Risks
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Frontend API key exposure | High | Use dedicated key with restricted quota; document proxy as next step |
| API latency/failure | Medium | Timeout + fallback UI (`unavailable`) |
| Missing image/album fields | Medium | Defensive defaults and placeholder artwork |

## Rollback Plan
Revert changes in [main.js](main.js) and [index.html](index.html) affecting Last.fm block injection and fetch logic.

## Success Criteria
- [ ] Home section shows Last.fm block below info description.
- [ ] If currently playing, status shows now playing.
- [ ] If not currently playing, status shows last played with elapsed time.
- [ ] Track, artist, and album image are rendered when available.
- [ ] Artist and album link to Last.fm pages.
- [ ] On API failure or missing config, section remains functional with fallback message.
