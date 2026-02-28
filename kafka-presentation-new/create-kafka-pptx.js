const pptxgen = require("pptxgenjs");

// Color palette — Charcoal & Teal
const BG = "1C2833";
const PRIMARY = "17A2B8";
const ACCENT = "F39C12";
const TEXT_WHITE = "FFFFFF";
const TEXT_MUTED = "AAB7B8";
const SHAPE_BG = "2E4053";
const FONT = "Arial";

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Claude";
pres.title = "Apache Kafka Architecture";

// Helper to create fresh shadow objects (PptxGenJS mutates in place)
const makeShadow = () => ({
  type: "outer",
  blur: 4,
  offset: 2,
  angle: 135,
  color: "000000",
  opacity: 0.3,
});

// ============================================================
// SLIDE 1 — Title Slide
// ============================================================
const slide1 = pres.addSlide();
slide1.background = { color: BG };

// Teal accent bar at top
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0,
  y: 0,
  w: 10,
  h: 0.06,
  fill: { color: PRIMARY },
});

// Title
slide1.addText("Apache Kafka Architecture", {
  x: 0.8,
  y: 1.6,
  w: 8.4,
  h: 1.2,
  fontSize: 42,
  fontFace: FONT,
  color: TEXT_WHITE,
  bold: true,
  align: "left",
  margin: 0,
});

// Subtitle
slide1.addText("Distributed Event Streaming Platform", {
  x: 0.8,
  y: 2.8,
  w: 8.4,
  h: 0.6,
  fontSize: 20,
  fontFace: FONT,
  color: TEXT_MUTED,
  align: "left",
  margin: 0,
});

// Decorative teal rectangle
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0.8,
  y: 3.6,
  w: 1.2,
  h: 0.06,
  fill: { color: PRIMARY },
});

// Bottom accent bar
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0,
  y: 5.565,
  w: 10,
  h: 0.06,
  fill: { color: PRIMARY },
});

// ============================================================
// SLIDE 2 — Core Architecture Diagram
// ============================================================
const slide2 = pres.addSlide();
slide2.background = { color: BG };

// Slide title
slide2.addText("Core Architecture", {
  x: 0.5,
  y: 0.25,
  w: 9,
  h: 0.6,
  fontSize: 28,
  fontFace: FONT,
  color: TEXT_WHITE,
  bold: true,
  margin: 0,
});

// Thin teal line under title
slide2.addShape(pres.shapes.RECTANGLE, {
  x: 0.5,
  y: 0.9,
  w: 1.5,
  h: 0.04,
  fill: { color: PRIMARY },
});

// LEFT COLUMN — Key concepts (40%)
const leftX = 0.5;
const leftW = 3.5;

slide2.addText(
  [
    {
      text: "Producers",
      options: { bold: true, color: ACCENT, breakLine: true },
    },
    {
      text: "Publish records to topic partitions",
      options: { color: TEXT_MUTED, breakLine: true, fontSize: 13 },
    },
    { text: "", options: { breakLine: true, fontSize: 8 } },
    {
      text: "Broker Cluster",
      options: { bold: true, color: ACCENT, breakLine: true },
    },
    {
      text: "Stores and replicates data across nodes",
      options: { color: TEXT_MUTED, breakLine: true, fontSize: 13 },
    },
    { text: "", options: { breakLine: true, fontSize: 8 } },
    {
      text: "Consumer Groups",
      options: { bold: true, color: ACCENT, breakLine: true },
    },
    {
      text: "Read partitions in parallel for throughput",
      options: { color: TEXT_MUTED, breakLine: true, fontSize: 13 },
    },
    { text: "", options: { breakLine: true, fontSize: 8 } },
    {
      text: "KRaft / ZooKeeper",
      options: { bold: true, color: ACCENT, breakLine: true },
    },
    {
      text: "Handles metadata and coordination",
      options: { color: TEXT_MUTED, fontSize: 13 },
    },
  ],
  {
    x: leftX,
    y: 1.15,
    w: leftW,
    h: 3.8,
    fontSize: 15,
    fontFace: FONT,
    valign: "top",
    margin: 0,
  }
);

// RIGHT COLUMN — Architecture diagram (60%)
const diaX = 4.5;

// --- Producer boxes ---
const prodY = 1.2;
const prodH = 0.45;
const prodW = 1.15;

