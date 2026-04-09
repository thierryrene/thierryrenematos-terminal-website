# Spec: Skills UI & Data Modernization

## Feature Description
Update the skills list data to reflect modern stack capabilities and revamp the terminal rendering logic for the `skills` command to use real CSS-based progress bars instead of fixed ASCII characters.

## Scenarios

### Scenario 1: Executing the skills command
**Given** the user is viewing the terminal session
**When** the user types `skills` and presses `Enter` (or clicks the quick action)
**Then** the system should display a list of skills grouped by categories ("Back-End & Bancos de Dados", "Front-End & Engenharia de UI", "DevOps, Cloud & Dados")
**And** the skills must accurately reflect the profile data (e.g. Go, React.js, AWS, GA4).

### Scenario 2: Responsive progress bars
**Given** the skills data is successfully rendered on the screen
**When** the skills component is displayed
**Then** each skill within a category must show its name and a progress bar
**And** the progress bar must use responsive HTML elements (`<div class="h-1.5 ..."></div>`) instead of ASCII text (like `████░`)
**And** the fill percentage of the bar must scale correctly to the skill level (e.g. 8/10 -> `width: 80%`).
