#!/bin/bash
# Chạy script này tại thư mục GỐC của project (nơi có .git)
# Mục đích: đổi toàn bộ ảnh .jpg (chữ thường) đang được Git track thành .JPG (chữ hoa)
# Dùng kỹ thuật rename 2 bước để Git nhận diện đúng thay đổi hoa-thường trên hệ thống file không phân biệt hoa-thường (Windows/macOS)

echo "Đang tìm các file .jpg (chữ thường) được Git track..."
files=$(git ls-files | grep '\.jpg$')

if [ -z "$files" ]; then
  echo "Không tìm thấy file .jpg nào cần đổi. Có thể tất cả đã là .JPG."
  exit 0
fi

echo "Danh sách file sẽ đổi:"
echo "$files"
echo ""

for f in $files; do
  tmp="${f}.tmp_rename"
  target="${f%.jpg}.JPG"

  echo "Đổi: $f -> $target"

  # Bước 1: đổi sang tên tạm (để Git chắc chắn nhận diện có thay đổi)
  git mv "$f" "$tmp"

  # Bước 2: đổi từ tên tạm sang tên đích thật (.JPG)
  git mv "$tmp" "$target"
done

echo ""
echo "Hoàn tất đổi tên. Kiểm tra lại bằng: git status"
echo "Sau khi kiểm tra ổn, chạy: git commit -m \"fix: normalize all image extensions to .JPG\" && git push"