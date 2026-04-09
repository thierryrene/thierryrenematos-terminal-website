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
