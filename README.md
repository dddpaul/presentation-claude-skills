# claude-skills

A collection of Claude.ai's built-in `/mnt/skills` files for office document generation. These skills power Claude.ai's ability to create Word, PDF, PowerPoint, and Excel files as artifacts.

## How It Was Created

By prompting [Claude.ai](https://claude.ai):

> `Create a zip file of everything in your /mnt/skills folder`

[Run that prompt on Claude.ai](https://claude.ai/new?q=Create%20a%20zip%20file%20of%20everything%20in%20your%20%2Fmnt%2Fskills%20folder)

## Skills Included

| Skill | Description |
|-------|-------------|
| **pptx-new** | PowerPoint presentations — PptxGenJS-based creation, direct XML editing, uv/venv-friendly. From [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/pptx). **Recommended over pptx.** |
| **pptx** | PowerPoint presentations (legacy) — OOXML schemas, html2pptx converter, inventory/replace pipeline |
| **docx** | Word documents — OOXML schemas, docx-js reference, Python scripts for comments/utilities, pack/unpack/validate tooling |
| **pdf** | PDF files — form field extraction/filling, bounding box validation, PDF-to-image conversion, fillable form support |
| **xlsx** | Excel spreadsheets |

## Repository Structure

```
.
├── CLAUDE.md              # Agent workflow instructions
├── README.md
├── backlog/               # Task management
└── mnt/skills/public/     # Extracted skills
    ├── docx/
    ├── pdf/
    ├── pptx/              # Legacy (from Claude.ai sandbox)
    ├── pptx-new/          # Recommended (from anthropics/skills repo)
    └── xlsx/
```

## Purpose

Reference material for understanding how Claude.ai generates office documents. Useful for:
- Studying Claude's document generation approach
- Reusing schemas and scripts in other projects
- Building custom document generation tooling
