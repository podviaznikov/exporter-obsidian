# obsidian notesexporter plugin - release tasks

based on altoindex obsidian plugin. scoped to Apple Notes + Bear only.

## 1. write plugin code

- [ ] create `src/main.ts` — adapt from altoindex, keep only `notes://` and `bear://` schemes
  - link decoration (reading view + live preview editor extension)
  - "Open in Apple Notes" / "Open in Bear" context menu on files and editor
  - view action icon in tab header (native app icon)
  - status bar showing modified time from frontmatter
  - settings tab (show status bar toggle)
  - command palette: "Open in Apple Notes/Bear"
  - remove: sync dashboard, bases discovery, livetext, all other apple app schemes
- [ ] create `src/icons.ts` — only Apple Notes and Bear icons (base64 PNG, extracted via Electron `app.getFileIcon`)
  - `getIconForUrl(url)` — returns icon for notes:// or bear://
  - `getAppNameForUrl(url)` — returns "Apple Notes" or "Bear"
- [ ] update `styles.css` — already done, class names use `notesexporter-` prefix
- [ ] update `manifest.json` — already done, id=notesexporter

## 2. build and test locally

- [ ] `npm install` in obsidian-plugin/
- [ ] `npm run build` — produces main.js
- [ ] test in obsidian: symlink plugin folder to vault's `.obsidian/plugins/notesexporter/`
- [ ] verify: icons show on notes:// and bear:// links
- [ ] verify: context menu "Open in Apple Notes" works on exported .md files
- [ ] verify: status bar shows modified time
- [ ] verify: command palette works

## 3. create github repo

- [ ] create public repo `systemoperator/obsidian-notesexporter` on github
- [ ] add to repo root: `main.js`, `manifest.json`, `styles.css`
- [ ] add `README.md` with: what it does, screenshots, install instructions
- [ ] add `LICENSE` (MIT)
- [ ] push initial commit

## 4. create github release

- [ ] tag `0.1.0`
- [ ] create github release with tag `0.1.0`
- [ ] attach release assets: `main.js`, `manifest.json`, `styles.css`
- [ ] obsidian reads releases to auto-update plugins

## 5. submit to obsidian community plugins

- [ ] fork `obsidianmd/obsidian-releases` repo
- [ ] edit `community-plugins.json` — add entry:
  ```json
  {
    "id": "notesexporter",
    "name": "NotesExporter",
    "author": "System Operator",
    "description": "Open exported Apple Notes and Bear notes in their native apps with real icons.",
    "repo": "systemoperator/obsidian-notesexporter"
  }
  ```
- [ ] submit PR to obsidian-releases
- [ ] wait for automated review + approval
- [ ] once approved, plugin appears in obsidian community plugins browser

## 6. link from notesexporter app

- [ ] add button/link in NotesExporter macOS app pointing to obsidian plugin
- [ ] use deep link: `obsidian://show-plugin?id=notesexporter`

## notes

- plugin is desktop-only (uses Electron APIs for native app icons)
- frontmatter field: `source_url: "notes://showNote?identifier=..."` — already exported by NotesExporter
- bear notes use `bear://` scheme — need to verify frontmatter format from bear export
- altoindex source: `products/altoindex/obsidian-plugin/src/main.ts` (435 lines, reference implementation)
