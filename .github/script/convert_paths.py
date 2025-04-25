import os
import re

def convert_paths_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # src="/..." 또는 href="/..."를 src="..." 또는 href="..."로 변경
    content = re.sub(r'(src|href)=["\']/([^"\']+)["\']', r'\1="\2"', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def walk_and_convert(root_dir, exts=('.html', '.js')):
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(exts):
                convert_paths_in_file(os.path.join(subdir, file))

if __name__ == "__main__":
    # 빌드 결과물 폴더명(예: build, dist, public 등)으로 변경
    walk_and_convert('build')
