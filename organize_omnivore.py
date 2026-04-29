import os
import re
import shutil
from pathlib import Path

def main():
    vault_path = Path(r"C:\Users\momit\Documents\ObsidianVault")
    attachment_dir = vault_path / "Attachment"
    omnivore_root = vault_path / "03 Resources" / "Omnivore"

    pattern = re.compile(r'^[0-9a-fA-F-]+_(.+)_([0-9a-fA-F]+)\.(\w+)$')

    print("开始整理 Omnivore 附件...\n")

    # 移动图片
    for img_file in attachment_dir.glob("*_MD5.*"):
        match = pattern.match(img_file.name)
        if not match:
            continue

        raw_name = match.group(1)
        markdown_files = list(vault_path.rglob(f"{raw_name}.md"))
        if not markdown_files:
            continue

        note_file = markdown_files[0]
        note_folder = note_file.parent
        target_path = note_folder / img_file.name

        try:
            if not target_path.exists():
                shutil.move(str(img_file), target_path)
                print(f"✅ 已移动：{img_file.name}")
            else:
                img_file.unlink()
                print(f"🗑️ 已删除重复：{img_file.name}")
        except Exception as e:
            print(f"⚠️ 失败：{e}")

    # 清理真正空的文件夹
    print("\n🧹 清理空文件夹...")
    for date_folder in omnivore_root.glob("????-??-??"):
        if date_folder.is_dir():
            try:
                if not any(date_folder.iterdir()):
                    date_folder.rmdir()
                    print(f"🗑️ 已删除空文件夹：{date_folder.name}")
            except:
                pass

    print("\n🎉 整理完成！")
    os.system("pause")

if __name__ == "__main__":
    main()