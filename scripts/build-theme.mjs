// scripts/build-theme.mjs
import fs from "node:fs";
import path from "node:path";

const tokensPath = path.resolve("src/styles/tokens.json");
const outPath = path.resolve("src/styles/theme.css");

const raw = fs.readFileSync(tokensPath, "utf8");
const tk = JSON.parse(raw);

// helpers
const gw = (obj, pathArr, fallback) => {
  try {
    return pathArr.reduce((o, k) => (o ?? {})[k], obj) ?? fallback;
  } catch {
    return fallback;
  }
};

const lines = [];
lines.push("/* Auto-generated theme variables from tokens.json */");
lines.push("/* Run: node scripts/build-theme.mjs to regenerate */");
lines.push("");

// =========================
// COLORS (nested groups)
// =========================
function emitColors(node, trail = []) {
  for (const [k, v] of Object.entries(node ?? {})) {
    if (v && typeof v === "object" && "value" in v) {
      const name = trail.concat(k).join("-").toLowerCase();
      lines.push(`  --color-${name}: ${v.value};`);
    } else if (v && typeof v === "object") {
      emitColors(v, trail.concat(k));
    }
  }
}
// tokens path: props.color.<group>.<shade>.value
emitColors(gw(tk, ["props", "color"], {}));

// =========================
// TYPOGRAPHY
// =========================
const typo = gw(tk, ["props", "typography"], {});
// font family
if (typo.fontFamily?.value) lines.push(`  --font-sans: ${typo.fontFamily.value};`);

// sizes
for (const [k, v] of Object.entries(typo.size ?? {})) {
  if (v?.value) lines.push(`  --font-size-${k}: ${v.value};`);
}

// weights
for (const [k, v] of Object.entries(typo.weight ?? {})) {
  if (v?.value) lines.push(`  --font-weight-${k}: ${v.value};`);
}

// line-heights
for (const [k, v] of Object.entries(typo.lineHeight ?? {})) {
  if (v?.value) lines.push(`  --leading-${k}: ${v.value};`);
}

// letter-spacing
for (const [k, v] of Object.entries(typo.letterSpacing ?? {})) {
  if (v?.value) lines.push(`  --tracking-${k}: ${v.value};`);
}

// =========================
// RADIUS / SPACING / SHADOW
// =========================
for (const [k, v] of Object.entries(gw(tk, ["props", "radius"], {}))) {
  if (v?.value) lines.push(`  --radius-${k}: ${v.value};`);
}

for (const [k, v] of Object.entries(gw(tk, ["props", "spacing"], {}))) {
  if (v?.value) lines.push(`  --spacing-${k}: ${v.value};`);
}

for (const [k, v] of Object.entries(gw(tk, ["props", "shadow"], {}))) {
  if (v?.value) lines.push(`  --shadow-${k}: ${v.value};`);
}

// =========================
// LAYOUT / MOTION (generic vars)
// =========================
const layout = gw(tk, ["props", "layout"], {});
if (layout.containerMaxWidth?.value)
  lines.push(`  --container-max-width: ${layout.containerMaxWidth.value};`);
if (layout.sectionPaddingDesktopY?.value)
  lines.push(`  --section-padding-desktop-y: ${layout.sectionPaddingDesktopY.value};`);
if (layout.sectionPaddingMobileY?.value)
  lines.push(`  --section-padding-mobile-y: ${layout.sectionPaddingMobileY.value};`);
if (layout.gridGap?.value)
  lines.push(`  --grid-gap: ${layout.gridGap.value};`);

const motion = gw(tk, ["props", "motion"], {});
for (const [k, v] of Object.entries(motion.duration ?? {})) {
  if (v?.value) lines.push(`  --duration-${k}: ${v.value};`);
}
for (const [k, v] of Object.entries(motion.easing ?? {})) {
  if (v?.value) lines.push(`  --easing-${k}: ${v.value};`);
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Wrote ${outPath}`);
console.log("Now copy these variables into your @theme block in src/index.css");
