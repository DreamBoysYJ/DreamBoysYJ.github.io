# Publishing Playbook

This document exists so future Codex sessions can continue the blog automation work without rediscovering the decisions.

## One-Line Summary

Write comfortably in Velog, preserve the final Korean Markdown in GitHub, localize the English version for Medium, and generate optional Tistory/SNS versions only after technical review and user approval.

## Final Decisions

```yaml
source_of_truth: github_markdown
draft_tool: velog
approval_required_before_external_publish: true

canonical:
  ko: github_blog
  en: medium

audience:
  primary: developers
  secondary: general_readers
  style: deep_but_friendly

technical_review:
  fix_only_obvious_or_verified_errors: true
  preserve_voice_humor_profanity: true
  run_code: false
  mark_uncertain_claims: true

translation:
  mode: localization
  preserve_original_voice: true
  avoid_literal_wordplay_translation: true
  localize_humor_when_needed: true
  profanity: preserve_strength_do_not_amplify

images:
  copyright_review: false
  use_external_urls: true
  store_locally_by_default: false
  optional_backup_for_important_images: true
```

## Standard Workflow

1. The user writes in Velog.
2. The user copies Markdown from the Velog write/edit screen.
3. Codex creates or updates a Markdown file in `src/content/posts`.
4. Codex performs a technical review.
5. Codex minimally edits only technically wrong or risky parts.
6. Codex preserves Korean voice, humor, profanity, and rough edges unless they cause technical misunderstanding.
7. Codex creates or drafts an English Medium version through localization.
8. Codex creates optional Tistory and SNS variants.
9. The user approves before any external publishing action.
10. Codex records published URLs in frontmatter when available.

## Post Frontmatter

Use this shape for posts:

```yaml
---
title: "글 제목"
description: "검색/공유용 짧은 요약"
pubDate: "2026-05-21"
updatedDate: "2026-05-21"
tags: ["개발", "자동화"]
language: "ko"
draft: true
canonicalUrl: ""
mediumUrl: ""
tistoryUrl: ""
velogUrl: ""
heroImage: "https://..."
heroAlt: "이미지 설명"
---
```

Notes:

- `draft: true` keeps a post hidden.
- Set `draft: false` only when the user wants it public.
- `canonicalUrl` should point to the canonical version after publication.
- `mediumUrl`, `tistoryUrl`, and `velogUrl` are optional publication records.

## Technical Review Rules

Fix:

- Incorrect API behavior or framework behavior.
- Outdated claims that are clearly wrong now.
- Security advice that could mislead readers.
- Broken code snippets when the problem is obvious.
- Strong technical claims that need qualification.

Do not fix:

- Casual phrasing.
- Jokes.
- Mild profanity.
- Personal opinions.
- Deliberate exaggeration used as style.
- Non-standard phrasing that is still understandable.

When unsure:

- Do not silently rewrite.
- Add a short "검토 필요" note for the user.
- Prefer official docs when current technical facts matter.

## English Localization Rules

The English version should feel like the same writer speaking to a broader developer audience.

Keep:

- Personal rhythm.
- Friendly directness.
- Technical depth.
- Mild roughness.

Adjust:

- Korean wordplay that does not survive translation.
- Culture-specific humor that would confuse English readers.
- Long Korean sentence chains that need clearer English pacing.

Example:

```text
Korean joke:
감사는 무슨 감이나 쳐먹어

Bad literal translation:
Thanks? Eat a persimmon.

Better localized options:
Appreciation does not pay rent.
Thanks are cute. Invoices are cuter.
Appreciation does not pass CI. Pay the invoice.
```

Choose the option that fits the post's context.

## Platform-Specific Output

### GitHub Blog

- Keep as Korean canonical source.
- Store posts in `src/content/posts`.
- Build with `npm run build`.
- Deploy through GitHub Pages Actions after a remote is configured.

### Medium

- English canonical version.
- Prefer localized English, not a literal translation.
- Use `canonicalUrl` on Medium if publishing a related mirror where appropriate.

### Tistory

- Optional Korean distribution.
- Can be full mirror, edited copy, or summary depending on the post.
- User approval required before publishing.

### SNS

- Generate Korean and English summaries separately.
- Do not assume Markdown formatting works on SNS.
- Keep SNS copy punchy, but avoid changing the technical meaning.
- User approval required before posting.

## Current Site Setup

This repository is an Astro static blog.

Useful commands:

```bash
npm run dev
npm run build
npm run new -- "글 제목"
```

Important paths:

```text
src/content/posts          Markdown posts
src/content.config.ts      Content schema
src/layouts                Page layouts
src/pages                  Routes
src/styles/global.css      Site styling
.github/workflows          GitHub Pages deployment
```

## GitHub Pages Setup Still Needed

When the repository is pushed to GitHub:

1. Open repository settings.
2. Go to Pages.
3. Set Source to GitHub Actions.
4. Add repository variables if needed:

```text
SITE_URL=https://사용자명.github.io
BASE_PATH=/저장소명/
```

If the repo is named `사용자명.github.io`, use:

```text
BASE_PATH=/
```

## Future Automation Ideas

Start manual and gradually automate:

1. Paste Velog Markdown into a post file.
2. Generate English Medium draft.
3. Generate Tistory/SNS variants.
4. Record publication URLs in frontmatter.
5. Later, add scripts for platform-specific drafts.
6. Browser automation can fill forms and stop before final publish.

The user's publishing frequency is every few days, so reliability and controllability matter more than full automation.
