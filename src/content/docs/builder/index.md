---
title: Builder track
description: Specifications, schemas, and tooling for implementing Deterministic Process Governance.
---

_Specifications, schemas, and tooling._

The Builder track is for engineers who implement and integrate Deterministic Process Governance
(DPG) in real systems. Where the [Consultant track](/dpg-framework/consultant/) presents DPG as a
way of reasoning about behavioral predictability, this track is about turning that reasoning into
machine-readable artifacts and repeatable checks: classifying a process, documenting its runtime
coupling, governing its integrations through behavioral contracts, and validating expectations
before deployment.

## Where to start

- **[Getting started](/dpg-framework/builder/getting-started/)** — a phased path for adopting DPG in
  an existing BPM program, from first analysis through integration to maturation.
- **[Runtime profiles](/dpg-framework/builder/runtime-profiles/)** — how to capture the behavioral
  characteristics of an execution environment so that runtime coupling can be assessed and
  validated.
- **[Specification & tools](/dpg-framework/builder/spec-and-tools/)** — where DPG's normative,
  machine-readable artifacts and the tooling that consumes them live.

## Forthcoming

- **[CLI & validation](/dpg-framework/builder/cli/)** — the command-line validation model.
- **[Reference implementation](/dpg-framework/builder/reference-implementation/)** — a concrete
  implementation demonstrating the specification end to end.

The normative schemas, profiles, and conformance fixtures are developed in the separate `dpg-spec`
project; this track links to them as they become available.
