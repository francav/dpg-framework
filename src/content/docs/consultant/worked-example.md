---
title: Worked example
description: A real loan pre-approval process taken end to end through the DPG methodology, from framing to a classified result.
sidebar:
  order: 3
---

_A single process taken end to end through the method — from engagement framing to a classified,
governable result._

This worked example follows one process all the way through Deterministic Process Governance. It is
deliberately small enough to read in full, yet realistic enough to exhibit every classification
category and the most common governance findings. The process — a **Loan Pre-Approval Process** — is
the [`loan-preapproval` conformance fixture](/dpg-framework/builder/spec-and-tools/) that ships with
the specification, so every classification and number shown here is reproducible against the
reference implementation rather than illustrative.

The walk-through mirrors the [methodology](/dpg-framework/consultant/methodology/): frame the
engagement, establish the governance context, classify the process against that context, read the
findings, and translate the result into governance action. Throughout, the vocabulary is the shared
DPG [terminology](/dpg-framework/consultant/terminology/) and the categories are the three from
[determinism classification](/dpg-framework/consultant/concepts/determinism-classification/).

## The process

A retail lender automates the first stage of loan origination. The process is modeled in BPMN and
backed by a DMN decision table. End to end, it does this:

1. **Loan Application Received** — a start event for an inbound application.
2. **Check Credit Score** — a service task that calls an external credit bureau.
3. **Calculate Eligibility Score** — a business rule task that evaluates the `eligibility-score`
   decision table.
4. **Low Risk?** — an exclusive gateway that branches on the eligibility result.
5. On the low-risk path, **Calculate Interest Rate** — a script task — sets the offered rate.
6. On the high-risk path, **Request Manual Review** — a second service task that hands off to a
   review queue.
7. **Approved?** — an exclusive gateway that branches to **Send Approval Letter** /
   **Loan Pre-Approved**, or **Send Rejection Letter** / **Loan Rejected**.

It is a structurally clean model: it would pass any conventional structural-governance review. The
question DPG asks is the one structural governance does not — _how predictably does it behave?_

## Step 1 — Frame the engagement

Before classifying anything, the advisor fixes the governance context, because classification is
relative to it (see _classification depends on boundary definitions_ in
[determinism classification](/dpg-framework/consultant/concepts/determinism-classification/)). For
this engagement:

- **Execution environment:** Camunda 7 (7.23). The runtime profile for that engine is the reference
  point for what counts as engine-specific behavior.
- **Governance policy:** the baseline behavioral policy at **tier 2**. Tier 2 is the engine-agnostic
  / policy-dependent tier — it accepts policy-dependent and profile-scoped behavior, and reserves
  its strongest assurances for the integration boundaries.

These two choices — engine profile and governance tier — are the entire "context" the rest of the
analysis is measured against. Changing either can change the result, which is exactly why the
methodology insists they be stated explicitly and recorded with the assessment.

## Step 2 — Classify the process

With the context fixed, the process is classified element by element. Each point where behavior is
decided — a gateway condition, a service call, a decision-table rule — becomes an _evaluation point_
and is placed on the determinism spectrum. The result for this process:

| Element                       | Type                    | Classification          | Why                                                                                 |
| ----------------------------- | ----------------------- | ----------------------- | ----------------------------------------------------------------------------------- |
| Low Risk? — `Yes` flow        | Gateway condition       | **Fully deterministic** | Condition decided entirely from in-process variables.                               |
| Approved? — `Yes` flow        | Gateway condition       | **Fully deterministic** | Decided in-process; flagged engine-specific for this profile.                       |
| Calculate Eligibility Score   | Business rule task      | **Policy-dependent**    | Routes on the `eligibility-score` decision table — governed, versioned variability. |
| `eligibility-score` rules (4) | DMN rules               | **Policy-dependent**    | Each rule's outcome is fixed by the table, which is an explicit policy artifact.    |
| Check Credit Score            | Service task (external) | **Runtime-bound**       | Calls an external bureau whose response is not contractually guaranteed.            |
| Request Manual Review         | Service task (external) | **Runtime-bound**       | Hands off to an external queue with no behavioral contract.                         |