const prodBoxes = [
  { x: diaX + 0.15, label: "Producer 1" },
  { x: diaX + 1.55, label: "Producer 2" },
  { x: diaX + 2.95, label: "Producer 3" },
];

for (const pb of prodBoxes) {
  slide2.addShape(pres.shapes.RECTANGLE, {
    x: pb.x,
    y: prodY,
    w: prodW,
    h: prodH,
    fill: { color: SHAPE_BG },
    line: { color: PRIMARY, width: 1.5 },
    shadow: makeShadow(),
  });
  slide2.addText(pb.label, {
    x: pb.x,
    y: prodY,
    w: prodW,
    h: prodH,
    fontSize: 10,
    fontFace: FONT,
    color: TEXT_WHITE,
    align: "center",
    valign: "middle",
    margin: 0,
  });
}

// --- Arrows from producers to broker cluster ---
const arrowStartY = prodY + prodH;
const arrowEndY = 2.2;

for (const pb of prodBoxes) {
  slide2.addShape(pres.shapes.LINE, {
    x: pb.x + prodW / 2,
    y: arrowStartY,
    w: 0,
    h: arrowEndY - arrowStartY,
    line: { color: PRIMARY, width: 1.5, endArrowType: "triangle" },
  });
}

// --- Broker cluster box ---
const brokerClusterY = 2.2;
const brokerClusterH = 1.8;
const brokerClusterW = 4.0;
const brokerClusterX = diaX;

slide2.addShape(pres.shapes.RECTANGLE, {
  x: brokerClusterX,
  y: brokerClusterY,
  w: brokerClusterW,
  h: brokerClusterH,
  fill: { color: SHAPE_BG, transparency: 30 },
  line: { color: PRIMARY, width: 2, dashType: "dash" },
});

slide2.addText("Kafka Broker Cluster", {
  x: brokerClusterX,
  y: brokerClusterY + 0.05,
  w: brokerClusterW,
  h: 0.35,
  fontSize: 11,
  fontFace: FONT,
  color: PRIMARY,
  bold: true,
  align: "center",
  valign: "top",
  margin: 0,
});

// Individual brokers inside the cluster
const brokerW = 1.15;
const brokerH = 0.9;
const brokerY = brokerClusterY + 0.5;
const brokerSpacing = 0.3;
const totalBrokersW = 3 * brokerW + 2 * brokerSpacing;
const brokerStartX = brokerClusterX + (brokerClusterW - totalBrokersW) / 2;

const brokers = [
  { label: "Broker 1", x: brokerStartX },
  { label: "Broker 2", x: brokerStartX + brokerW + brokerSpacing },
  { label: "Broker 3", x: brokerStartX + 2 * (brokerW + brokerSpacing) },
];

for (const b of brokers) {
  slide2.addShape(pres.shapes.RECTANGLE, {
    x: b.x,
    y: brokerY,
    w: brokerW,
    h: brokerH,
    fill: { color: "253545" },
    line: { color: PRIMARY, width: 1 },
    shadow: makeShadow(),
  });
  slide2.addText(
    [
      { text: b.label, options: { bold: true, breakLine: true, fontSize: 10 } },
      { text: "Partitions", options: { fontSize: 8, color: TEXT_MUTED, breakLine: true } },
      { text: "Replicas", options: { fontSize: 8, color: TEXT_MUTED } },
    ],
    {
      x: b.x,
      y: brokerY,
      w: brokerW,
      h: brokerH,
      fontFace: FONT,
      color: TEXT_WHITE,
      align: "center",
      valign: "middle",
      margin: 0,
    }
  );
}

// Replication arrows between brokers
for (let i = 0; i < brokers.length - 1; i++) {
  const fromX = brokers[i].x + brokerW;
  const toX = brokers[i + 1].x;
  const midY = brokerY + brokerH / 2 - 0.08;
  slide2.addShape(pres.shapes.LINE, {
    x: fromX,
    y: midY,
    w: toX - fromX,
    h: 0,
    line: { color: ACCENT, width: 1, dashType: "dash", endArrowType: "triangle", beginArrowType: "triangle" },
  });
  slide2.addText("sync", {
    x: fromX,
    y: midY + 0.08,
    w: toX - fromX,
    h: 0.2,
    fontSize: 7,
    fontFace: FONT,
    color: ACCENT,
    align: "center",
    margin: 0,
  });
}

