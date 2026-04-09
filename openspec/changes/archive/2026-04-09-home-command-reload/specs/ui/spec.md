# UI Specification: Home Command Reload

## Purpose

Define canonical home command behavior for terminal reset and initial screen replay.

## Requirements

### Requirement: Home Command Naming

The system MUST expose `home` as the visible command for the initial screen action.

#### Scenario: Visible command list

- GIVEN the user opens quick actions or help list
- WHEN command names are rendered
- THEN `home` MUST appear as the command name
- AND `neofetch` MUST NOT be shown as primary label

### Requirement: Reload Behavior

The system MUST replay initial terminal loading flow when `home` is executed.

#### Scenario: Execute home

- GIVEN terminal has existing output history
- WHEN user runs `home`
- THEN terminal output MUST be cleared and initial startup flow replayed
- AND initial home snapshot MUST render again

### Requirement: Analytics Tracking

The system SHALL record a new tracked page/screen view for `home` execution.

#### Scenario: GA command tracking

- GIVEN analytics tracking is enabled
- WHEN user executes `home`
- THEN command tracking MUST emit event metadata for `home`

### Requirement: Backward Compatibility

The system SHOULD preserve `neofetch` as a compatibility alias.

#### Scenario: Execute neofetch

- GIVEN user types `neofetch`
- WHEN command is processed
- THEN system MUST resolve it to `home` behavior
