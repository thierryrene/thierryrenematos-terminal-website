# UI Specification: Command Output Unification

## Purpose

Ensure every content command output is rendered using the shared terminal section contract.

## Requirements

### Requirement: Full Command Contract Coverage

The system MUST render all content commands using the section contract with title, optional meta, body, and optional hint.

#### Scenario: Rich command output consistency

- GIVEN a user executes `neofetch`, `experience`, or `projects`
- WHEN output is rendered
- THEN each command MUST render inside the shared section contract
- AND content typography MUST follow terminal role classes

#### Scenario: Utility command output consistency

- GIVEN a user executes `ls` or `shortcuts`
- WHEN output is rendered
- THEN output MUST use the same section title/body hierarchy
- AND spacing MUST be consistent with other commands

#### Scenario: Post detail output consistency

- GIVEN a user executes `read <id>` for an existing post
- WHEN the post detail is shown
- THEN title/meta/body/actions MUST remain readable and structured
- AND output MUST follow terminal section hierarchy

### Requirement: Behavioral Stability

The system SHALL keep existing command behavior while standardizing output structure.

#### Scenario: Existing interactions still work

- GIVEN a user clicks interactive rows or actions inside standardized outputs
- WHEN command handlers are triggered
- THEN the resulting command flow MUST remain unchanged
- AND deep-link/hash tracking behavior MUST continue to operate
