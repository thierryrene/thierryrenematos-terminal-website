# UI Spec Delta: contact section formatting

## Requirement: Contact section MUST render with stable responsive alignment
The contact command SHALL render each contact item as a structured row that remains readable across desktop and mobile sizes.

### Scenario: Desktop alignment
- **Given** the user executes `contact`
- **When** the contact section is rendered
- **Then** each row MUST show label and value in a consistent two-column alignment
- **And** links MUST remain clickable and styled according to terminal conventions.

### Scenario: Mobile readability
- **Given** the user executes `contact` on a narrow viewport
- **When** long values (e.g., URLs/emails) are shown
- **Then** content MUST remain readable without rigid clipping
- **And** rows SHOULD maintain clear visual separation.
