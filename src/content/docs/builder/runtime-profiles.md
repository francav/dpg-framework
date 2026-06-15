---
title: Runtime profiles
description: A formalized description of the behavioral characteristics of an execution environment.
---

_A formalized description of the behavioral characteristics of the execution environment._

## Context

Process models are designed in abstraction. They specify the logical flow of activities, decisions,
events, and interactions. When these models are deployed to an execution engine, they enter a
runtime environment that interprets and executes them according to the engine's specific semantics,
configuration, and operational context.

The gap between model abstraction and runtime reality is a primary source of behavioral
unpredictability. A process model designed without reference to its runtime environment may carry
assumptions that do not hold in production. A process model designed tightly to one runtime
environment may not be portable to another.

Runtime profiles bridge this gap by formalizing the behavioral characteristics of the execution
environment into a documented, versioned artifact that can be referenced during design, used during
simulation, and verified during deployment.

## What a runtime profile contains

A runtime profile is a structured document that describes the behavioral characteristics of a
specific execution environment. It is not an engine manual or a configuration dump. It is a curated
description of the behavioral properties that affect process model execution.

### Engine identity

The execution engine name, version, and deployment topology (single-node, clustered, cloud-managed).
Different versions of the same engine may have different behavioral characteristics, and deployment
topology affects concurrency, timer resolution, and failure handling.

### Execution semantics

How the engine interprets BPMN constructs, with particular attention to areas where the BPMN
specification allows implementation discretion:

- **Parallel execution model** — Whether parallel branches execute truly concurrently
  (multi-threaded), pseudo-concurrently (interleaved), or sequentially. This affects race
  conditions, variable visibility, and timing behavior.

- **Transaction boundaries** — How the engine defines transactional scope for process execution.
  Whether each BPMN transaction maps to a database transaction, whether async continuations create
  new transaction boundaries, and how nested transactions (sub-processes) are handled.

- **Event handling** — How the engine processes events: polling frequency for timer events, message
  correlation mechanisms, signal broadcast scope, and the handling of boundary events on active
  tasks.

- **Multi-instance behavior** — How the engine executes multi-instance activities: sequential vs.
  parallel, completion conditions, variable scoping within instances, and error propagation from
  instances to the parent scope.

### Async continuation configuration

The engine's default and configured async continuation behavior:

- Which BPMN elements have async continuation enabled by default.
- How async jobs are scheduled and prioritized.
- The impact of async continuation on transaction boundaries and failure recovery.
- Job executor configuration: thread pool size, acquisition interval, and backoff behavior.

### Retry and incident management

The engine's default retry behavior for failed jobs:

- Number of retry attempts before an incident is created.
- Retry interval and backoff strategy.
- How retries interact with transaction boundaries.
- Incident creation, escalation, and resolution mechanisms.

### Timer characteristics

The engine's timer implementation details:

- Timer resolution (how frequently timer due dates are evaluated).
- Timer accuracy under load (how much deviation from specified times is normal).
- Timer behavior in clustered deployments (which node evaluates timers, how conflicts are resolved).

### Variable handling

How the engine manages process variables:

- Supported variable types and serialization formats.
- Variable scope rules (process instance, execution, task).
- Variable visibility across concurrent executions.
- Size limits and performance characteristics for different variable types.

### Integration capabilities

The engine's built-in integration mechanisms:

- HTTP connector behavior, timeout defaults, and retry configuration.
- Message queue integration semantics.
- External task patterns and their behavioral characteristics.
- Connector framework configuration and extension points.

## Using runtime profiles

### During design

Process designers reference the runtime profile when making design decisions that have behavioral
implications. When introducing a parallel gateway, the designer consults the runtime profile to
understand whether parallel execution is truly concurrent in this environment. When configuring a
timer event, the designer checks the timer resolution. When designing retry logic, the designer
considers the engine's default retry behavior and decides whether to override it.

### During simulation

Simulation environments are configured according to the runtime profile to ensure that simulation
results reflect the behavioral characteristics of the target execution environment. This includes
configuring timer behavior, async continuation, variable handling, and integration simulation to
match the runtime profile specifications.

### During review

Governance reviews include verification that design decisions align with the documented runtime
profile. When a process model assumes concurrent parallel execution but the runtime profile
indicates sequential execution, this misalignment is identified during review rather than discovered
in production.

### During migration

When an organization migrates between engine versions or engine platforms, runtime profiles provide
the analytical framework for assessing migration risk. By comparing the runtime profiles of the
source and target environments, the organization can identify behavioral differences that may affect
process behavior and prioritize testing accordingly.

## Maintaining runtime profiles

Runtime profiles are living documents. They must be updated when:

- The engine version is upgraded and behavioral characteristics change.
- Engine configuration is modified (async continuation defaults, retry policies, timer
  configuration).
- The deployment topology changes (single-node to clustered, on-premise to cloud-managed).
- Behavioral anomalies are discovered that are not reflected in the current profile.

Each update should be versioned and associated with a date, enabling traceability between process
design decisions and the runtime profile that was current at the time of design.

## Summary

Runtime profiles formalize the behavioral characteristics of the execution environment into a
documented artifact that supports design, simulation, review, and migration decisions. They make
explicit the assumptions that process models carry about their runtime environment and provide a
reference point for validating those assumptions. In DPG, runtime profiles are a critical tool for
achieving [runtime transparency](/dpg-framework/consultant/concepts/runtime-transparency/) —
transforming engine behavior from an implicit, assumed property into an explicit, governed one.
