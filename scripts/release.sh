#!/bin/bash
set -e

# Usage: bash scripts/release.sh [patch|minor|major]
# Defaults to patch

BUMP=${1:-patch}
cd "$(dirname "$0")/.."

# read current version from manifest.json
CURRENT=$(node -p "require('./manifest.json').version")
echo "Current version: $CURRENT"

# bump version
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT"
case "$BUMP" in
  major) MAJOR=$((MAJOR + 1)); MINOR=0; PATCH=0 ;;
  minor) MINOR=$((MINOR + 1)); PATCH=0 ;;
  patch) PATCH=$((PATCH + 1)) ;;
  *) echo "Usage: $0 [patch|minor|major]"; exit 1 ;;
esac
VERSION="$MAJOR.$MINOR.$PATCH"
echo "New version: $VERSION"

# update manifest.json and package.json
node -e "
const fs = require('fs');
for (const f of ['manifest.json', 'package.json']) {
  const json = JSON.parse(fs.readFileSync(f, 'utf8'));
  json.version = '$VERSION';
  fs.writeFileSync(f, JSON.stringify(json, null, 2) + '\n');
}
"

# build
npm run typecheck
npm run build

# commit, tag, push
git add manifest.json package.json main.js
git commit -m "release $VERSION"
git tag "$VERSION"
git push && git push --tags

# create github release with assets
gh release create "$VERSION" main.js manifest.json styles.css \
  --title "$VERSION" \
  --notes "Release $VERSION"

echo "Released $VERSION"
