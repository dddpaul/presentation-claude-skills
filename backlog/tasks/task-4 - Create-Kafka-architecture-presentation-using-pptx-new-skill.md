---
id: TASK-4
title: Create Kafka architecture presentation using pptx-new skill
status: To Do
assignee: []
created_date: '2026-02-28 14:46'
labels: []
dependencies: []
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Create a 3-slide PPTX presentation explaining Apache Kafka architecture using the PptxGenJS workflow from the LOCAL pptx-new skill at mnt/skills/public/pptx-new/. Read SKILL.md and pptxgenjs.md from that directory for the workflow. This validates the uv-friendly pptx-new skill end-to-end.

## Design Approach

**Color Palette — Charcoal & Teal** (data streaming / infrastructure feel):
- Background: #1C2833 (deep charcoal)
- Primary: #17A2B8 (teal, Kafka brand-adjacent)
- Accent: #F39C12 (amber for highlights)
- Text: #FFFFFF (white on dark), #AAB7B8 (muted gray for secondary)
- Shapes: #2E4053 (dark slate for component boxes)

**Font**: Arial (web-safe)

## Slide Content

### Slide 1 — Title Slide
- Title: "Apache Kafka Architecture"
- Subtitle: "Distributed Event Streaming Platform"
- Clean dark background, centered text, teal accent bar

### Slide 2 — Core Architecture Diagram
Two-column layout (40% text / 60% diagram):
- Left column — key concepts as bullet list:
  - Producers publish records to topic partitions
  - Broker cluster stores and replicates data
  - Consumer groups read partitions in parallel
  - ZooKeeper/KRaft handles coordination
- Right column — architecture diagram built with PptxGenJS shapes:
  - Producer boxes (top) → arrows → Broker cluster (center, 3 brokers with replication arrows) → arrows → Consumer Group boxes (bottom)
  - ZooKeeper/KRaft box connected to brokers
  - Use PptxGenJS shapes, lines, and text boxes to render the diagram

### Slide 3 — Topics & Partitions Detail
Two-column layout (50/50):
- Left column — explanation text:
  - Topics are logical channels for events
  - Partitions enable parallel processing
  - Each partition is an ordered, append-only log
  - Consumer group members each read distinct partitions
- Right column — visual showing:
  - A "Topic: orders" label
  - 3 partition bars (Partition 0, 1, 2) as horizontal colored bars with offset numbers
  - Consumer assignment labels below each partition

## Key Constraints
- Use LOCAL pptx-new skill at mnt/skills/public/pptx-new/ — read SKILL.md and pptxgenjs.md for workflow
- Use PptxGenJS directly for slide creation (no html2pptx intermediate)
- Python scripts via uv run (PEP 723 inline metadata handles deps)
- No manual pip install
- Diagrams via PptxGenJS shapes API (not images)
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Presentation has 3 slides covering Kafka architecture
- [ ] #2 Slides include both text content and diagrams built with PptxGenJS shapes
- [ ] #3 All Python scripts invoked via uv run
- [ ] #4 Output .pptx file opens correctly
<!-- AC:END -->
