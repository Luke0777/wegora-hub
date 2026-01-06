import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const ILLU_DIR = path.join(ROOT, "src/components/hub/illustrations");

// Regexes for colors
const HEX = /#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;
const RGB = /rgba?\([^)]+\)/g;
const HSL = /hsla?\([^)]+\)/g;

// Regexes for SVG attributes (both JSX camelCase and HTML kebab-case)
const STROKE_WIDTH = /\b(?:strokeWidth|stroke-width)\s*[=:]\s*["'{]?([^"'}>\s,;]+)["'}]?/g;
const STROKE = /\bstroke\s*[=:]\s*["'{]([^"'}]+)["'}]/g;
const FILL = /\bfill\s*[=:]\s*["'{]([^"'}]+)["'}]/g;
const RX = /\brx\s*[=:]\s*["'{]?([^"'}>\s,;]+)["'}]?/g;
const RY = /\bry\s*[=:]\s*["'{]?([^"'}>\s,;]+)["'}]?/g;
const OPACITY = /\b(?:opacity|fillOpacity|fill-opacity|strokeOpacity|stroke-opacity)\s*[=:]\s*["'{]?([^"'}>\s,;]+)["'}]?/g;

function listFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listFiles(p));
    else if (/\.(t|j)sx?$/.test(e.name) && !e.name.endsWith('.d.ts')) out.push(p);
  }
  return out;
}

function uniq(arr) {
  return [...new Set(arr)].sort();
}

function collectMatches(regex, text) {
  const m = text.match(regex);
  return m ? uniq(m) : [];
}

function collectAttr(regex, text) {
  const out = [];
  let m;
  const r = new RegExp(regex.source, regex.flags);
  while ((m = r.exec(text)) !== null) {
    const val = String(m[1]).trim();
    // Skip CSS variables, currentColor, none, etc.
    if (val && !val.startsWith('var(') && val !== 'currentColor' && val !== 'none' && val !== 'inherit') {
      out.push(val);
    }
  }
  return uniq(out);
}

function collectAllAttr(regex, text) {
  const out = [];
  let m;
  const r = new RegExp(regex.source, regex.flags);
  while ((m = r.exec(text)) !== null) {
    out.push(String(m[1]).trim());
  }
  return uniq(out);
}