This is the compositional property in action: the process is _fully deterministic_ on some flows,
_policy-dependent_ through its decision logic, and _runtime-bound_ wherever it crosses an
organizational boundary. None of these is a defect on its own — the runtime-bound service tasks are
the natural cost of integrating with a real credit bureau and a real review team.

## Step 3 — Read the determinism profile

Aggregating the evaluation points produces the process's **determinism profile** — the portfolio-
level number the methodology uses for strategic conversations:

- **9 evaluation points** in total.
- **78%** deterministic (fully deterministic + policy-dependent combined).
- **22%** runtime-bound — concentrated entirely in the two external service tasks.

Read plainly: roughly four-fifths of this process behaves predictably given the engine profile and
the decision policy, and the remaining behavioral risk is _localized_ — it lives at two named
integration boundaries, not scattered across the model. That is a governable shape. The advisor's
recommendation writes itself: govern the two boundaries, and the rest of the process needs only
light oversight.

## Step 4 — Read the findings

Classification is paired with concrete, actionable findings. For this process the analysis produces
**no structural errors** and **five warnings** — the kind of behavioral observations a structural
review never surfaces:

- **Two missing-contract findings**, one for each external service task (`Check Credit Score`,
  `Request Manual Review`). Both are runtime-bound integration boundaries with **no declared
  behavioral contract** — contract coverage is **0%**. Under tier 2, which reserves its strongest
  assurance for integrations, these are the headline findings. Remediation is explicit: provide a
  contract definition (OpenAPI / AsyncAPI / gRPC) for each boundary.
- **Two gateway-coverage findings**, one for each exclusive gateway (`Low Risk?`, `Approved?`):
  each is missing a default flow, so the analysis _could not verify_ that the conditions are
  exhaustive. This is a "could-not-verify", not a proven gap — DPG reports the uncertainty honestly
  rather than asserting a fault that may not exist.
- **One decision-table completeness finding** on `eligibility-score`: the UNIQUE-hit-policy table
  has missing input combinations, so some inputs would fall through with no matching rule.
  Remediation: add rules to handle the null / missing input cases.

Every finding names the element it applies to and, where relevant, the remediation. This is what
makes the assessment evidence-based rather than a subjective judgment — the consultant's report cites
specific elements, not impressions.

## Step 5 — Translate into governance action

The classified result feeds straight into graduated governance. The advisor's recommendations follow
directly from the profile and the findings:

1. **Govern the two integration boundaries first.** They carry 100% of the runtime-bound behavior
   and 100% of the contract-coverage gap. Defining behavioral contracts for the credit-bureau call
   and the manual-review hand-off is the single highest-leverage action, and it is what tier 2 cares
   about most.
2. **Close the gateway-coverage uncertainty** by adding default flows, converting two
   "could-not-verify" findings into verified exhaustiveness.
3. **Complete the decision table** so no input combination falls through silently.
4. **Apply light oversight to the deterministic remainder.** The fully deterministic flows and the
   policy-dependent decision logic need monitoring proportional to their low behavioral risk — not
   the same scrutiny as the integration boundaries.

Mapped onto the [maturity framework](/dpg-framework/consultant/maturity/), an organization that can
produce this assessment — a classified process, a determinism profile, named findings with
remediation, all against an explicit engine profile and policy tier — is exhibiting **Stage 3
(Structured)** behavior: determinism classification applied systematically, runtime profiles
documented, behavioral findings tied to a policy. The contract gaps it surfaces are precisely the
work that moves the integration practice toward Stage 4.

## What this demonstrates

In a single small process, DPG took a structurally valid model and produced something structural
governance cannot: a determinism profile (78% deterministic, 22% runtime-bound), a localized
behavioral-risk map (two named boundaries), and a prioritized, evidence-based remediation plan — all
relative to an explicitly stated engine profile and governance tier. The same method scales from one
process to a portfolio: sample, classify, aggregate, and let the determinism profile guide where
behavioral-governance investment will pay off.

Engineers who want to reproduce these numbers or run the analysis on their own models should turn to
the [Builder track](/dpg-framework/builder/), where the same `loan-preapproval` fixture and the
machine-readable classification it produces are described.
