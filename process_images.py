import re
import os

# 读取文件内容
file_path = 'docs\操作手册\24.03版本\Modbus功能使用手册.md'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 使用正则表达式删除所有图片标签中的width和height属性
# 匹配格式：![](./assets/xxx.png){width="xxx" height="xxx"}
pattern = r'(\!\[.*?\]\(.*?\))\{width="[^"]*"\s*height="[^"]*"\}'
modified_content = re.sub(pattern, r'\1', content)

# 也处理跨行的情况
pattern_multiline = r'(\!\[.*?\]\(.*?\))\{width="[^"]*"\s*\nheight="[^"]*"\}'
modified_content = re.sub(pattern_multiline, r'\1', modified_content)

# 写入修改后的内容
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(modified_content)

print(f"已处理文件: {file_path}")
print("所有图片标签的width和height属性已删除")