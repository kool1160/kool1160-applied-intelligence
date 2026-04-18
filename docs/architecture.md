# Applied Intelligence Architecture Overview

## Purpose

Applied Intelligence is the umbrella ecosystem that organizes specialized agents, shared logic, communication flow, and user-facing delivery layers into one connected system.

## System Model

The repository is designed as a monorepo with four main layers:

1. **Agents**
   Specialist agents with clearly defined boundaries.
2. **Shared**
   Central source-of-truth files, schemas, branding, and cross-project definitions.
3. **Apps**
   User-facing software surfaces including the website and mobile application.
4. **Docs**
   Human-readable architecture, planning, and implementation references.

## Agent Boundaries

### AI-CIS
Continuous improvement only. Valid modes include LIR, LIR-P, LIR-E, and Control.

### AI-Case
Transforms validated improvements into portfolio-ready case studies.

### AI-ROI
Handles ROI, payback, and business justification only.

### AI-Quote
Handles quoting and estimating logic.

### AI-RMA
Handles return / corrective flows.

### AI-Trace
Handles trace logging, summaries, patterns, escalations, and dashboards.

### AI-Connect
The connective communication layer that routes reports, alerts, permissions, meetings, notifications, handoffs, and role-based communication.

## Core Architectural Rule

No agent should drift into a sibling agent's function.

## Shared Source Strategy

The shared source layer should provide:

- ecosystem metadata
- agent registry
- role definitions
- navigation definitions
- branding references
- versioned project source files for website and app builds

## App Layer Intent

The app layer should eventually support:

- dashboards
- reports
- routing and notifications
- role-based communication
- meeting preparation
- incident and trace workflows

## Website Layer Intent

The website layer should eventually support:

- ecosystem overview
- product / agent pages
- architecture and brand storytelling
- feature explanations
- contact / lead capture
- launch and roadmap presentation

## Guiding Principle

**Applied Intelligence is one ecosystem made of clearly separated specialized agents connected by a shared source layer and coordinated through AI-Connect.**
