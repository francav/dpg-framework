---
title: Simulation as Feedback
description: Simulation brings behavioral validation into the development workflow, reinforcing agile feedback loops before deployment.
---

_Simulation reinforces agile feedback loops._

## Context

In traditional BPM delivery, behavioral validation is largely a post-deployment activity. Processes
are designed, reviewed for structural compliance, and deployed. Behavioral issues — unexpected path
execution, timing problems, integration failures — are discovered in production through monitoring,
incident reports, and operational observation.

This sequence creates a problematic feedback loop. Behavioral insights arrive late, after the
process has been deployed and potentially after it has affected business operations. The cost of
addressing behavioral issues in production is significantly higher than addressing them during
design or development: production fixes require change management, regression testing, and
operational coordination.

Agile delivery reduces feedback latency in many dimensions — feature validation through demos, code
quality through CI, integration through continuous deployment. But behavioral feedback for process
automation often remains trapped in the late-stage pattern.

Simulation addresses this gap by providing a mechanism for behavioral feedback during design and
development, before the process is deployed to a production execution engine.

## Core Concept

Process simulation, in the context of Deterministic Process Governance, is the execution of a
process model under controlled conditions to validate behavioral expectations. It is not performance
testing. It is not load simulation. It is behavioral validation: does the process behave as the
designer expects under the conditions it will encounter?

Simulation serves several distinct purposes within DPG:

### Path Validation

Verifying that all expected execution paths are reachable and that unexpected paths are identified.
This includes exercising gateway conditions to ensure that all branches produce the expected
downstream behavior, and identifying dead paths that no combination of inputs can activate.

### Behavioral Boundary Testing

Exploring the process behavior at the boundaries of its determinism classification. For
policy-dependent elements, simulation exercises the process under different policy configurations.
For runtime-bound elements, simulation tests the process under various assumptions about external
system behavior — including failure scenarios, delayed responses, and unexpected data.

### Temporal Behavior Validation

Validating that timer events, timeout configurations, and temporal dependencies produce the expected
process behavior. This is particularly important for processes with complex temporal interactions,
where multiple timers or deadline-driven paths may interact in ways that are difficult to predict
from static model analysis.

### Integration Behavior Simulation

Simulating external integration behavior to validate the process response to various integration
outcomes. This uses the behavioral contracts defined under the contract-first integration principle:
the simulation exercises the process against the expected, boundary, and failure cases specified in
each integration contract.

### Concurrency Behavior Exploration

Exploring how the process behaves under concurrent execution: multiple instances, parallel branches,
and shared resource access. Concurrency-related behavioral issues are among the most difficult to
detect through static analysis and among the most impactful in production.

## Architectural Implications

**Simulation must be embedded in the development workflow.** For simulation to function as a
feedback mechanism, it cannot be a separate activity performed by a specialized team. It must be
accessible to the process developers during their normal workflow, with low ceremony and fast
execution.

**Simulation environments must approximate runtime profiles.** The value of simulation depends on
the fidelity of the simulation environment. If the simulation does not reflect the actual execution
engine's behavior, the feedback it provides may be misleading. Simulation environments should be
configured according to the runtime profiles documented under the runtime transparency principle.

**Simulation scenarios must be systematic.** Effective behavioral simulation requires structured
scenarios, not ad-hoc exploration. Scenarios should be derived from the determinism classification:
each policy-dependent element requires scenarios for each relevant policy variation; each
runtime-bound element requires scenarios for expected, boundary, and failure conditions.

**Simulation results must be interpretable.** Simulation produces behavioral data: execution traces,
timing information, path coverage metrics, and integration behavior records. This data must be
presented in a form that supports behavioral analysis, not buried in raw logs. Effective simulation
tooling provides visualizations and summaries that highlight behavioral characteristics of interest.

## Governance Impact

Simulation supports governance by providing evidence of behavioral validation. Governance reviews
can verify:

- Has the process been simulated against its required scenarios?
- What is the path coverage of the simulation?
- Were behavioral boundary conditions exercised?
- Were integration failure scenarios simulated?
- Did the simulation results align with behavioral expectations?

This evidence-based approach to behavioral governance is more reliable than relying on designer
assertions or post-deployment observation. It provides concrete data about behavioral
characteristics before the process reaches production.

Simulation also supports governance of process changes. When a process is modified, simulation can
validate that the behavioral characteristics have not changed unexpectedly — a behavioral regression
test that complements structural regression testing.

## Alignment with Agile

Simulation is inherently compatible with agile delivery because it is, at its core, a feedback
mechanism. It provides the behavioral equivalent of the rapid feedback loops that agile practices
establish for functional and technical quality.

**Sprint-embedded simulation.** Process simulation runs during development sprints, not after sprint
completion. Developers simulate progressively as they build, validating behavioral expectations
incrementally rather than deferring all behavioral validation to a late integration phase.

**Simulation-driven design.** Like test-driven development, simulation can inform design decisions.
Understanding the behavioral implications of design choices during the design activity — rather than
after implementation — leads to designs that are more behaviorally transparent from the start.

**Continuous simulation.** Simulation scenarios can be automated and included in continuous
integration pipelines, providing ongoing behavioral feedback as the process evolves. When behavioral
regressions occur — a model change inadvertently alters behavioral characteristics — the CI pipeline
detects them before deployment.

**Exploratory simulation.** Beyond structured scenarios, teams can use exploratory simulation to
investigate "what if" questions: What happens if this external service takes 10x longer than
expected? What happens if this policy changes next quarter? This exploratory mode supports agile
planning and risk assessment.

## Summary

Simulation as feedback brings behavioral validation into the development workflow, providing early,
structured, and repeatable insights into how a process will behave under real-world conditions.
Rather than relying on post-deployment observation to discover behavioral issues, simulation enables
teams to validate behavioral expectations during design and development — reducing surprise and
increasing confidence. When combined with the other DPG principles, simulation provides the
practical mechanism for verifying that behavioral governance, determinism classification, runtime
transparency, and contract-first integration produce the expected behavioral outcomes.
