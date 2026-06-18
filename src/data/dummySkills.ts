const dummySkills: SkillRecord[] = [
	{
		id: "skill_01",
		title: "Systematic Debugger",
		slug: "systematic-debugger",
		description:
			"Traces failures from symptom to root cause with reproducible steps, hypothesis checks, and minimal fixes.",
		category: "Workflow",
		tags: ["debugging", "root-cause", "reliability"],
		installCommand: "npx skills add systematic-debugger",
		createdAt: "2026-06-14T09:12:00.000Z",
		authorClerkId: "user_2kR9mN4pQxW7vY3zA1bC5dE",
		authorEmail: "ops@example.dev",
	},
	{
		id: "skill_02",
		title: "PR Review Lens",
		slug: "pr-review-lens",
		description:
			"Reviews pull requests for correctness, security risks, and maintainability before merge.",
		category: "Quality",
		tags: ["code-review", "security", "maintainability"],
		installCommand: "npx skills add pr-review-lens",
		createdAt: "2026-06-13T16:45:00.000Z",
		authorClerkId: "user_2mS8nO5qRyX8wZ4aB2cD6eF",
		authorEmail: "quality@example.dev",
	},
	{
		id: "skill_03",
		title: "Schema Migration Guard",
		slug: "schema-migration-guard",
		description:
			"Validates database migrations for backward compatibility, rollback safety, and data integrity.",
		category: "Data",
		tags: ["migrations", "postgres", "convex"],
		installCommand: "npx skills add schema-migration-guard",
		createdAt: "2026-06-12T11:20:00.000Z",
		authorClerkId: "user_2nT7oP6rSzY9xA5bC3dE7fG",
		authorEmail: "data@example.dev",
	},
	{
		id: "skill_04",
		title: "Release Notes Composer",
		slug: "release-notes-composer",
		description:
			"Turns merged commits and issue links into concise, user-facing release notes and changelog entries.",
		category: "Documentation",
		tags: ["changelog", "releases", "product"],
		installCommand: "npx skills add release-notes-composer",
		createdAt: "2026-06-11T08:05:00.000Z",
		authorClerkId: "user_2oU6pQ7sTaZ0yB6cD4eF8gH",
		authorEmail: "product@example.dev",
	},
	{
		id: "skill_05",
		title: "API Contract Sentinel",
		slug: "api-contract-sentinel",
		description:
			"Checks API route changes for breaking contracts, missing validators, and inconsistent response shapes.",
		category: "Backend",
		tags: ["api", "contracts", "typescript"],
		installCommand: "npx skills add api-contract-sentinel",
		createdAt: "2026-06-10T19:30:00.000Z",
		authorClerkId: "user_2pV5qR8tUbA1zC7dE5fG9hI",
		authorEmail: "platform@example.dev",
	},
];

export default dummySkills;
