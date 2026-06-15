---
title: Contract-First Integration
description: External integrations are governed through behavioral contracts that specify timing, idempotency, failure modes, and consistency.
---

_External integrations are governed through behavioral contracts._

## Context

Process automation rarely operates in isolation. Most enterprise processes involve integrations with
external systems: REST APIs, message queues, databases, third-party SaaS platforms, legacy systems,
and internal microservices. Each integration point is a boundary where the process model's
behavioral assumptions meet the reality of external system behavior.

In many BPM programs, integration governance focuses on technical connectivity: can the process
invoke the endpoint? Is the authentication configured? Is the data format correct? These questions
address structural integration. They do not address behavioral integration: will the external system
respond within expected timeframes? Will it behave idempotently on retry? Will it maintain
consistency under concurrent access? What happens when it is unavailable?

The gap between structural and behavioral integration mirrors the broader gap that Deterministic
Process Governance addresses. A process can be structurally integrated — all endpoints configured,
all data mappings defined — and still behave unpredictably because the behavioral characteristics of
the integration are ungoverned.

## Core Concept

Contract-first integration requires that every external integration in an automated process be
governed by a behavioral contract that specifies not just the technical interface but the expected
behavioral characteristics of the interaction.

A behavioral contract addresses:

### Response Behavior

The expected response time, acceptable latency ranges, and timeout thresholds. This is not merely a
performance concern — it directly affects process behavior. A service task with a 30-second timeout
produces different process behavior than one with a 5-minute timeout, and the choice must be
conscious and documented.

### Idempotency

Whether the external operation can be safely retried without producing duplicate effects. This is
critical for failure recovery. If a service task fails after the external system has processed the
request but before the process engine records success, retry behavior depends entirely on whether
the operation is idempotent. This property must be specified, not assumed.

### Failure Modes

The known failure modes of the external system and the expected process behavior for each. Silent
failures — where the external system returns success but does not perform the expected action — are
particularly dangerous because they are invisible to the process engine. The behavioral contract
must specify how failures are signaled and what the process should do in each case.

### Consistency Guarantees

Whether the external system provides transactional guarantees, eventual consistency, or no
consistency guarantees at all. This affects how the process model handles compensation, rollback,
and data integrity across integration boundaries.

### Rate Limits and Throttling

Whether the external system imposes rate limits that could affect process throughput. In high-volume
process automation, hitting rate limits can produce unexpected delays, failures, or behavioral
changes that the process model does not anticipate.

### Side Effects

Whether the external operation produces side effects beyond its primary function: sending
notifications, triggering downstream processes, writing audit logs, updating shared state. Side
effects that are not documented in the behavioral contract can produce unexpected behavioral
interactions between processes.

## Architectural Implications

**Integration design must include behavioral analysis.** When a process designer introduces an
external integration, the design activity must include analysis of the behavioral characteristics,
not just the technical interface. This analysis produces the behavioral contract.

**Behavioral contracts must be versioned and maintained.** External systems evolve. Their behavioral
characteristics change over time — response times shift, failure modes change, idempotency
guarantees are added or removed. Behavioral contracts must be treated as living documents, versioned
alongside the process models that depend on them.

**Integration testing must validate behavioral contracts.** Technical integration tests verify
connectivity and data format. Behavioral integration tests verify the behavioral contract: response
time under load, idempotency under retry, failure signaling accuracy, consistency behavior during
concurrent access. Both types of testing are necessary.

**Fallback strategies must be explicit.** For every integration point where the behavioral contract
identifies non-trivial failure modes, the process model should include explicit fallback behavior:
compensation, retry with backoff, alternative path activation, or graceful degradation. These
fallback strategies handle the cases where external behavior deviates from the contract.

## Governance Impact

Contract-first integration transforms integration governance from a connectivity checklist to a
behavioral assessment.

Governance reviews for processes with external integrations should verify:

- Does a behavioral contract exist for each integration point?
- Does the contract specify response behavior, idempotency, failure modes, and consistency
  guarantees?
- Has the contract been validated through behavioral integration testing?
- Does the process model include fallback behavior for contract violations?
- Is the contract versioned and maintained alongside the process model?

This level of governance may seem demanding, but it is proportional to the risk. External
integrations are the primary source of runtime-bound behavior in most enterprise processes.
Governing them through behavioral contracts is the most effective way to manage that behavioral
risk.

For integrations within the organization's control (internal services, managed APIs), behavioral
contracts can be detailed and well-validated. For integrations with third-party systems, contracts
may be partially based on documented SLAs and partially based on observed behavior. In either case,
making the behavioral expectations explicit is a significant improvement over leaving them implicit.

## Alignment with Agile

Contract-first integration aligns with agile practices that already emphasize contract-driven
development:

**Consumer-driven contracts.** In microservice architectures, consumer-driven contract testing is an
established practice. Behavioral contracts extend this concept to BPM integrations, specifying not
just the structural contract (request/response format) but the behavioral contract (timing,
idempotency, failure modes).

**Contract specification during story refinement.** When a user story involves external integration,
the behavioral contract can be specified during story refinement. This ensures that the team
discusses and documents behavioral expectations before implementation, rather than discovering
behavioral issues during testing or production.

**Incremental contract development.** Behavioral contracts can start simple and become more detailed
as the team gains experience with the external system. An initial contract might specify only
response time and basic failure modes. Over subsequent sprints, the contract can be refined to
include idempotency guarantees, consistency behavior, and rate limit specifications.

**Contract validation in CI/CD.** Behavioral contract tests can be included in the continuous
integration pipeline, providing early warning when external system behavior drifts from documented
expectations.

## Summary

Contract-first integration addresses the behavioral dimension of process integration by requiring
explicit behavioral contracts for external system interactions. These contracts document the
behavioral expectations — response time, idempotency, failure modes, consistency — that process
models depend on. By making these expectations explicit and governed, organizations reduce the
primary source of runtime-bound behavior in their process portfolios and gain a structured approach
to managing integration risk.