function categorizeColor(color) {
  const c = color.toLowerCase();

  // Blues
  if (/#(0066ff|0068ff|3b82f6|60a5fa|93c5fd|bfdbfe|dbeafe|eff6ff|1e88e5|2196f3|42a5f5|64b5f6)/i.test(c)) return 'blue';
  if (c.includes('3b82f6') || c.includes('60a5fa')) return 'blue';

  // Greens
  if (/#(10b981|34d399|6ee7b7|a7f3d0|d1fae5|22c55e|4ade80|86efac)/i.test(c)) return 'green';

  // Yellows/Oranges
  if (/#(f59e0b|fbbf24|fcd34d|fef3c7|f97316|fb923c|fdba74)/i.test(c)) return 'yellow/orange';

  // Reds
  if (/#(ef4444|f87171|fca5a5|fee2e2|dc2626)/i.test(c)) return 'red';

  // Purples
  if (/#(8b5cf6|a78bfa|c4b5fd|ede9fe|7c5cfc|8086f7)/i.test(c)) return 'purple';

  // Grays
  if (/#(f8fafc|f1f5f9|e2e8f0|cbd5e1|94a3b8|64748b|475569|334155|1e293b|0f172a)/i.test(c)) return 'gray';
  if (/#(f9fafb|f3f4f6|e5e7eb|d1d5db|9ca3af|6b7280|4b5563|374151|1f2937|111827)/i.test(c)) return 'gray';

  // Pure black/white
  if (c === '#000' || c === '#000000' || c === '#0a0a0a') return 'black';
  if (c === '#fff' || c === '#ffffff') return 'white';

  return 'other';
}

const files = listFiles(ILLU_DIR).filter(f => !f.endsWith('index.ts'));
const report = [];
const json = { scannedDir: ILLU_DIR, files: [], summary: {} };

const allColorsMap = new Map();
const allStrokeWidthsSet = new Set();
const allRxSet = new Set();
const allRySet = new Set();
const allOpacitiesSet = new Set();

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  const fileName = path.relative(ROOT, file);

  // Collect hardcoded colors (excluding CSS vars and currentColor)
  const hexColors = collectMatches(HEX, src).filter(c => !c.startsWith('#{')); // Filter out template literals
  const rgbColors = collectMatches(RGB, src);
  const hslColors = collectMatches(HSL, src).filter(c => !c.includes('var('));
  const colors = uniq([...hexColors, ...rgbColors, ...hslColors]);

  const strokeWidths = collectAttr(STROKE_WIDTH, src);
  const strokes = collectAllAttr(STROKE, src);
  const fills = collectAllAttr(FILL, src);
  const rxs = collectAttr(RX, src);
  const rys = collectAttr(RY, src);
  const opacities = collectAttr(OPACITY, src);

  // Track for global summary
  colors.forEach(c => {
    if (!allColorsMap.has(c)) allColorsMap.set(c, []);
    allColorsMap.get(c).push(fileName);
  });
  strokeWidths.forEach(s => allStrokeWidthsSet.add(s));
  rxs.forEach(r => allRxSet.add(r));
  rys.forEach(r => allRySet.add(r));
  opacities.forEach(o => allOpacitiesSet.add(o));

  json.files.push({
    file: fileName,
    colors,
    colorCategories: colors.reduce((acc, c) => {
      const cat = categorizeColor(c);
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(c);
      return acc;
    }, {}),
    strokeWidths,
    strokes,
    fills,
    rxs,
    rys,
    opacities,
  });

  report.push({
    file: fileName,
    colorsCount: colors.length,
    strokeWidths: strokeWidths.join(", ") || "-",
    rxs: rxs.join(", ") || "-",
    rys: rys.join(", ") || "-",
    opacities: opacities.length > 0 ? opacities.join(", ") : "-",
    colors: colors.join(", ") || "-",
  });
}

// Aggregate summary
const allColors = [...allColorsMap.keys()].sort();
const allStrokeWidths = [...allStrokeWidthsSet].sort();
const allRxs = [...allRxSet].sort();
const allRys = [...allRySet].sort();
const allOpacities = [...allOpacitiesSet].sort((a, b) => parseFloat(a) - parseFloat(b));

// Categorize all colors
const colorsByCategory = {};
for (const color of allColors) {
  const cat = categorizeColor(color);
  if (!colorsByCategory[cat]) colorsByCategory[cat] = [];
  colorsByCategory[cat].push(color);
}

json.summary = {
  totalFiles: files.length,
  uniqueColors: allColors.length,
  uniqueStrokeWidths: allStrokeWidths.length,
  uniqueRx: allRxs.length,
  uniqueRy: allRys.length,
  uniqueOpacities: allOpacities.length,
  colorsByCategory,
  allColors: allColors.map(c => ({ color: c, category: categorizeColor(c), usedIn: allColorsMap.get(c) })),
  allStrokeWidths,
  allRxs,
  allRys,
  allOpacities,
};

// Generate Markdown report
const mdLines = [];
mdLines.push(`# Illustration Audit Report\n`);
mdLines.push(`**Generated:** ${new Date().toISOString()}`);
mdLines.push(`**Scanned:** \`${path.relative(ROOT, ILLU_DIR)}\``);
mdLines.push(`**Files:** ${files.length}\n`);

mdLines.push(`---\n`);
mdLines.push(`## 📊 Summary\n`);
mdLines.push(`| Metric | Count | Values |`);
mdLines.push(`|--------|-------|--------|`);
mdLines.push(`| Unique colors | **${allColors.length}** | - |`);
mdLines.push(`| strokeWidth | **${allStrokeWidths.length}** | ${allStrokeWidths.join(", ") || "-"} |`);
mdLines.push(`| rx values | **${allRxs.length}** | ${allRxs.slice(0, 10).join(", ")}${allRxs.length > 10 ? '...' : ''} |`);
mdLines.push(`| ry values | **${allRys.length}** | ${allRys.slice(0, 10).join(", ")}${allRys.length > 10 ? '...' : ''} |`);
mdLines.push(`| opacity values | **${allOpacities.length}** | ${allOpacities.join(", ") || "-"} |`);
mdLines.push(``);

// Color categories
mdLines.push(`## 🎨 Colors by Category\n`);
for (const [cat, colors] of Object.entries(colorsByCategory).sort()) {
  mdLines.push(`### ${cat.charAt(0).toUpperCase() + cat.slice(1)} (${colors.length})`);
  mdLines.push(`\`\`\``);
  mdLines.push(colors.join('\n'));
  mdLines.push(`\`\`\`\n`);
}

// Inconsistencies
mdLines.push(`## ⚠️ Potential Inconsistencies\n`);

if (allStrokeWidths.length > 2) {
  mdLines.push(`### StrokeWidth Variants (${allStrokeWidths.length} different values)`);
  mdLines.push(`Consider standardizing to 1-2 values (e.g., \`1.5\` and \`2\`):`);
  mdLines.push(`\`${allStrokeWidths.join(', ')}\`\n`);
}

if (allOpacities.length > 3) {
  mdLines.push(`### Opacity Variants (${allOpacities.length} different values)`);
  mdLines.push(`Consider standardizing decorative opacities:`);
  mdLines.push(`\`${allOpacities.join(', ')}\`\n`);
}

// Similar blues check
const blues = colorsByCategory['blue'] || [];
if (blues.length > 3) {
  mdLines.push(`### Multiple Blue Variants (${blues.length})`);
  mdLines.push(`Consider consolidating to 2-3 brand blues:`);
  mdLines.push(`\`${blues.join(', ')}\`\n`);
}

// Files breakdown
mdLines.push(`---\n`);
mdLines.push(`## 📁 Per-File Details\n`);
for (const r of report) {
  mdLines.push(`### ${r.file}`);
  mdLines.push(`| Attribute | Values |`);
  mdLines.push(`|-----------|--------|`);
  mdLines.push(`| strokeWidth | ${r.strokeWidths} |`);
  mdLines.push(`| rx | ${r.rxs} |`);
  mdLines.push(`| ry | ${r.rys} |`);
  mdLines.push(`| opacity | ${r.opacities} |`);
  mdLines.push(`| colors (${r.colorsCount}) | ${r.colors.length > 100 ? r.colors.substring(0, 100) + '...' : r.colors} |`);
  mdLines.push(``);
}

// Recommendations
mdLines.push(`---\n`);
mdLines.push(`## 💡 Recommendations\n`);
mdLines.push(`### Token Consolidation`);
mdLines.push(`Based on this audit, consider creating these illustration tokens:\n`);
mdLines.push(`\`\`\`css`);
mdLines.push(`:root {`);
mdLines.push(`  /* Illustration tokens */`);
mdLines.push(`  --illustration-stroke-width: 2px;`);
mdLines.push(`  --illustration-radius: 12px;`);
mdLines.push(`  --illustration-deco-opacity: 0.1;`);
mdLines.push(`  `);
mdLines.push(`  /* Map to existing design tokens */`);
mdLines.push(`  --illustration-ink: var(--foreground);`);
mdLines.push(`  --illustration-primary: var(--primary);`);
mdLines.push(`  --illustration-muted: var(--muted-foreground);`);
mdLines.push(`  --illustration-border: var(--border);`);
mdLines.push(`}`);
mdLines.push(`\`\`\`\n`);

fs.writeFileSync(path.join(ROOT, "audit/illustrations.audit.json"), JSON.stringify(json, null, 2));
fs.writeFileSync(path.join(ROOT, "audit/illustrations.audit.md"), mdLines.join("\n"));

console.log("✅ Audit complete!");
console.log(`   📄 audit/illustrations.audit.md`);
console.log(`   📄 audit/illustrations.audit.json`);
console.log(`\n📊 Quick Summary:`);
console.log(`   Files scanned: ${files.length}`);
console.log(`   Unique colors: ${allColors.length}`);
console.log(`   StrokeWidth variants: ${allStrokeWidths.length} (${allStrokeWidths.join(', ')})`);
console.log(`   Opacity variants: ${allOpacities.length}`);
