import re, sys, json
from pathlib import Path
from urllib.parse import urlparse, parse_qsl, urlencode, urlunparse

AFFILIATE_TAG = "redteam0a-20"  # <-- change me
FILES = ["README.md", "tools.json"]  # remove any that don't exist

link_pat = re.compile(r"\[([^\]]+)\]\((https?://[^\s)]+)\)")

def add_tag_to_url(u: str) -> str:
    if "amazon.com" not in u:
        return u
    p = urlparse(u)
    q = dict(parse_qsl(p.query))
    if q.get("tag") == AFFILIATE_TAG:
        return u
    q["tag"] = AFFILIATE_TAG
    new = p._replace(query=urlencode(q))
    return urlunparse(new)

def process_markdown(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    def repl(m):
        title, url = m.groups()
        return f"[{title}]({add_tag_to_url(url)})"
    new_text = link_pat.sub(repl, text)
    if new_text != text:
        path.write_text(new_text, encoding="utf-8")
        return True
    return False

def process_json(path: Path) -> bool:
    changed = False
    data = json.loads(path.read_text(encoding="utf-8"))
    def tag(u): 
        nonlocal changed
        new = add_tag_to_url(u)
        if new != u: changed = True
        return new
    def walk(obj):
        if isinstance(obj, dict):
            for k,v in obj.items():
                if isinstance(v, str):
                    obj[k] = tag(v)
                else:
                    walk(v)
        elif isinstance(obj, list):
            for i,v in enumerate(obj):
                if isinstance(v, str):
                    obj[i] = tag(v)
                else:
                    walk(v)
    walk(data)
    if changed:
        path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return changed

def process(path: Path) -> bool:
    if not path.exists():
        return False
    if path.suffix.lower() in [".md", ".markdown"]:
        return process_markdown(path)
    if path.suffix.lower() == ".json":
        return process_json(path)
    return False

if __name__ == "__main__":
    any_changed = False
    for f in FILES:
        if process(Path(f)):
            print(f"✅ updated {f}")
            any_changed = True
        else:
            print(f"ℹ️ no changes {f}")
    sys.exit(0 if any_changed else 0)
