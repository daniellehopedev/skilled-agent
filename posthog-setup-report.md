# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into SkilledAgent, a TanStack Start registry for agentic skills. The integration spans client-side analytics via `PostHogProvider` in the root route, user identification wired to Clerk authentication (with transition detection so `user_signed_in` fires only on actual sign-in, not page load), auth-funnel page-view events on the sign-in and sign-up routes, and a Vite reverse proxy for reliable event delivery. Four existing action events were preserved; three new events were added covering the authentication conversion funnel.

## Events instrumented

| Event | Description | File |
|---|---|---|
| `browse_registry_clicked` | User clicks the "Browse Registry" CTA on the home page. | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicks the "Publish Skill" CTA on the home page. | `src/routes/index.tsx` |
| `install_command_copied` | User copies the install command from a skill card. | `src/components/SkillCard.tsx` |
| `skill_card_opened` | User clicks to open/view a skill's detail page. | `src/components/SkillCard.tsx` |
| `sign_in_page_viewed` | User navigated to the sign-in page, marking the start of the authentication funnel. | `src/routes/__auth/sign-in.$.tsx` |
| `sign_up_page_viewed` | User navigated to the sign-up page, marking the start of the registration funnel. | `src/routes/__auth/sign-up.$.tsx` |
| `user_signed_in` | User successfully authenticated via Clerk and their identity was resolved client-side. | `src/routes/__root.tsx` |

## Files changed

- **`src/routes/__auth/sign-in.$.tsx`** — Added `sign_in_page_viewed` capture on component mount using `posthog.capture` via `usePostHog`.
- **`src/routes/__auth/sign-up.$.tsx`** — Added `sign_up_page_viewed` capture on component mount using `posthog.capture` via `usePostHog`.
- **`src/routes/__root.tsx`** — Extended `PostHogUserIdentifier` with a `prevIsSignedIn` ref to detect auth state transitions; fires `user_signed_in` only when `isSignedIn` transitions from `false` → `true` (skips page loads where the user is already authenticated).
- **`vite.config.ts`** — PostHog reverse proxy (`/ingest`, `/ingest/static`, `/ingest/array`) already configured.
- **`src/utils/posthog-server.ts`** — Singleton `posthog-node` client already present for server-side capture.
- **`.env`** — `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` updated with correct values.

## Next steps

We've built insights and a dashboard to monitor user behavior based on the instrumented events:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/457518/dashboard/1733677)
- [Sign-in Funnel](https://us.posthog.com/project/457518/insights/ZPsk9XIv) — Conversion from sign-in page view to authenticated user
- [Sign-up Funnel](https://us.posthog.com/project/457518/insights/tkv3fYll) — Conversion from sign-up page view to authenticated user
- [Registry Engagement](https://us.posthog.com/project/457518/insights/LPD3KIW0) — Browse Registry and Publish Skill CTA clicks over time
- [Skill Card Interactions](https://us.posthog.com/project/457518/insights/7y6pbiGC) — Skill card opens and install command copies over time
- [New Sign-ins](https://us.posthog.com/project/457518/insights/DLjxpVFp) — Total successful sign-ins (last 30 days, bold number)

## Verify before merging

- [ ] Run a full production build (`npm run build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.
- [ ] Confirm the returning-visitor path also calls `identify` — `PostHogUserIdentifier` re-identifies whenever Clerk's `isSignedIn`/`user` changes, so authenticated returning users on page load are covered. Verify in a real browser session.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
