---
title: Terminology
description: Precise definitions for the vocabulary of Deterministic Process Governance.
---

_Precise definitions for the vocabulary of Deterministic Process Governance._

All DPG documentation uses the following terms with specific, consistent meanings. When these terms
appear in a DPG context, they carry the definitions specified below — not their general-purpose or
colloquial meanings.

## Core Framework Terms

### Deterministic Process Governance (DPG)

A conceptual framework for classifying, measuring, and governing the behavioral predictability of
automated business processes. DPG extends structural governance with behavioral governance,
providing a maturity model, policy framework, and analytical vocabulary for managing the behavioral
dimension of process automation.

### Behavioral Governance

The practice of governing the behavioral predictability of automated processes as a distinct
dimension from structural validity. Behavioral governance examines whether a process will behave as
expected under execution conditions, complementing structural governance which examines whether a
process model is well-formed.

### Structural Governance

The established practice of governing the formal correctness, compliance, and organizational
conformity of process models. Structural governance includes schema validation, naming convention
enforcement, access control, change management, and audit trail maintenance. It is necessary but
insufficient for comprehensive process governance.

### Behavioral Predictability

The degree to which a process's execution behavior can be anticipated from its design-time
specification. A process with high behavioral predictability produces expected outcomes under the
conditions it encounters. A process with low behavioral predictability may produce outcomes that
deviate from design-time expectations.

## Determinism Classification Terms

### Fully Deterministic

A classification applied to process elements or paths whose execution behavior can be predicted
entirely from information available at design time. Fully deterministic elements produce the same
behavior given the same initial conditions, with no dependence on external state, runtime
configuration, or temporal conditions.

### Policy-Dependent Determinism

A classification applied to process elements or paths whose behavior is deterministic within the
boundaries of a defined policy, but where the policy itself introduces controlled variability. The
behavior is predictable when the applicable policy is known. Different policy configurations produce
different but anticipated behavioral outcomes.

### Runtime-Bound

A classification applied to process elements or paths whose behavior depends on conditions that
cannot be fully determined until execution time, and where those conditions are not governed by
explicit policies. Runtime-bound behavior may vary in ways that are difficult to predict or
enumerate in advance. This classification does not imply poor design — it identifies behavioral
characteristics that require appropriate governance attention.

### Determinism Profile

The aggregate determinism classification of a process, summarizing the proportion and distribution
of fully deterministic, policy-dependent, and runtime-bound elements across the process's execution
paths. The determinism profile characterizes the overall behavioral risk profile of the process.

## Runtime Terms

### Runtime Profile

A formalized document describing the behavioral characteristics of a specific execution environment
(engine version, configuration, deployment topology). The runtime profile captures how the engine
interprets BPMN constructs, handles async continuation, manages retries, evaluates timers, and
processes variables — information that affects how process models behave at execution time.

### Runtime Coupling

The degree to which a process model's behavior depends on the specific behavioral characteristics of
the execution engine rather than the model-specified logic. High runtime coupling means the process
behaves differently on different engines or under different engine configurations.

### Runtime Transparency

The principle and practice of making runtime coupling visible and governed. Runtime transparency
requires identifying, documenting, and assessing the points where process behavior depends on
engine-specific semantics.

### Execution Semantics

The specific behavior of an execution engine when interpreting BPMN constructs, particularly in
areas where the BPMN specification allows implementation discretion. Engine-specific execution
semantics include parallel execution models, transaction boundaries, event handling mechanisms, and
multi-instance behavior.

### Async Continuation

A mechanism provided by execution engines to introduce asynchronous breaks in process execution.
Async continuations create new transaction boundaries, affect failure recovery granularity, and
influence performance characteristics. Their presence and configuration represent a form of runtime
coupling.

## Integration Terms

### Behavioral Contract

A specification of the expected behavioral characteristics of an external integration in a process.
A behavioral contract extends the technical interface contract (request/response format) with
behavioral specifications: response time expectations, idempotency guarantees, failure signaling
mechanisms, consistency guarantees, rate limits, and documented side effects.

### Contract-First Integration

The principle and practice of defining behavioral contracts for external integrations before or
during process design, and governing those integrations against their contracts. Contract-first
integration ensures that the behavioral assumptions embedded in process models are explicit,
documented, and verifiable.

## Governance Terms

### Governance Tier

A classification level within the DPG policy model that determines the behavioral assurance
requirements for a process. Processes are assigned to governance tiers based on business
criticality, integration complexity, execution frequency, and regulatory exposure. Higher tiers
require more rigorous behavioral analysis and documentation.

### Behavioral Assurance

The level of confidence that a process will behave as expected under the conditions it will
encounter. Behavioral assurance is achieved through determinism classification, runtime profile
documentation, behavioral contract coverage, and simulation validation. The required level of
behavioral assurance varies by governance tier.

### Policy Model

The framework within DPG that defines how behavioral governance is operationalized: process
classification criteria, behavioral assurance requirements per governance tier, assessment cadence,
and escalation procedures. The policy model adapts to organizational context and matures over time.

## Simulation Terms

### Behavioral Simulation

The execution of a process model under controlled conditions to validate behavioral expectations.
Behavioral simulation tests whether the process behaves as designed under various conditions,
including normal execution, policy variations, integration failures, and boundary conditions.

### Path Coverage

A simulation metric measuring the proportion of possible execution paths that have been exercised
during behavioral simulation. Higher path coverage provides greater confidence in the behavioral
assessment, but absolute coverage may not be achievable or necessary for all processes.

### Behavioral Regression

An unintended change in the behavioral characteristics of a process resulting from model changes,
engine updates, configuration changes, or external system changes. Behavioral regression testing
validates that behavioral characteristics remain consistent after changes.

## Maturity Terms

### Maturity Stage

One of five progressive levels in the DPG Maturity Framework — Unaware, Aware, Structured, Measured,
Optimizing — that describe the development of behavioral governance capability in an organization.
Each stage is characterized by specific indicators and builds on the preceding stage.

### Behavioral Governance Maturity

The overall development of an organization's capability to classify, measure, and govern the
behavioral predictability of its automated processes. Maturity is assessed through observable
indicators across multiple dimensions: vocabulary adoption, practice standardization, tooling,
measurement, and cultural integration.

## Architectural Terms

### Architectural Signal

An indicator or pattern observable in a process model or process portfolio that reveals information
about behavioral characteristics, governance maturity, or structural-behavioral governance
alignment. DPG uses architectural signals to inform assessment and advisory recommendations.

### Governance Dimension

An axis along which governance operates. Structural governance and behavioral governance are two
distinct governance dimensions. DPG does not replace the structural dimension — it adds the
behavioral dimension, making governance multidimensional.

### Maturity Lens

The use of DPG as an analytical perspective for evaluating an organization's process automation
program. The maturity lens provides a structured view of behavioral governance capability, distinct
from and complementary to assessments of structural governance, technical maturity, or delivery
maturity.
