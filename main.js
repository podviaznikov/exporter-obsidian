"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ExporterPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var import_view = require("@codemirror/view");
var import_state = require("@codemirror/state");

// src/icons.ts
var APP_ICONS = {
  "notes://": "data:image/png;base64,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",
  "bear://": "data:image/png;base64,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"
};
var APP_NAMES = {
  "notes://": "Apple Notes",
  "bear://": "Bear"
};
var SORTED_SCHEMES = Object.keys(APP_ICONS).sort((a, b) => b.length - a.length);
function getIconForUrl(url) {
  for (const scheme of SORTED_SCHEMES) {
    if (url.startsWith(scheme)) return APP_ICONS[scheme];
  }
  return null;
}
function getAppNameForUrl(url) {
  for (const scheme of SORTED_SCHEMES) {
    if (url.startsWith(scheme)) return APP_NAMES[scheme] || null;
  }
  return null;
}

// src/main.ts
var SCHEMES = Object.keys(APP_ICONS);
function decorateLinks(el) {
  const links = el.querySelectorAll("a");
  for (const link of Array.from(links)) {
    const href = link.getAttribute("href") || link.getAttribute("data-href") || "";
    if (!href) continue;
    const iconSrc = getIconForUrl(href);
    if (!iconSrc) continue;
    if (link.querySelector(".exporter-app-icon")) continue;
    const img = document.createElement("img");
    img.src = iconSrc;
    img.className = "exporter-app-icon";
    img.alt = "";
    const isInProperties = link.closest(".metadata-property") !== null;
    const linkText = link.textContent?.trim() || "";
    if (isInProperties || linkText === "\u2197" || linkText === "open") {
      link.textContent = "";
      link.appendChild(img);
      link.classList.add("exporter-source-link");
    } else {
      link.insertBefore(img, link.firstChild);
    }
  }
  const propertyValues = el.querySelectorAll(".metadata-property .metadata-input-longtext, .metadata-property .multi-select-pill-content");
  for (const node of Array.from(propertyValues)) {
    const text = node.textContent?.trim() || "";
    if (!text) continue;
    const iconSrc = getIconForUrl(text);
    if (!iconSrc) continue;
    if (node.querySelector?.(".exporter-app-icon")) continue;
    if (node.parentElement?.querySelector?.(".exporter-app-icon")) continue;
    const img = document.createElement("img");
    img.src = iconSrc;
    img.className = "exporter-app-icon";
    img.alt = "";
    const parent = node.parentElement;
    if (parent) {
      parent.insertBefore(img, node);
      parent.classList.add("exporter-source-link");
    }
  }
}
var LINK_RE = /\[([^\]]*)\]\(((notes:\/\/|bear:\/\/)[^)]*)\)/g;
var AppIconWidget = class extends import_view.WidgetType {
  constructor(iconSrc) {
    super();
    this.iconSrc = iconSrc;
  }
  toDOM() {
    const img = document.createElement("img");
    img.src = this.iconSrc;
    img.className = "exporter-app-icon";
    img.alt = "";
    return img;
  }
  eq(other) {
    return this.iconSrc === other.iconSrc;
  }
};
function buildDecorations(view) {
  const builder = new import_state.RangeSetBuilder();
  const doc = view.state.doc;
  for (const { from, to } of view.visibleRanges) {
    for (let pos = from; pos < to; ) {
      const line = doc.lineAt(pos);
      const text = line.text;
      LINK_RE.lastIndex = 0;
      let match;
      while ((match = LINK_RE.exec(text)) !== null) {
        const url = match[2];
        const iconSrc = getIconForUrl(url);
        if (iconSrc) {
          const linkStart = line.from + match.index + 1;
          builder.add(
            linkStart,
            linkStart,
            import_view.Decoration.widget({ widget: new AppIconWidget(iconSrc), side: -1 })
          );
        }
      }
      pos = line.to + 1;
    }
  }
  return builder.finish();
}
var appIconPlugin = import_view.ViewPlugin.fromClass(
  class {
    decorations;
    constructor(view) {
      this.decorations = buildDecorations(view);
    }
    update(update) {
      if (update.docChanged || update.viewportChanged) {
        this.decorations = buildDecorations(update.view);
      }
    }
  },
  { decorations: (v) => v.decorations }
);
function getSourceUrl(app, file) {
  const fm = app.metadataCache.getFileCache(file)?.frontmatter;
  const url = fm?.["source_url"] || fm?.["source"] || fm?.["link"];
  if (!url || typeof url !== "string") return null;
  if (!SCHEMES.some((s) => url.startsWith(s))) return null;
  return url;
}
function addOpenInAppMenuItem(app, menu, file) {
  const url = getSourceUrl(app, file);
  if (!url) return;
  const appName = getAppNameForUrl(url);
  if (!appName) return;
  const iconSrc = getIconForUrl(url);
  menu.addItem((item) => {
    item.setTitle(`Open in ${appName}`);
    item.setIcon("arrow-up-right");
    item.onClick(() => window.open(url));
    if (iconSrc) {
      setTimeout(() => {
        const menuEl = document.querySelector(".menu");
        if (!menuEl) return;
        const items = menuEl.querySelectorAll(".menu-item-title");
        for (const el of Array.from(items)) {
          if (el.textContent === `Open in ${appName}`) {
            const iconEl = el.parentElement?.querySelector(".menu-item-icon");
            if (iconEl) {
              iconEl.innerHTML = "";
              const img = document.createElement("img");
              img.src = iconSrc;
              img.className = "exporter-app-icon";
              img.alt = "";
              iconEl.appendChild(img);
            }
            break;
          }
        }
      }, 0);
    }
  });
}
var DEFAULT_SETTINGS = {
  showStatusBar: true
};
var ExporterPlugin = class extends import_obsidian.Plugin {
  settings = DEFAULT_SETTINGS;
  statusBarEl = null;
  observer = null;
  viewActionCleanup = null;
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new ExporterSettingTab(this.app, this));
    this.registerEditorExtension(appIconPlugin);
    this.registerMarkdownPostProcessor((el) => {
      decorateLinks(el);
    });
    this.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of Array.from(mutation.addedNodes)) {
          if (node instanceof HTMLElement) {
            decorateLinks(node);
          }
        }
      }
    });
    this.observer.observe(document.body, { childList: true, subtree: true });
    this.app.workspace.onLayoutReady(() => decorateLinks(document.body));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => {
      setTimeout(() => decorateLinks(document.body), 100);
    }));
    this.addCommand({
      id: "exporter:open-in-app",
      name: "Open in native app",
      checkCallback: (checking) => {
        const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (!view || !view.file) return false;
        const url = getSourceUrl(this.app, view.file);
        if (!url) return false;
        if (!checking) {
          window.open(url);
        }
        return true;
      }
    });
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        if (file instanceof import_obsidian.TFile && file.extension === "md") {
          addOpenInAppMenuItem(this.app, menu, file);
        }
      })
    );
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, _editor, view) => {
        if (view.file) {
          addOpenInAppMenuItem(this.app, menu, view.file);
        }
      })
    );
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", (leaf) => {
        this.updateViewAction(leaf);
      })
    );
    this.app.workspace.onLayoutReady(() => {
      this.updateViewAction(this.app.workspace.activeLeaf);
    });
    if (this.settings.showStatusBar) {
      this.initStatusBar();
    }
  }
  onunload() {
    this.observer?.disconnect();
    this.viewActionCleanup?.();
  }
  updateViewAction(leaf) {
    this.viewActionCleanup?.();
    this.viewActionCleanup = null;
    if (!leaf) return;
    const view = leaf.view;
    if (!(view instanceof import_obsidian.MarkdownView) || !view.file) return;
    const url = getSourceUrl(this.app, view.file);
    if (!url) return;
    const appName = getAppNameForUrl(url);
    const iconSrc = getIconForUrl(url);
    if (!appName || !iconSrc) return;
    const actionEl = view.addAction("arrow-up-right", `Open in ${appName}`, () => {
      window.open(url);
    });
    actionEl.innerHTML = "";
    const img = document.createElement("img");
    img.src = iconSrc;
    img.className = "exporter-app-icon exporter-view-action-icon";
    img.alt = `Open in ${appName}`;
    actionEl.appendChild(img);
    this.viewActionCleanup = () => actionEl.remove();
  }
  initStatusBar() {
    this.statusBarEl = this.addStatusBarItem();
    this.statusBarEl.addClass("exporter-status-bar");
    this.app.workspace.onLayoutReady(() => this.updateStatusBar());
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.updateStatusBar()));
  }
  updateStatusBar() {
    if (!this.statusBarEl) return;
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    if (view?.file) {
      const url = getSourceUrl(this.app, view.file);
      if (url) {
        const appName = getAppNameForUrl(url);
        if (appName) {
          const fm = this.app.metadataCache.getFileCache(view.file)?.frontmatter;
          const mod = fm?.["modified"] || fm?.["modified_date"];
          if (mod) {
            const ago = Date.now() - new Date(mod).getTime();
            this.statusBarEl.setText(`modified ${formatTimeAgo(ago)} in ${appName}`);
          } else {
            this.statusBarEl.setText(appName);
          }
          return;
        }
      }
    }
    this.statusBarEl.setText("");
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
function formatTimeAgo(ms) {
  if (ms < 6e4) return "just now";
  if (ms < 36e5) return `${Math.floor(ms / 6e4)}m ago`;
  if (ms < 864e5) return `${Math.floor(ms / 36e5)}h ago`;
  return `${Math.floor(ms / 864e5)}d ago`;
}
var ExporterSettingTab = class extends import_obsidian.PluginSettingTab {
  plugin;
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Show status bar").setDesc("Display the source app name and last modified time for synced files").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.showStatusBar).onChange(async (value) => {
        this.plugin.settings.showStatusBar = value;
        await this.plugin.saveSettings();
      })
    );
  }
};