// --- KRaft/ZooKeeper box (right of broker cluster) ---
const kraftX = brokerClusterX + brokerClusterW + 0.2;
const kraftY = brokerClusterY + 0.3;
const kraftW = 0.85;
const kraftH = 1.2;

slide2.addShape(pres.shapes.RECTANGLE, {
  x: kraftX,
  y: kraftY,
  w: kraftW,
  h: kraftH,
  fill: { color: SHAPE_BG },
  line: { color: ACCENT, width: 1.5 },
  shadow: makeShadow(),
});
slide2.addText(
  [
    { text: "KRaft", options: { bold: true, breakLine: true, fontSize: 9 } },
    { text: "/", options: { breakLine: true, fontSize: 8, color: TEXT_MUTED } },
    { text: "ZooKeeper", options: { fontSize: 9, bold: true } },
  ],
  {
    x: kraftX,
    y: kraftY,
    w: kraftW,
    h: kraftH,
    fontFace: FONT,
    color: ACCENT,
    align: "center",
    valign: "middle",
    margin: 0,
  }
);

// Line from broker cluster to KRaft
slide2.addShape(pres.shapes.LINE, {
  x: brokerClusterX + brokerClusterW,
  y: brokerClusterY + brokerClusterH / 2,
  w: kraftX - (brokerClusterX + brokerClusterW),
  h: 0,
  line: { color: ACCENT, width: 1.5, dashType: "dash", endArrowType: "triangle" },
});

// --- Arrows from broker cluster to consumers ---
const consArrowStartY = brokerClusterY + brokerClusterH;
const consArrowEndY = 4.55;

const consBoxes = [
  { x: diaX + 0.35, label: "Consumer 1" },
  { x: diaX + 1.55, label: "Consumer 2" },
  { x: diaX + 2.75, label: "Consumer 3" },
];

for (const cb of consBoxes) {
  slide2.addShape(pres.shapes.LINE, {
    x: cb.x + 0.55,
    y: consArrowStartY,
    w: 0,
    h: consArrowEndY - consArrowStartY,
    line: { color: PRIMARY, width: 1.5, endArrowType: "triangle" },
  });
}

// --- Consumer group box ---
const consGroupY = 4.55;
const consGroupH = 0.45;

slide2.addShape(pres.shapes.RECTANGLE, {
  x: brokerClusterX,
  y: consGroupY,
  w: brokerClusterW,
  h: consGroupH + 0.2,
  fill: { color: SHAPE_BG, transparency: 50 },
  line: { color: PRIMARY, width: 1, dashType: "dot" },
});

slide2.addText("Consumer Group", {
  x: brokerClusterX,
  y: consGroupY - 0.15,
  w: brokerClusterW,
  h: 0.2,
  fontSize: 9,
  fontFace: FONT,
  color: PRIMARY,
  bold: true,
  align: "center",
  margin: 0,
});

for (const cb of consBoxes) {
  slide2.addShape(pres.shapes.RECTANGLE, {
    x: cb.x,
    y: consGroupY + 0.05,
    w: 1.1,
    h: consGroupH,
    fill: { color: SHAPE_BG },
    line: { color: PRIMARY, width: 1 },
    shadow: makeShadow(),
  });
  slide2.addText(cb.label, {
    x: cb.x,
    y: consGroupY + 0.05,
    w: 1.1,
    h: consGroupH,
    fontSize: 9,
    fontFace: FONT,
    color: TEXT_WHITE,
    align: "center",
    valign: "middle",
    margin: 0,
  });
}

// ============================================================
// SLIDE 3 — Topics & Partitions Detail
// ============================================================
const slide3 = pres.addSlide();
slide3.background = { color: BG };

// Title
slide3.addText("Topics & Partitions", {
  x: 0.5,
  y: 0.25,
  w: 9,
  h: 0.6,
  fontSize: 28,
  fontFace: FONT,
  color: TEXT_WHITE,
  bold: true,
  margin: 0,
});

slide3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5,
  y: 0.9,
  w: 1.5,
  h: 0.04,
  fill: { color: PRIMARY },
});

// LEFT COLUMN — Explanation text (50%)
const s3LeftX = 0.5;
const s3LeftW = 4.2;

