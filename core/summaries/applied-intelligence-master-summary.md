# Applied Intelligence Master Summary

## System

Applied Intelligence is the parent ecosystem for a connected manufacturing intelligence system.

**Core principle:** Standardize to Optimize  
**Supporting line:** Applied Intelligence Framework  
**Architecture rule:** One ecosystem. Separate agents. Clear roles.

---

## Current Source Structure

Main repo:

kool1160/kool1160-applied-intelligence

Core files:

- shared/source/project-registry.json
- core/bundles/applied-intelligence-master-source.json
- core/bundles/applied-intelligence-app-source.json
- core/bundles/applied-intelligence-website-source.json
- core/summaries/applied-intelligence-master-summary.md

---

## Layer Model

### Core (Source of Truth)

Owns:
- system identity
- agent definitions
- ecosystem rules
- source bundles
- project registry

Rule: Truth belongs in the core

---

### App (Execution Layer)

Owns:
- UI
- runtime behavior
- PWA behavior
- navigation
- AI-Connect execution
- AI-Trace interface

Rules:
- One runtime
- One shell
- One router
- Native modules only
- No detached mini-app behavior
- AI-Connect must remain native

---

### Website (Presentation Layer)

Owns:
- public-facing framework explanation
- agent visualization
- pages and branding

Rules:
- read-only
- no execution
- no mutation
- no redefining core logic

Current version: V15

---

### Agents (Logical Layer)

Agents must stay in their lane:

- AI-Trace
- AI-CIS
- AI-Case
- AI-ROI
- AI-Quote
- AI-RMA
- AI-Connect
- Document Formatter

---

## Data Flow

Core -> App / Website / Agents

Rule: No reverse flow of authority

---

## Current Build State

You now have:

- Project registry (V2)
- Master source bundle
- App source bundle
- Website source bundle (V15)
- Summary file

---

## Next Step

Next we will:

1. Add transform scripts
2. Add build command
3. Auto-generate app + website bundles
4. Stop manual edits to derived files

---

## Key Rule

Update once at the core, then push outward
