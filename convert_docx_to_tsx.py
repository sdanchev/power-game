import os
import re
import sys
from docx import Document

# === CONFIG ===
OUTPUT_DIR = "src/scenes"  # Where .tsx files will be saved
IMAGE_PATH_PREFIX = "/assets/"  # Path used inside JSX <img src=...>
INDENT = "  "


def parse_docx(filepath):
    doc = Document(filepath)
    scenes = {}
    current_scene = None
    buffer = []
    imports = set()

    def save_scene():
        nonlocal buffer, current_scene, imports
        if current_scene and buffer:
            scenes[current_scene] = {
                "content": "\n".join(buffer),
                "imports": sorted(list(imports))
            }
            buffer = []
            imports = set()

    for para in doc.paragraphs:
        text = para.text.strip()
        if not text:
            continue

        # Scene start
        scene_match = re.match(r"^###\s*Scene:\s*(.+)$", text, re.IGNORECASE)
        if scene_match:
            save_scene()
            current_scene = scene_match.group(1).strip()
            continue

        # Image marker
        img_match = re.match(r"^\[image:\s*(.+?)\s*\]$", text, re.IGNORECASE)
        if img_match:
            filename = img_match.group(1).strip()
            buffer.append(f'{INDENT}<img src="{IMAGE_PATH_PREFIX}{filename}" alt="{os.path.splitext(filename)[0]}" />')
            continue

        # Component marker
        comp_match = re.match(r"^\[component:\s*([A-Za-z0-9_]+)\s*\]$", text, re.IGNORECASE)
        if comp_match:
            comp_name = comp_match.group(1).strip()
            imports.add(comp_name)
            buffer.append(f"{INDENT}<{comp_name} />")
            continue

        # Link marker (looser regex, allows optional spaces around |)
        link_match = re.match(r"^\[link:\s*(.+?)\s*\|\s*(https?://.+?)\s*\]$", text, re.IGNORECASE)
        if link_match:
            link_text = link_match.group(1).strip()
            link_url = link_match.group(2).strip()
            buffer.append(
                f'{INDENT}<a href="{link_url}" target="_blank" rel="noopener noreferrer">{link_text}</a>'
            )
            continue

        # Choice marker
        choice_match = re.match(r"^->\s*(.+?):\s*(.+)$", text)
        if choice_match:
            choice_text = choice_match.group(1).strip()
            target_scene = choice_match.group(2).strip()
            buffer.append(
                f'{INDENT}<button onClick={{() => setScene("{target_scene}")}}>{choice_text}</button>'
            )
            continue

        # Footnote marker (looser matching)
        fn_match = re.match(r"^\[fn:\s*(.+?)\s*\]$", text, re.IGNORECASE)
        if fn_match:
            note_text = fn_match.group(1).strip()
            buffer.append(f'{INDENT}<span className="footnote">{note_text}</span>')
            continue

        # Regular paragraph
        buffer.append(f"{INDENT}<p>{text}</p>")

    save_scene()
    return scenes


def write_tsx_files(scenes):
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for scene_name, data in scenes.items():
        filename = re.sub(r"\W+", "", scene_name) + ".tsx"
        filepath = os.path.join(OUTPUT_DIR, filename)
        imports_code = ""
        for comp in data["imports"]:
            imports_code += f"import {comp} from '../components/{comp}';\n"
        with open(filepath, "w", encoding="utf-8") as f:
            f.write("import React from 'react';\n")
            if imports_code:
                f.write(imports_code + "\n")
            f.write(f"export default function {scene_name.replace(' ', '')}({{ setScene }}) {{\n")
            f.write("  return (\n")
            f.write("    <div>\n")
            f.write(data["content"] + "\n")
            f.write("    </div>\n")
            f.write("  );\n")
            f.write("}\n")
        print(f"✅ Wrote {filepath}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python convert_docx_to_tsx.py <input.docx>")
        sys.exit(1)

    input_file = sys.argv[1]
    scenes = parse_docx(input_file)
    write_tsx_files(scenes)
