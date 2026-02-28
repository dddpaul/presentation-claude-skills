---
id: doc-1
title: Project Overview
type: other
created_date: '2026-02-28 08:25'
---

# Project Overview

## What Is This?

A collection of Claude.ai's built-in `/mnt/skills` files for office document generation. These skills power Claude.ai's ability to create Word, PDF, PowerPoint, and Excel files as artifacts.

## How It Was Created

By prompting Claude.ai with:

> Create a zip file of everything in your /mnt/skills folder

## Skills Included

### docx (Word Documents)
- OOXML schemas (ISO-IEC29500-4_2016)
- docx-js library reference
- Python scripts for document manipulation (comments, utilities)
- Pack/unpack/validate tooling

### pdf (PDF Files)
- Form field extraction and filling
- Bounding box validation
- PDF-to-image conversion
- Fillable form support with annotations
- Reference docs: SKILL.md, FORMS.md, REFERENCE.md

### pptx (PowerPoint Presentations)
- OOXML schemas for presentations
- html2pptx converter (bundled as .tgz)
- Presentation-specific OOXML reference

### xlsx (Excel Spreadsheets)
- Spreadsheet skill files

## Repository Structure

```
.
├── CLAUDE.md              # Agent workflow instructions
├── README.md              # How to extract skills from Claude.ai
├── backlog/               # Task management
│   └── config.yml
└── mnt/skills/public/     # Extracted skills
    ├── docx/
    ├── pdf/
    ├── pptx/
    └── xlsx/
```

## Purpose

Reference material for understanding how Claude.ai generates office documents. Useful for:
- Studying Claude's document generation approach
- Reusing schemas and scripts in other projects
- Building custom document generation tooling
