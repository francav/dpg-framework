// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// `site`/`base` target GitHub Pages project hosting (https://francav.github.io/dpg-framework).
// When a custom domain is wired up in a later work unit, set `base` to "/" and update `site`.
export default defineConfig({
  site: "https://francav.github.io",
  base: "/dpg-framework",
  integrations: [
    starlight({
      title: "Deterministic Process Governance",
      tagline:
        "An open, neutral foundation for governing the behavioral predictability of automated BPM processes.",
      // English-only for now: no i18n, no versioning.
      sidebar: [
        { label: "Consultant track", autogenerate: { directory: "consultant" } },
        { label: "Builder track", autogenerate: { directory: "builder" } },
      ],
    }),
  ],
});
