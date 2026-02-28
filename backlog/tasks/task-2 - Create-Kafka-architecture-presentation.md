---
id: TASK-2
title: Create Kafka architecture presentation
status: To Do
assignee: []
created_date: '2026-02-28 10:14'
updated_date: '2026-02-28 10:21'
labels: []
dependencies: []
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Create a 3-slide PPTX presentation explaining Apache Kafka architecture using the html2pptx workflow from the LOCAL pptx skill at mnt/skills/public/pptx/. Read SKILL.md and html2pptx.md from that directory for the workflow. This validates the uv-friendly skill end-to-end.

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
- Right column — architecture diagram built with positioned HTML divs:
  - Producer boxes (top) → arrows → Broker cluster (center, 3 brokers with replication arrows) → arrows → Consumer Group boxes (bottom)
  - ZooKeeper/KRaft box connected to brokers
  - Use CSS borders, background colors, and positioned elements to render the diagram

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
- Use LOCAL skill at mnt/skills/public/pptx/ — read SKILL.md and html2pptx.md for workflow
- Python scripts via uv run (PEP 723 inline metadata handles deps)
- No manual pip install
- Diagrams via HTML/CSS positioned divs (not images or charts)
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Presentation has 2-3 slides covering Kafka architecture
- [ ] #2 Slides include both text content and diagrams
- [ ] #3 All Python scripts invoked via uv run
- [ ] #4 Output .pptx file opens correctly
<!-- AC:END -->
