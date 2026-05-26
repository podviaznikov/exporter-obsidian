# Exporter

Obsidian plugin for exported Apple Notes and Bear notes.

Decorates `notes://` and `bear://` links with native app icons and lets you open notes in their source app directly from Obsidian.

## Features

- native app icons on `notes://` and `bear://` links in reading view, live preview, and properties panel
- "Open in Apple Notes" / "Open in Bear" in file and editor context menus
- native app icon button in the tab header bar
- status bar showing source app and last modified time
- command palette: "Open in native app"

## How it works

The plugin reads `source_url` (or `source` / `link`) from frontmatter and matches it against `notes://` and `bear://` schemes.

Apple Notes exported files typically have frontmatter like:

```yaml
source_url: "notes://showNote?identifier=..."
```

## Install

### From Obsidian community plugins

Search for "Exporter" in Settings > Community plugins > Browse.

### Manual

Copy `main.js`, `manifest.json`, and `styles.css` to your vault at `.obsidian/plugins/exporter/`.

## Development

```
npm install
npm run build       # build main.js
npm run dev         # watch mode
npm run typecheck   # type check
```

## License

MIT
