# Applied Intelligence Source Workflow

## Purpose

This document defines the source workflow for the Applied Intelligence ecosystem.

The goal is to keep the app, website, and agent definitions aligned without duplicating or manually rewriting source logic in multiple places.

## Core Rule

Update once at the core, then push outward.

## Source Authority

The master source file is the source of truth:

`core/bundles/applied-intelligence-master-source.json`

Derived bundle files are generated from the master source:

- `core/bundles/applied-intelligence-app-source.json`
- `core/bundles/applied-intelligence-website-source.json`

The project registry defines the system layers:

`shared/source/project-registry.json`

## Normal Workflow

### Step 1: Edit the Master Source

Make ecosystem-level changes only in:

`core/bundles/applied-intelligence-master-source.json`

Examples:

- agent definitions
- agent boundaries
- commands
- system rules
- UI color/icon maps
- source links

Do not manually edit derived app or website bundles for core logic.

### Step 2: Run the Source Build

Run:

```bash
npm run build:sources
```

Expected output:

```text
App source built
Website source built
All sources built successfully
```

### Step 3: Review Generated Files

Only these generated files should change after a normal source build:

- `core/bundles/applied-intelligence-app-source.json`
- `core/bundles/applied-intelligence-website-source.json`

If unrelated files change, stop and review before merging.

### Step 4: Create a Pull Request

Create a PR for generated bundle updates.

The PR should explain:

- what changed in the master source
- which bundles were regenerated
- that `npm run build:sources` completed successfully

### Step 5: Merge After Review

Merge only after confirming the generated files are correct.

## Layer Rules

### Core

Truth belongs in the core.

### App

Execution belongs in the app.

The app reads from the app source bundle and must not redefine ecosystem logic.

### Website

Presentation belongs in the website.

The website reads from the website source bundle and must not execute agents or mutate system data.

### Agents

Agents must stay in their defined lanes and respect sibling boundaries.

## Do Not Do This

- Do not manually edit app and website bundles for core logic.
- Do not duplicate agent definitions across projects.
- Do not let the app redefine the master ecosystem.
- Do not let the website become an execution layer.
- Do not mix AI-CIS, AI-ROI, AI-Case, AI-Quote, AI-RMA, AI-Trace, AI-Connect, or Document Formatter responsibilities.

## Quick Command

```bash
npm run build:sources
```

## Key Principle

One ecosystem. Separate agents. Clear roles.
