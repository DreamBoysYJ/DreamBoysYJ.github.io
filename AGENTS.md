# Codex Project Notes

This repository is Youngju's canonical Korean GitHub blog and the hub for multi-platform publishing.

## Core Agreement

- The source of truth is GitHub Markdown in `src/content/posts`.
- Velog is the comfortable drafting tool. Copy Markdown from the Velog write/edit screen, not from the published page.
- Korean canonical URL should be the GitHub blog.
- English canonical URL should usually be Medium because the user already has Medium posts and followers there.
- External publishing always requires user approval before posting.

## Editing Policy

- Preserve the user's voice, jokes, casual tone, and profanity.
- Fix only technically wrong, obviously outdated, insecure, or seriously misleading claims.
- Do not rewrite for politeness or bland professionalism.
- If a claim is uncertain, mark it for review instead of silently changing it.
- Do not run code examples by default. These posts are mainly for understanding, not copy-paste execution.
- For code snippets, fix only obvious syntax or conceptual mistakes.

## Translation Policy

- English is localization, not literal translation.
- Target developers first, but keep wording readable for non-specialists.
- Preserve depth while keeping the tone friendly.
- Keep profanity at roughly the original strength. Do not amplify it.
- Localize jokes and wordplay when direct translation would fail.
- Use current memes only when verified and genuinely appropriate; prefer less time-sensitive humor.

## Platform Roles

- GitHub blog: Korean canonical archive.
- Medium: English canonical version.
- Tistory: Optional Korean distribution channel.
- SNS: Korean and English summaries or threads, generated for user approval.

## Image Policy

- The user does not want copyright review in this workflow.
- Use external image URLs directly by default.
- Local backups are optional only for technical durability, not copyright reasons.

## Implementation Notes

- This is an Astro static blog.
- Run `npm run build` after code changes.
- Run `npm run new -- "글 제목"` to create a draft post.
- A post becomes public when `draft: false` is set in frontmatter.
- Keep the design content-first, warm, and readable. Avoid marketing-page fluff.

## Important Files

- `docs/publishing-playbook.md`: Full operating workflow and decisions.
- `src/content/posts`: Markdown posts.
- `src/content.config.ts`: Post frontmatter schema.
- `.github/workflows/deploy.yml`: GitHub Pages deployment.
