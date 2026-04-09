# UI Specification: `about` / `sobre` command

## Purpose

The Terminal UI domain manages the behavior of all user-entered text commands and GUI fast-actions. This specification covers the addition of a professional summary feature accessible via text commands or a toolbar button.

## Requirements

### Requirement: Command Execution

The system MUST recognize the `sobre` command and its alias `about`.

#### Scenario: User requests 'sobre' info

- GIVEN the terminal prompt is active and ready
- WHEN the user types `sobre` and hits Enter
- THEN the system MUST append a new DOM block utilizing the `tpl-about` template
- AND the block MUST display the developer's professional summary text

#### Scenario: User requests 'about' alias

- GIVEN the terminal prompt is active and ready
- WHEN the user types `about` and hits Enter
- THEN the system MUST behave exactly as if `sobre` was typed

### Requirement: Command Validation

The system MUST NOT accept arguments for the `sobre` or `about` commands.

#### Scenario: User provides invalid arguments

- GIVEN the terminal prompt is active
- WHEN the user types `sobre mim` or `about me` (with arguments)
- THEN the system SHOULD ignore the arguments and execute the command normally (as this is a static output without dynamic routing)

### Requirement: Quick Action UI

The system MUST provide a GUI shortcut for mobile and desktop users without typing.

#### Scenario: Utilizing Quick Action Toolbar

- GIVEN the terminal has rendered the Quick Action Toolbar at the bottom of the screen
- WHEN the user clicks the `Sobre 📖` button
- THEN the system MUST automatically simulate the typing of `sobre` in the prompt
- AND automatically submit the command to trigger the `tpl-about` rendering

### Requirement: Documentation

The system MUST display the new commands in the master `help` list.

#### Scenario: User lists all commands

- GIVEN the terminal prompt is active
- WHEN the user types `help` and hits Enter
- THEN the system MUST print the global command table
- AND the table MUST include the `sobre` command with its emoji `📖` and description `Sobre mim`
- AND clicking the `sobre` item in the help menu MUST auto-execute it
