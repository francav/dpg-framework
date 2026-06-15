---
title: Frequently Asked Questions
description: Common questions about Deterministic Process Governance and its scope.
---

## Is DPG a product?

No. DPG is a conceptual framework — a structured way of thinking about, classifying, and governing
the behavioral characteristics of automated processes. It is not a software product, a platform, or
a commercial offering. It is a body of structured knowledge intended to advance the practice of
behavioral governance in enterprise BPM.

## Does DPG replace existing governance frameworks?

No. DPG extends existing governance frameworks. Most organizations have mature structural
governance: model validation, compliance checks, deployment approvals, access controls, audit
trails. These mechanisms remain necessary. DPG adds a behavioral dimension to this governance —
examining whether processes behave predictably under execution conditions, which structural
governance alone cannot assess. The two dimensions complement each other.

## Is DPG prescriptive about which BPMN engine to use?

No. DPG is engine-agnostic. The concepts of determinism classification, behavioral governance,
runtime transparency, and contract-first integration apply regardless of the execution engine. DPG
acknowledges that different engines have different behavioral characteristics — this is precisely
what runtime profiles document — but it does not advocate for or against any particular engine.

## Does DPG require all processes to be fully deterministic?

No. DPG explicitly rejects deterministic purity as a goal. Full determinism is achievable for
simple, isolated processes but impractical for complex, integrated processes that interact with the
real world. DPG treats determinism as a spectrum and uses classification (fully deterministic,
policy-dependent, runtime-bound) to make behavioral characteristics visible. The goal is visibility
and appropriate governance, not the elimination of all runtime-bound behavior.

## How does DPG relate to agile delivery?

DPG is designed to be fully compatible with agile delivery practices. It does not introduce
sequential gates, heavyweight documentation requirements, or approval bottlenecks. Instead, DPG
extends the feedback loops that characterize agile delivery into the behavioral domain:

- Behavioral classification informs sprint planning and design discussions.
- Simulation provides rapid behavioral feedback during development sprints.
- Behavioral contracts are developed incrementally alongside integrations.
- Behavioral metrics support continuous improvement through retrospectives.

DPG strengthens agility by reducing behavioral surprise in production, which reduces the reactive
incident work that erodes sprint capacity.

## What is the difference between structural and behavioral governance?

Structural governance validates the form of a process model: schema compliance, naming conventions,
organizational standards, access controls. It answers: "Is this model well-formed?"

Behavioral governance examines the predictability of process execution: runtime dependencies,
integration behavior, temporal interactions, engine-specific coupling. It answers: "Will this model
behave as expected?"

A process can pass all structural validation and still behave unpredictably at runtime. Structural
and behavioral governance address different dimensions of process quality. Both are necessary.

## How long does DPG adoption take?

DPG adoption is incremental, not a one-time initiative. The initial phases — establishing
vocabulary, conducting pilot behavioral analysis, and producing the first behavioral artifacts — can
be accomplished in weeks. Integrating behavioral governance into established governance processes
typically requires several months. Achieving mature behavioral governance (Stage 4–5 in the maturity
framework) typically develops over one to two years, depending on organizational context and
investment.

## What skills does behavioral governance require?

Behavioral governance requires practitioners who understand execution engine semantics, integration
patterns, and the operational context in which processes execute. This expertise often already
exists in organizations — in operations teams, senior developers, and infrastructure architects —
but may not be applied to governance activities. DPG provides the framework for channeling this
expertise into governance processes.

## Does DPG apply only to BPMN?

The concepts of DPG — behavioral predictability, determinism classification, runtime transparency,
contract-first integration — are applicable to any form of process or workflow automation. The
current articulation uses BPMN terminology because BPMN is the dominant standard for enterprise
process automation, but the principles extend to CMMN, DMN, workflow engines, RPA, and other
automation paradigms.

## How does DPG handle processes that are inherently unpredictable?

DPG does not attempt to make inherently unpredictable processes deterministic. Instead, it
classifies them appropriately (typically as runtime-bound) and ensures that the unpredictability is
visible, documented, and governed proportionally. The governance response to runtime-bound behavior
includes monitoring, fallback strategies, operational readiness, and incident management — not the
elimination of the behavior itself.

## Where can I learn more about the philosophical foundations of DPG?

The philosophical foundations of DPG — its epistemological position, ontology of process automation,
views on determinism, and alignment with agile — are documented in the framework's governance
materials. These foundations establish that DPG is not an anti-runtime ideology or a deterministic
purity doctrine, but a clarity strategy that makes uncertainty visible rather than promising its
removal.
