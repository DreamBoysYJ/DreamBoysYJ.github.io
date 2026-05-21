# First Real Post Checklist

Use this checklist when processing the user's first actual Velog post.

## Input Needed

- Velog Markdown copied from the write/edit screen.
- Desired title if different from the Velog title.
- Tags.
- Optional hero image URL.
- Whether to publish immediately or keep as draft.

## Codex Steps

1. Create a post with `npm run new -- "글 제목"` or manually add a Markdown file.
2. Fill frontmatter.
3. Paste the Velog Markdown body.
4. Perform technical review.
5. Make minimal technical fixes only.
6. Summarize what changed.
7. Generate English Medium version separately.
8. Generate SNS Korean and English copy.
9. Run `npm run build`.
10. Show the user the result and ask for approval before any external publication.

## Review Output Format

```text
수정한 부분:
- ...

그대로 둔 부분:
- 말투/농담/욕설
- 개인적 의견

검토 필요:
- ...

생성한 산출물:
- GitHub 블로그용 Markdown
- Medium 영어판
- SNS 한국어/영어 문안
```

## Default Behavior

- Keep new posts as `draft: true` unless the user says to publish.
- Do not run embedded code snippets.
- Do not perform image copyright review.
- Do not publish externally without approval.
