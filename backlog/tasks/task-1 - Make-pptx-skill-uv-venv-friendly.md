---
id: TASK-1
title: Make pptx skill uv/venv-friendly
status: Done
assignee:
  - '@claude'
created_date: '2026-02-28 09:19'
updated_date: '2026-02-28 09:30'
labels: []
dependencies: []
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Add PEP 723 inline metadata to all Python scripts, fix local imports with sys.path, remove six dependency, and update SKILL.md invocation examples from bare python to uv run
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 All 7 Python scripts have PEP 723 inline metadata
- [x] #2 scripts/rearrange.py no longer depends on six
- [x] #3 Scripts with local imports (replace.py, thumbnail.py, validate.py) use sys.path fix
- [x] #4 SKILL.md uses uv run for all Python invocations
- [x] #5 uv run scripts/inventory.py --help runs successfully
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Commit: `8a71e53` - task-1: PEP 723 inline metadata for uv-compatible pptx scripts

PEP 723 inline metadata added to all 7 Python scripts. Removed six dependency from rearrange.py. Added sys.path fix for sibling imports in replace.py, thumbnail.py, validate.py. Updated SKILL.md with uv run invocations. All scripts verified working with uv run.
<!-- SECTION:NOTES:END -->
