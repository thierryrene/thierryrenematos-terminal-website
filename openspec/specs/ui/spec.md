# UI Specification

## Purpose

Padronizar a apresentação do output do terminal para comandos de conteúdo, mantendo consistência de layout, tipografia e hierarquia visual.

## Requirements

### Requirement: Output Contract

The system MUST render command outputs using a shared contract with section title, optional metadata line, content body, and optional hint/footer.

#### Scenario: Standard section rendering

- GIVEN a user runs a content command (`about`, `skills`, `blog`, `read`, `contact`, `help`)
- WHEN the command output is added to terminal output
- THEN the output MUST follow the shared section structure
- AND spacing and alignment MUST be consistent with other command outputs

#### Scenario: Metadata optionality

- GIVEN a command without metadata needs (e.g., `contact`)
- WHEN output is rendered
- THEN the metadata line MAY be omitted
- AND title and body structure MUST still be preserved

### Requirement: Typography Consistency

The system SHALL use consistent font-family and font-size tiers for equivalent content roles (title, meta, body, hint).

#### Scenario: Equivalent body text across sections

- GIVEN two different sections that display narrative text (`about`, `read`)
- WHEN rendered in the terminal
- THEN body text SHOULD use the same typography role classes
- AND no unintended font divergence SHALL appear

### Requirement: Responsive Output

The system MUST keep command output readable on small screens and desktop widths.

#### Scenario: Mobile readability

- GIVEN the terminal is displayed on a narrow viewport
- WHEN a content command renders a section block
- THEN line wrapping MUST preserve readability
- AND critical information MUST NOT overflow outside container bounds

#### Scenario: Desktop readability

- GIVEN the terminal is displayed on desktop width
- WHEN section blocks are rendered
- THEN content width SHOULD remain comfortable for reading
- AND visual hierarchy (title > meta > body > hint) MUST remain clear

### Requirement: Header Preference Controls

The system MUST provide a preference control group in the header with language and theme mode toggles.

#### Scenario: Controls at expected layout edge

- GIVEN the terminal window header is visible
- WHEN the interface is rendered
- THEN language and mode controls MUST appear on the far-right side of the header
- AND controls MUST remain accessible on both desktop and mobile

### Requirement: Interface Language Switching

The system MUST allow switching interface texts between `pt-BR` and `en`.

#### Scenario: User toggles language

- GIVEN the interface language is currently `pt-BR`
- WHEN the user clicks the language control
- THEN the language state MUST switch to `en`
- AND key UI labels and command scaffolding texts MUST render in English

#### Scenario: Language persistence

- GIVEN a language was previously selected
- WHEN the user reloads the page
- THEN the selected language MUST be restored from local storage

### Requirement: Dark/Light Mode Toggle

The system SHALL offer a dedicated control to switch between dark and light variants of the active theme family.

#### Scenario: Toggle dark to light

- GIVEN the active theme is a dark variant (e.g., `dracula`)
- WHEN the user clicks the mode control
- THEN the active theme MUST switch to the matching light variant (e.g., `dracula-light`)

#### Scenario: Toggle light to dark

- GIVEN the active theme is a light variant (e.g., `monokai-light`)
- WHEN the user clicks the mode control
- THEN the active theme MUST switch to the matching dark variant (e.g., `monokai`)

### Requirement: Full Command Output Standardization

The system MUST keep all content-oriented command outputs aligned to the shared terminal section contract.

#### Scenario: Legacy command parity

- GIVEN a user executes `neofetch`, `ls`, `experience`, `projects`, or `shortcuts`
- WHEN output is rendered
- THEN each result MUST use the same section hierarchy (title/meta/body/hint)
- AND typography roles MUST remain consistent with other commands

#### Scenario: Post detail parity

- GIVEN a user executes `read <id>` for a valid post
- WHEN output is rendered
- THEN the post detail MUST follow terminal section structure
- AND actions (like back to blog) MUST remain functional
