const pptxgen = require('pptxgenjs');

const BG = '1C2833';
const PRIMARY = '17A2B8';
const ACCENT = 'F39C12';
const TEXT = 'FFFFFF';
const MUTED = 'AAB7B8';
const SLATE = '2E4053';
const GREEN = '58D68D';
const DARK_BG = '1A252F';

async function build() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.title = 'Apache Kafka Architecture';

  // ── Slide 1: Title ──
  const s1 = pptx.addSlide();
  s1.background = { fill: BG };
  s1.addText('Apache Kafka Architecture', {
    x: 0.5, y: 1.8, w: 9, h: 1.2,
    fontSize: 38, fontFace: 'Arial', color: TEXT,
    align: 'center', bold: true, letterSpacing: 2,
  });
  s1.addShape(pptx.shapes.RECTANGLE, {
    x: 3.8, y: 3.1, w: 2.4, h: 0.08,
    fill: { color: PRIMARY },
    rectRadius: 0.04,
  });
  s1.addText('Distributed Event Streaming Platform', {
    x: 0.5, y: 3.4, w: 9, h: 0.8,
    fontSize: 18, fontFace: 'Arial', color: MUTED,
    align: 'center', letterSpacing: 1,
  });

  // ── Slide 2: Core Architecture ──
  const s2 = pptx.addSlide();
  s2.background = { fill: BG };
  // Header bar
  s2.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.7,
    fill: { color: PRIMARY },
  });
  s2.addText('Core Architecture', {
    x: 0.4, y: 0.05, w: 5, h: 0.6,
    fontSize: 22, fontFace: 'Arial', color: TEXT, bold: true,
  });

  // Left column: Key concepts
  s2.addText('Key Concepts', {
    x: 0.4, y: 1.0, w: 3.2, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: PRIMARY, bold: true,
  });
  const concepts = [
    'Producers publish records to topic partitions',
    'Broker cluster stores and replicates data',
    'Consumer groups read partitions in parallel',
    'ZooKeeper / KRaft handles coordination',
  ];
  s2.addText(
    concepts.map(t => ({ text: t, options: { bullet: true, color: MUTED, fontSize: 11 } })),
    { x: 0.4, y: 1.4, w: 3.4, h: 2.5, fontFace: 'Arial', paraSpaceAfter: 6, lineSpacingMultiple: 1.4 }
  );

  // Right column: Architecture diagram
  const dX = 4.4; // diagram X offset

  // Producer boxes
  const prodNames = ['Producer A', 'Producer B', 'Producer C'];
  prodNames.forEach((name, i) => {
    const px = dX + i * 1.7;
    s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: px, y: 1.0, w: 1.4, h: 0.5,
      fill: { color: SLATE }, line: { color: PRIMARY, width: 1.5 }, rectRadius: 0.08,
    });
    s2.addText(name, {
      x: px, y: 1.0, w: 1.4, h: 0.5,
      fontSize: 9, fontFace: 'Arial', color: PRIMARY, align: 'center', valign: 'middle',
    });
  });

  // Down arrows from producers
  prodNames.forEach((_, i) => {
    s2.addText('\u25BC', {
      x: dX + i * 1.7, y: 1.55, w: 1.4, h: 0.35,
      fontSize: 14, color: MUTED, align: 'center', valign: 'middle',
    });
  });

  // Broker cluster box
  s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: dX - 0.1, y: 1.95, w: 5.3, h: 1.5,
    fill: { color: DARK_BG }, line: { color: ACCENT, width: 1.5 }, rectRadius: 0.12,
  });
  s2.addText('Broker Cluster', {
    x: dX, y: 2.0, w: 5, h: 0.3,
    fontSize: 9, fontFace: 'Arial', color: ACCENT, align: 'center',
  });

  // Individual broker boxes
  const brokers = ['Broker 1', 'Broker 2', 'Broker 3'];
  brokers.forEach((name, i) => {
    const bx = dX + 0.3 + i * 1.7;
    s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: 2.4, w: 1.2, h: 0.5,
      fill: { color: SLATE }, line: { color: ACCENT, width: 1.5 }, rectRadius: 0.08,
    });
    s2.addText(name, {
      x: bx, y: 2.4, w: 1.2, h: 0.5,
      fontSize: 9, fontFace: 'Arial', color: ACCENT, align: 'center', valign: 'middle',
    });
  });

  // Replication arrows between brokers
  s2.addText('\u21C4', { x: dX + 1.5, y: 2.4, w: 0.5, h: 0.5, fontSize: 14, color: ACCENT, align: 'center', valign: 'middle' });
  s2.addText('\u21C4', { x: dX + 3.2, y: 2.4, w: 0.5, h: 0.5, fontSize: 14, color: ACCENT, align: 'center', valign: 'middle' });

  // ZooKeeper/KRaft box (right of cluster)
  s2.addText('\u2194', { x: 9.2, y: 2.35, w: 0.3, h: 0.5, fontSize: 12, color: MUTED, align: 'center', valign: 'middle' });
  s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 9.0, y: 1.95, w: 0.9, h: 0.7,
    fill: { color: SLATE }, line: { color: MUTED, width: 1.5 }, rectRadius: 0.08,
  });
  s2.addText('ZooKeeper\n/ KRaft', {
    x: 9.0, y: 1.95, w: 0.9, h: 0.7,
    fontSize: 7, fontFace: 'Arial', color: MUTED, align: 'center', valign: 'middle',
  });

  // Down arrows from brokers
  prodNames.forEach((_, i) => {
    s2.addText('\u25BC', {
      x: dX + i * 1.7, y: 3.5, w: 1.4, h: 0.35,
      fontSize: 14, color: MUTED, align: 'center', valign: 'middle',
    });
  });

  // Consumer boxes
  const consumers = ['Consumer 1', 'Consumer 2', 'Consumer 3'];
  consumers.forEach((name, i) => {
    const cx = dX + i * 1.7;
    s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: 3.9, w: 1.4, h: 0.5,
      fill: { color: SLATE }, line: { color: GREEN, width: 1.5 }, rectRadius: 0.08,
    });
    s2.addText(name, {
      x: cx, y: 3.9, w: 1.4, h: 0.5,
      fontSize: 9, fontFace: 'Arial', color: GREEN, align: 'center', valign: 'middle',
    });
  });

  // ── Slide 3: Topics & Partitions ──
  const s3 = pptx.addSlide();
  s3.background = { fill: BG };
  // Header bar
  s3.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.7,
    fill: { color: PRIMARY },
  });
  s3.addText('Topics & Partitions', {
    x: 0.4, y: 0.05, w: 5, h: 0.6,
    fontSize: 22, fontFace: 'Arial', color: TEXT, bold: true,
  });

  // Left column: explanation
  s3.addText('How It Works', {
    x: 0.4, y: 1.0, w: 4, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: PRIMARY, bold: true,
  });
  const partConcepts = [
    'Topics are logical channels for events',
    'Partitions enable parallel processing',
    'Each partition is an ordered, append-only log',
    'Consumer group members each read distinct partitions',
  ];
  s3.addText(
    partConcepts.map(t => ({ text: t, options: { bullet: true, color: MUTED, fontSize: 11 } })),
    { x: 0.4, y: 1.4, w: 4.2, h: 2.5, fontFace: 'Arial', paraSpaceAfter: 6, lineSpacingMultiple: 1.4 }
  );

  // Right column: Topic diagram
  const tX = 5.0;
  s3.addText('Topic: orders', {
    x: tX, y: 0.95, w: 4.5, h: 0.4,
    fontSize: 13, fontFace: 'Arial', color: ACCENT, bold: true,
  });

  const partColors = [PRIMARY, '2E86C1', '1ABC9C'];
  const partLabels = ['Partition 0', 'Partition 1', 'Partition 2'];
  const consLabels = ['Consumer 1', 'Consumer 2', 'Consumer 3'];

  partLabels.forEach((label, pi) => {
    const py = 1.5 + pi * 0.7;
    // Partition label
    s3.addText(label, {
      x: tX, y: py, w: 1.0, h: 0.4,
      fontSize: 9, fontFace: 'Arial', color: MUTED, valign: 'middle',
    });
    // Offset segments
    for (let seg = 0; seg < 5; seg++) {
      const sx = tX + 1.1 + seg * 0.7;
      s3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: sx, y: py, w: 0.65, h: 0.4,
        fill: { color: partColors[pi] },
        rectRadius: seg === 0 ? 0.06 : (seg === 4 ? 0.06 : 0),
      });
      s3.addText(String(seg), {
        x: sx, y: py, w: 0.65, h: 0.4,
        fontSize: 9, fontFace: 'Arial', color: TEXT, align: 'center', valign: 'middle',
      });
    }
  });

  // Consumer assignment labels
  consLabels.forEach((name, i) => {
    const cy = 3.7;
    const cx = tX + 1.1 + i * 1.2;
    s3.addText('\u2191 ' + name, {
      x: cx, y: cy, w: 1.2, h: 0.3,
      fontSize: 8, fontFace: 'Arial', color: GREEN, align: 'center',
    });
  });

  // Divider line
  s3.addShape(pptx.shapes.RECTANGLE, {
    x: 0.3, y: 4.2, w: 9.4, h: 0.02,
    fill: { color: SLATE },
  });

  // Summary stat boxes
  const stats = [
    { value: '3', label: 'Partitions' },
    { value: '3', label: 'Consumers' },
    { value: '1:1', label: 'Mapping' },
  ];
  stats.forEach((stat, i) => {
    const bx = 1.5 + i * 2.8;
    s3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: 4.4, w: 2, h: 0.8,
      fill: { color: SLATE }, rectRadius: 0.1,
    });
    // Left accent border (simulated)
    s3.addShape(pptx.shapes.RECTANGLE, {
      x: bx, y: 4.45, w: 0.06, h: 0.7,
      fill: { color: ACCENT },
    });
    s3.addText(stat.value, {
      x: bx + 0.15, y: 4.4, w: 1.7, h: 0.5,
      fontSize: 20, fontFace: 'Arial', color: ACCENT, bold: true, align: 'center', valign: 'middle',
    });
    s3.addText(stat.label, {
      x: bx + 0.15, y: 4.85, w: 1.7, h: 0.3,
      fontSize: 9, fontFace: 'Arial', color: MUTED, align: 'center', valign: 'middle',
    });
  });

  const outPath = '/workspace/kafka-presentation/kafka-architecture.pptx';
  await pptx.writeFile({ fileName: outPath });
  console.log('Created:', outPath);
}

build().catch(err => { console.error(err); process.exit(1); });
