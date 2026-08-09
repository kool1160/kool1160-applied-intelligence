# Applied Intelligence

Applied Intelligence is the parent ecosystem for a family of specialized manufacturing and operations agents, plus the shared website and application layers that bring the system together.

## Purpose

This repository is the master ecosystem/source hub for:

- Applied Intelligence ecosystem definitions
- shared source-of-truth files
- agent specifications
- website project assets
- app project assets
- shared branding and schema references
- repository-family and historical-lineage documentation

## Core Principle

**One ecosystem. Separate agents. Clear roles.**

## Primary Slogan

**Standardize to Optimize**

## Supporting Line

**Applied Intelligence Framework**

## Ecosystem Agents

- **AI-Trace — See it**: visibility, logging, patterns, dashboards, and repeat-issue ranking
- **AI-CIS — Structure it**: continuous improvement, LIR/LIR-P/LIR-E, control, problem definition, and corrective direction
- **AI-ROI — Prove it**: ROI, payback, business case, capacity, savings, and justification
- **AI-Case — Tell it**: portfolio stories, case studies, interview stories, and project narratives
- **AI-Quote — Price it**: weld, grind, fixture, finish, cobot, and flow-aware estimating logic
- **AI-RMA — Contain it**: returns, failures, containment, corrective action, and closure loops
- **AI-CAS — Correct it**: guided capture, evidence context, AI drafting support, and corrective-action records
- **AI-Connect — Move it**: routing, notifications, handoffs, meetings, permissions, and work-linked chat
- **Document Formatter — Present it**: Word-ready, PDF-ready, binder-ready, and branded finished outputs

Agent boundaries matter. A specialist should own its lane and hand off cleanly rather than silently absorbing a sibling agent's job.

## Repository Structure

```text
applied-intelligence/
  README.md
  docs/
  shared/
    branding/
    schemas/
    source/
  apps/
    website/
    mobile-app/
  agents/
    ai-trace/
    ai-cis/
    ai-roi/
    ai-case/
    ai-quote/
    ai-rma/
    ai-cas/
    ai-connect/
    document-formatter/
```

The structure above describes the ecosystem organization. Individual products may continue to live in separate repositories where that is operationally cleaner.

## Source of Truth

The `shared/source/` directory is intended to hold master ecosystem definitions used by the website, app, and agent projects.

For a separately governed product such as AI-CAS, that product's own current source-of-truth and operating files remain authoritative for its active implementation. Historical names or stale child-repository README text do not redefine the current ecosystem identity.

## Related repository family

Applied Intelligence spans multiple repositories with different roles and generations. See [`docs/REPOSITORY_FAMILY.md`](docs/REPOSITORY_FAMILY.md) before treating an older repository as obsolete or unrelated.

The family map identifies the master source hub, active application, public website, AI-WOC prototype/successor lineage, AI-CAS flagship role, and the history-preservation rule for the ecosystem.

Applied Intelligence was Chris Hilton's first system built with AI and remains an active brand/domain. The goal is to **organize the history, not erase it**.

## Current Status

This repository is the parent organization/source hub for the Applied Intelligence ecosystem. Product-specific implementation status lives in the applicable child repository.
