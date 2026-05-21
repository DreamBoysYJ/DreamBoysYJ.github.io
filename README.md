# Youngju Notes

Velog에서 편하게 쓰고, GitHub Markdown을 한글 원본으로 남기는 블로그입니다. 영어판은 Medium을 canonical로 두고, Tistory와 SNS는 필요할 때 배포 채널로 씁니다.

## 운영 원칙

```yaml
source_of_truth: github_markdown
draft_tool: velog
canonical:
  ko: github_blog
  en: medium
approval_required_before_external_publish: true
```

자세한 운영 설계는 `docs/publishing-playbook.md`에 정리되어 있습니다. 다음 Codex 세션은 먼저 `AGENTS.md`와 `docs/publishing-playbook.md`를 읽고 이어가면 됩니다.

## 글 작성 흐름

1. Velog에서 글을 작성합니다.
2. Velog 작성/수정 화면에서 Markdown 원문을 복사합니다.
3. `src/content/posts`에 Markdown 파일로 저장합니다.
4. 기술적으로 명백히 틀린 부분만 최소 수정합니다.
5. 영어판은 직역이 아니라 원문 보존형 현지화로 만듭니다.
6. 외부 플랫폼 발행 전에는 항상 최종 확인합니다.

## 새 글 만들기

```bash
npm run new -- "글 제목"
```

생성된 파일의 `draft: true`를 `false`로 바꾸면 블로그에 노출됩니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## GitHub Pages 설정

저장소의 Pages 설정에서 Source를 `GitHub Actions`로 선택합니다.

Actions 변수는 선택 사항입니다.

```text
SITE_URL=https://dreamboysyj.github.io
BASE_PATH=/
```
