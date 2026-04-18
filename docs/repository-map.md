# Repository Map

This repository is the master monorepo for the Applied Intelligence ecosystem.

## Top-Level Structure

- `docs/` — architecture, maps, planning notes, and system references
- `shared/` — source-of-truth data, schemas, and shared branding references
- `agents/` — specialist agent shells and definitions
- `apps/` — user-facing delivery layers including website and mobile app

## Shared Strategy

Both the website and mobile app should read from shared source files instead of maintaining duplicate ecosystem definitions.

## Directory Intent

### `shared/source/`
Contains ecosystem metadata, agent registry, navigation mapping, and delivery-layer source definitions.

### `shared/schemas/`
Contains reusable schemas for permissions, UI cards, routes, and other shared structures.

### `agents/`
Contains one directory per Applied Intelligence agent.

### `apps/website/`
Website-specific starter structure and future frontend implementation.

### `apps/mobile-app/`
Mobile app-specific starter structure and future implementation.

## Core Rule

**One ecosystem. Separate agents. Clear roles.**
