#!/bin/bash
cd "$(dirname "$0")"

echo '{'
echo '  "files": ['
first=true
find . -type f \
  ! -name "index.html" \
  ! -name "generate-list.sh" \
  ! -name "downloads-list.json" | while read -r file; do
  filename=$(basename "$file")
  filepath="${file#./}"
  if [ "$first" = true ]; then
    first=false
  else
    echo ','
  fi
  echo -n "    {\"name\": \"$filename\", \"path\": \"$filepath\"}"
done
echo ''
echo '  ]'
echo '}'
