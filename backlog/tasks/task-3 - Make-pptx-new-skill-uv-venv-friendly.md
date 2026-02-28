---
id: TASK-3
title: Make pptx-new skill uv/venv-friendly
status: Done
assignee:
  - '@claude'
created_date: '2026-02-28 14:36'
updated_date: '2026-02-28 14:41'
labels: []
dependencies: []
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Add PEP 723 inline metadata to all runnable Python scripts in mnt/skills/public/pptx-new/ and update docs (SKILL.md, editing.md) to use uv run instead of bare python. Same approach as TASK-1 for the old pptx skill.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 All 7 runnable scripts have PEP 723 metadata
- [x] #2 SKILL.md uses uv run instead of bare python
- [x] #3 editing.md uses uv run instead of bare python
- [x] #4 pip install references replaced with uv-managed notes
- [x] #5 All scripts verified with uv run --help or similar
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Commit: `b03d877` - task-3: Add PEP 723 inline metadata and uv run to pptx-new skill

Added PEP 723 inline metadata to all 7 runnable scripts (add_slide, clean, thumbnail, pack, unpack, validate, soffice). Updated SKILL.md and editing.md to use uv run. Replaced pip install references with uv-managed dependency docs.
<!-- SECTION:NOTES:END -->
