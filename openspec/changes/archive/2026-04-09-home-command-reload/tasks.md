# Tasks: Home Command Reload

## Phase 1: Command Surface

- [x] 1.1 Replace visible `neofetch` command with `home` in command list.
- [x] 1.2 Update help command list to present `home` as primary action.

## Phase 2: Behavior and Compatibility

- [x] 2.1 Add alias mapping `neofetch` -> `home`.
- [x] 2.2 Implement `home` command to replay terminal startup flow.
- [x] 2.3 Keep snapshot rendering via internal helper used during startup.

## Phase 3: Tracking and Validation

- [x] 3.1 Include `home` in tracked command set for GA event emission.
- [x] 3.2 Validate diagnostics for edited files.
- [x] 3.3 Create verify report and archive change.
