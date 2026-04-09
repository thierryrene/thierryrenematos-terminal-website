# UI Specification: Language and Theme Mode Controls

## Purpose

Define a standard top-right control group for language and theme mode, and ensure localized terminal interface output for Portuguese and English.

## Requirements

### Requirement: Header Control Group

The system MUST render language and theme mode controls in the far-right side of the window header.

#### Scenario: Controls placement

- GIVEN the terminal window header is visible
- WHEN the UI is rendered
- THEN the control group MUST appear at the far-right edge of the header
- AND both controls MUST be reachable on desktop and mobile layouts

### Requirement: Language Toggle

The system MUST allow users to switch interface language between `pt-BR` and `en` through a button.

#### Scenario: Switch to English

- GIVEN current language is `pt-BR`
- WHEN the user clicks the language button
- THEN the language state MUST switch to `en`
- AND localized interface strings MUST update on the next render

#### Scenario: Persistence of language

- GIVEN the user selects `en`
- WHEN the page reloads
- THEN language state MUST be restored from persisted storage

### Requirement: Theme Mode Toggle

The system MUST provide a dedicated dark/light mode toggle in the header control group.

#### Scenario: Toggle to light mode

- GIVEN the current theme is a dark variant (e.g., `dracula`)
- WHEN the user clicks the mode toggle button
- THEN the theme MUST switch to its light pair (e.g., `dracula-light`)

#### Scenario: Toggle to dark mode

- GIVEN the current theme is a light variant (e.g., `monokai-light`)
- WHEN the user clicks the mode toggle button
- THEN the theme MUST switch to its dark pair (e.g., `monokai`)

### Requirement: Backward Compatibility

The system SHALL preserve existing command behavior and navigation while adding localized labels.

#### Scenario: Command stability after localization

- GIVEN a user executes existing commands (`help`, `about`, `blog`, `theme`)
- WHEN localization is active in either `pt-BR` or `en`
- THEN commands MUST keep functioning
- AND command routing/aliases MUST remain unchanged
