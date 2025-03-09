#!/bin/bash

# This script updates all HTML pages to include mobile-enhancements.js script

# Update all HTML files in the pages directory
for page in pages/*.html; do
  # Check if the mobile-enhancements.js script is already included
  if ! grep -q "mobile-enhancements.js" "$page"; then
    # Add mobile-enhancements.js script before the closing body tag
    sed -i '' 's|<script src="../js/component-loader.js"></script>|<script src="../js/component-loader.js"></script>\n    <script src="../js/mobile-enhancements.js"></script>|g' "$page"
    echo "Updated $page"
  else
    echo "$page already includes mobile-enhancements.js"
  fi
done

# Also update impressum.html which might be in the root directory
if [ -f "impressum.html" ]; then
  if ! grep -q "mobile-enhancements.js" "impressum.html"; then
    sed -i '' 's|<script src="js/component-loader.js"></script>|<script src="js/component-loader.js"></script>\n    <script src="js/mobile-enhancements.js"></script>|g' "impressum.html"
    echo "Updated impressum.html"
  else
    echo "impressum.html already includes mobile-enhancements.js"
  fi
fi

echo "All pages updated successfully!"
