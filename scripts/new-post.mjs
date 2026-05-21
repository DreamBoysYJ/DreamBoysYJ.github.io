import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error("Usage: npm run new -- \"글 제목\"");
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const slug = title
  .normalize("NFKD")
  .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
  .trim()
  .replace(/\s+/g, "-")
  .toLowerCase();

const fileName = `${today}-${slug || "untitled"}.md`;
const targetDir = path.join(process.cwd(), "src", "content", "posts");
const targetPath = path.join(targetDir, fileName);

if (existsSync(targetPath)) {
  console.error(`Already exists: ${targetPath}`);
  process.exit(1);
}

const template = `---
title: "${title.replace(/"/g, '\\"')}"
description: "요약을 여기에 적습니다."
pubDate: "${today}"
tags: []
language: "ko"
draft: true
heroImage: ""
heroAlt: ""
---

Velog에서 가져온 Markdown 원문을 여기에 붙여넣습니다.
`;

await mkdir(targetDir, { recursive: true });
await writeFile(targetPath, template, "utf8");
console.log(targetPath);
