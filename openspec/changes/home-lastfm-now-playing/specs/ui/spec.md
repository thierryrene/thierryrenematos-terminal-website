# UI Spec Delta: Home Last.fm now playing block

## Requirement: Home snapshot MUST display Last.fm listening status block
The Home snapshot SHALL render a Last.fm block below the host information rows, including artwork, track metadata, and Last.fm links.

### Scenario: Currently playing track
- **Given** Last.fm API returns a recent track flagged as `nowplaying`
- **When** the Home snapshot is rendered
- **Then** the block MUST display a now-playing status
- **And** MUST show album image, track name, and artist name
- **And** MUST provide links to Last.fm artist and album pages.

### Scenario: Not currently playing
- **Given** Last.fm API returns a recent track without `nowplaying`
- **When** the Home snapshot is rendered
- **Then** the block MUST display last played status with relative elapsed time
- **And** MUST show album image, track name, and artist name
- **And** MUST provide links to Last.fm artist and album pages.

### Scenario: API unavailable or missing config
- **Given** API request fails, times out, or key/user is missing
- **When** the Home snapshot is rendered
- **Then** the page MUST keep rendering normally
- **And** the Last.fm block SHOULD show a compact fallback message instead of throwing errors.
