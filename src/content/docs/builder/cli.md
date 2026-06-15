---
title: CLI & validation
description: The planned command-line tooling for automating DPG behavioral validation.
---

:::note
Forthcoming. This page will describe the conceptual model for CLI-based behavioral validation of
process models.
:::

The CLI and validation model will describe how DPG analysis is automated through command-line
tooling that consumes the [specification](/dpg-framework/builder/spec-and-tools/). The intended
scope includes:

- **Static behavioral analysis** — automated classification of process model elements by determinism
  category, based on element type, gateway condition analysis, and integration point identification.
- **Runtime profile validation** — comparing process model assumptions against documented
  [runtime profiles](/dpg-framework/builder/runtime-profiles/) and flagging misalignments.
- **Behavioral contract verification** — checking that integration points have associated behavioral
  contracts that meet minimum completeness criteria.
- **Determinism profile reporting** — generating reports for individual processes and portfolios to
  support governance review.
- **CI/CD integration** — incorporating behavioral validation into continuous integration alongside
  structural validation.

In keeping with DPG principles, the tooling will be engine-agnostic, will classify rather than
enforce, will support graduated governance by validation depth, and will complement rather than
replace existing structural validation. Command names, flags, and packaging will be documented once
the tooling is published.
