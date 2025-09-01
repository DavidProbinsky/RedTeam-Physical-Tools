// scripts/update-link-health.mjs
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const repoRoot = process.cwd();
const reportPath = path.join(repoRoot, "lychee", "out.json");
const readmePath = path.join(repoRoot, "README.md");

const START = "<!--LINK_HEALTH_START-->";
const END = "<!--LINK_HEALTH_END-->";

function emoji(status) {
  return status === "Ok" ? "✅" : "❌";
}

function escapeMd(s) {
  return s.replace(/\|/g, "\\|");
}

function loadReport() {
  if (!fs.existsSync(reportPath)) {
    return { links: [] };
  }
  const raw = fs.readFileSync(reportPath, "utf8");
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to parse lychee JSON:", e);
    return { links: [] };
  }
}

function buildTable(links) {
  // links: array of { target, status, status_code, error, sources: [{file, line}] }
  // Deduplicate by URL, prefer failing status if any source fails.
  const byUrl = new Map();
  for (const l of links) {
    const key = l.target;
    const current = byUrl.get(key);
    if (!current) {
      byUrl.set(key, l);
    } else {
      // If any occurrence is failing, keep that
      const curOk = current.status === "Ok";
      const newOk = l.status === "Ok";
      if (curOk && !newOk) byUrl.set(key, l);
    }
  }

  const rows = [...byUrl.values()]
    .sort((a, b) => a.target.localeCompare(b.target))
    .map((l) => {
      const status = emoji(l.status);
      const code = l.status_code ?? "";
      const err = l.error ? " " + escapeMd(String(l.error)).slice(0, 120) : "";
      const src = Array.isArray(l.sources) && l.sources.length
        ? l.sources
            .slice(0, 3)
            .map((s) => `${path.basename(s.file)}:${s.line ?? ""}`)
            .join(", ")
        : "";
      return `| ${status} | ${escapeMd(l.target)} | ${code} | ${escapeMd(src)} |${err ? " " + err : ""}`;
    });

  const header =
    "| Status | URL | Code | Found in (file:line) |\n|---|---|---:|---|\n";
  return header + (rows.length ? rows.join("\n") : "| ✅ | _No links found_ |  |  |");
}

function updateReadme(table) {
  if (!fs.existsSync(readmePath)) {
    throw new Error("README.md not found");
  }
  const md = fs.readFileSync(readmePath, "utf8");

  // Ensure markers exist; if not, append at end
  let newMd = md;
  if (!md.includes(START) || !md.includes(END)) {
    newMd += `\n\n## Link Health\n${START}\n_The table below is updated automatically by a scheduled job._\n${END}\n`;
  }

  const before = newMd.split(START)[0];
  const after = newMd.split(END)[1] ?? "";
  const middle = `\n${table}\n`;
  return before + START + middle + END + after;
}

function main() {
  const data = loadReport();
  const links = Array.isArray(data?.links) ? data.links : [];
  const table = buildTable(links);
  const updated = updateReadme(table);

  fs.writeFileSync(readmePath, updated, "utf8");
  console.log("README Link Health section updated.");
}

main();
