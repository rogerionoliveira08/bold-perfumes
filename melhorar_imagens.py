from __future__ import annotations

import shutil
from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parent
IMAGES_DIR = ROOT / "public" / "perfumes"
BACKUP_DIR = ROOT / "public" / "perfumes_backup"

EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
MIN_SIDE = 1200
MAX_SIDE = 1800

def backup_file(path: Path) -> None:
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    target = BACKUP_DIR / path.name
    if not target.exists():
        shutil.copy2(path, target)

def new_size(width: int, height: int) -> tuple[int, int]:
    short_side = min(width, height)
    long_side = max(width, height)

    if short_side < MIN_SIDE:
        scale = MIN_SIDE / short_side
    elif long_side > MAX_SIDE:
        scale = MAX_SIDE / long_side
    else:
        return width, height

    return round(width * scale), round(height * scale)

def improve_image(path: Path) -> None:
    backup_file(path)

    with Image.open(path) as original:
        image = ImageOps.exif_transpose(original)

        has_alpha = image.mode in {"RGBA", "LA"} or (
            image.mode == "P" and "transparency" in image.info
        )

        if has_alpha:
            image = image.convert("RGBA")
            alpha = image.getchannel("A")
            base = image.convert("RGB")
        else:
            alpha = None
            base = image.convert("RGB")

        size = new_size(base.width, base.height)
        if size != base.size:
            base = base.resize(size, Image.Resampling.LANCZOS)
            if alpha is not None:
                alpha = alpha.resize(size, Image.Resampling.LANCZOS)

        base = ImageEnhance.Contrast(base).enhance(1.06)
        base = ImageEnhance.Color(base).enhance(1.04)
        base = ImageEnhance.Brightness(base).enhance(1.02)
        base = ImageEnhance.Sharpness(base).enhance(1.18)
        base = base.filter(ImageFilter.UnsharpMask(radius=1.4, percent=115, threshold=3))

        if alpha is not None:
            result = base.convert("RGBA")
            result.putalpha(alpha)
        else:
            result = base

        ext = path.suffix.lower()

        if ext in {".jpg", ".jpeg"}:
            result.convert("RGB").save(
                path,
                format="JPEG",
                quality=92,
                optimize=True,
                progressive=True,
                subsampling=0,
            )
        elif ext == ".png":
            result.save(path, format="PNG", optimize=True, compress_level=7)
        elif ext == ".webp":
            result.save(path, format="WEBP", quality=92, method=6)

def main() -> None:
    if not IMAGES_DIR.exists():
        print(f"Pasta não encontrada: {IMAGES_DIR}")
        print("Coloque este arquivo na raiz do projeto Bold Parfum.")
        return

    files = sorted(
        path for path in IMAGES_DIR.iterdir()
        if path.is_file() and path.suffix.lower() in EXTENSIONS
    )

    if not files:
        print("Nenhuma imagem encontrada em public\\perfumes.")
        return

    print(f"{len(files)} imagem(ns) encontrada(s).")
    print("Criando backup e melhorando as imagens...\n")

    success = 0
    errors = 0

    for path in files:
        try:
            improve_image(path)
            success += 1
            print(f"[OK] {path.name}")
        except Exception as error:
            errors += 1
            print(f"[ERRO] {path.name}: {error}")

    print("\nProcessamento concluído.")
    print(f"Imagens melhoradas: {success}")
    print(f"Erros: {errors}")
    print(f"Backup dos originais: {BACKUP_DIR}")

if __name__ == "__main__":
    main()