slide3.addText(
  [
    {
      text: "Logical Channels",
      options: { bold: true, color: ACCENT, breakLine: true, fontSize: 16 },
    },
    {
      text: "Topics are named feeds of records. Producers write to topics; consumers read from them.",
      options: { color: TEXT_MUTED, breakLine: true, fontSize: 13 },
    },
    { text: "", options: { breakLine: true, fontSize: 10 } },
    {
      text: "Parallel Processing",
      options: { bold: true, color: ACCENT, breakLine: true, fontSize: 16 },
    },
    {
      text: "Each topic is split into partitions. Multiple consumers read different partitions simultaneously.",
      options: { color: TEXT_MUTED, breakLine: true, fontSize: 13 },
    },
    { text: "", options: { breakLine: true, fontSize: 10 } },
    {
      text: "Ordered Append-Only Logs",
      options: { bold: true, color: ACCENT, breakLine: true, fontSize: 16 },
    },
    {
      text: "Each partition is an immutable, ordered sequence of records identified by offsets.",
      options: { color: TEXT_MUTED, breakLine: true, fontSize: 13 },
    },
    { text: "", options: { breakLine: true, fontSize: 10 } },
    {
      text: "Consumer Assignment",
      options: { bold: true, color: ACCENT, breakLine: true, fontSize: 16 },
    },
    {
      text: "Each consumer in a group reads from distinct partitions, ensuring no duplicate processing.",
      options: { color: TEXT_MUTED, fontSize: 13 },
    },
  ],
  {
    x: s3LeftX,
    y: 1.15,
    w: s3LeftW,
    h: 4.0,
    fontFace: FONT,
    valign: "top",
    margin: 0,
  }
);

// RIGHT COLUMN — Visual (50%)
const s3RightX = 5.1;
const s3RightW = 4.5;

// Topic label
slide3.addText("Topic: orders", {
  x: s3RightX,
  y: 1.15,
  w: s3RightW,
  h: 0.5,
  fontSize: 18,
  fontFace: FONT,
  color: TEXT_WHITE,
  bold: true,
  align: "center",
  margin: 0,
});

// Partition bars
const partColors = ["17A2B8", "1ABC9C", "2ECC71"];
const partitions = [
  { label: "Partition 0", color: partColors[0], offsets: [0, 1, 2, 3, 4, 5, 6, 7], consumer: "Consumer A" },
  { label: "Partition 1", color: partColors[1], offsets: [0, 1, 2, 3, 4, 5], consumer: "Consumer B" },
  { label: "Partition 2", color: partColors[2], offsets: [0, 1, 2, 3, 4, 5, 6, 7, 8], consumer: "Consumer C" },
];

const partBarX = s3RightX + 0.1;
const partBarW = 4.1;
const partBarH = 0.55;
const partGap = 1.05;
let partStartY = 1.8;

for (let pIdx = 0; pIdx < partitions.length; pIdx++) {
  const p = partitions[pIdx];
  const barY = partStartY + pIdx * partGap;

  // Partition label
  slide3.addText(p.label, {
    x: partBarX,
    y: barY - 0.02,
    w: partBarW,
    h: 0.22,
    fontSize: 10,
    fontFace: FONT,
    color: p.color,
    bold: true,
    align: "left",
    margin: 0,
  });

  // Offset cells
  const cellCount = p.offsets.length;
  const cellW = partBarW / cellCount;
  const cellY = barY + 0.2;

  for (let i = 0; i < cellCount; i++) {
    slide3.addShape(pres.shapes.RECTANGLE, {
      x: partBarX + i * cellW,
      y: cellY,
      w: cellW - 0.02,
      h: partBarH,
      fill: { color: i < cellCount - 2 ? p.color : SHAPE_BG },
      line: { color: p.color, width: 0.5 },
    });
    slide3.addText(String(p.offsets[i]), {
      x: partBarX + i * cellW,
      y: cellY,
      w: cellW - 0.02,
      h: partBarH,
      fontSize: 10,
      fontFace: FONT,
      color: i < cellCount - 2 ? TEXT_WHITE : TEXT_MUTED,
      align: "center",
      valign: "middle",
      margin: 0,
    });
  }

  // Consumer assignment label
  slide3.addText(p.consumer, {
    x: partBarX,
    y: cellY + partBarH + 0.02,
    w: partBarW,
    h: 0.18,
    fontSize: 9,
    fontFace: FONT,
    color: ACCENT,
    align: "right",
    margin: 0,
  });
}

// Write the file
pres.writeFile({ fileName: "/workspace/kafka-architecture.pptx" }).then(() => {
  console.log("Created kafka-architecture.pptx");
});
