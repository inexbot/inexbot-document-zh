from pathlib import Path
import re

path = Path('qwer.md')
text = path.read_text(encoding='utf-8')
lines = text.splitlines()
new_lines = []
i = 0
pattern_table_start = re.compile(r'^\+[\-+:]+\+$')
while i < len(lines):
    line = lines[i]
    if pattern_table_start.match(line) and i + 1 < len(lines) and lines[i + 1].strip().startswith('|'):
        j = i
        block_lines = []
        while j < len(lines) and (lines[j].startswith('+') or lines[j].startswith('|') or lines[j].strip() == ''):
            block_lines.append(lines[j])
            j += 1
        rows = []
        for bl in block_lines:
            if bl.startswith('|') and bl.endswith('|'):
                content = bl[1:-1]
                cells = [c.strip() for c in content.split('|')]
                filtered = [c for c in cells if not re.fullmatch(r'[+\-: ]*', c)]
                if filtered:
                    rows.append(filtered)
        if not rows:
            new_lines.append(line)
            i += 1
            continue
        new_lines.append('<table border="1" style="border-collapse: collapse;">')
        for ri, cells in enumerate(rows):
            if ri == 0 and len(rows) > 1:
                row_html = '<tr>' + ''.join(
                    f'<th style="background-color: #d3d3d3; text-align: center;">{c or "&nbsp;"}</th>'
                    for c in cells
                ) + '</tr>'
            else:
                row_html = '<tr>' + ''.join(
                    f'<td style="vertical-align: top;">{c or "&nbsp;"}</td>'
                    for c in cells
                ) + '</tr>'
            new_lines.append(row_html)
        new_lines.append('</table>')
        i = j
    else:
        new_lines.append(line)
        i += 1

path.write_text('\n'.join(new_lines), encoding='utf-8')
print('converted')
