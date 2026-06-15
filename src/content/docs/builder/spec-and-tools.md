---
title: Specification & tools
description: Where DPG's normative, machine-readable artifacts live and how tooling consumes them.
---

_The machine-readable side of DPG — the artifacts engineers build against, and the tooling that
consumes them._

## The specification project

The conceptual framework documented here describes what DPG is and why it matters. The normative,
machine-readable side of DPG lives in a separate `dpg-spec` project. That project is the home for
the artifacts that tooling and integrations build against:

- **JSON Schemas** for the core DPG artifacts — determinism classifications, runtime profiles, and
  behavioral contracts — so that these can be authored, validated, and exchanged in a standard form.
- **Runtime profiles** as structured, versioned descriptions of the behavioral characteristics of
  execution environments. See [Runtime profiles](/dpg-framework/builder/runtime-profiles/) for the
  conceptual model these schemas formalize.
- **Policy packs** that express governance tiers and the behavioral assessment depth expected at
  each tier.
- **Conformance fixtures** — example models and expected outputs that let an implementation
  demonstrate that it interprets the specification correctly.

Keeping these artifacts in a dedicated project separates the stable, normative contract from the
narrative documentation, and lets tooling depend on the specification directly.

:::note
The concrete schemas, profiles, policy packs, and fixtures are forthcoming. This page describes the
intended shape of the specification; the artifacts themselves are published from the `dpg-spec`
project as they stabilize.
:::

## How tooling consumes the specification

DPG is designed to be supported by tooling — a compiler and command-line interface (CLI) — that
reads the specification artifacts and applies them to process models. Conceptually, the tooling:

- Loads the JSON Schemas to validate that DPG artifacts are well-formed.
- Reads runtime profiles and policy packs to drive analysis and reporting.
- Uses conformance fixtures to verify its own behavior against the specification.

This keeps the analysis engine-agnostic: the tooling operates on standard models and the shared
specification rather than on any single execution platform. The planned validation behavior is
described in [CLI & validation](/dpg-framework/builder/cli/), and a worked example of the artifacts
in context is described in the
[reference implementation](/dpg-framework/builder/reference-implementation/).

:::note
The compiler and CLI are forthcoming. Command names, flags, and package details will be documented
once the tooling is published. Until then, treat the tooling described here as the intended target,
not a released product.
:::
