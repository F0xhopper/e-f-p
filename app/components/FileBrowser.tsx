"use client";

import { useMemo, useState } from "react";
import {
  defaultPath,
  fileTree,
  flattenTree,
  getPreview,
  getTitle,
  type FileEntry,
} from "../lib/files";

/* nvim-tree-style sidebar + a live "buffer" preview that follows the
   cursor, ranger-style. One directory deep (projects/), so expand/
   collapse state is a single Set of paths rather than anything recursive
   in practice -- kept general in files.ts anyway since it's cheap. */
export default function FileBrowser({
  initialPath = defaultPath,
}: {
  initialPath?: string;
}) {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(["projects"]));
  const [cursorPath, setCursorPath] = useState(initialPath);
  const [mobileShowBuffer, setMobileShowBuffer] = useState(false);

  const flat = useMemo(() => flattenTree(fileTree, expanded), [expanded]);
  const cursorIndex = flat.findIndex((r) => r.entry.path === cursorPath);
  const cursorEntry = flat[cursorIndex]?.entry;

  function moveCursor(delta: number) {
    const next = flat[Math.min(Math.max(cursorIndex + delta, 0), flat.length - 1)];
    if (next) setCursorPath(next.entry.path);
  }

  /* Collapsing a dir can hide the entry the cursor is currently on --
     move the cursor up to the dir itself so it never points at
     something no longer in the flattened list. */
  function collapseDir(path: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.delete(path);
      return next;
    });
    setCursorPath((prevCursor) =>
      prevCursor.startsWith(`${path}/`) ? path : prevCursor
    );
  }

  function toggleDir(path: string) {
    if (expanded.has(path)) {
      collapseDir(path);
    } else {
      setExpanded((prev) => new Set(prev).add(path));
    }
  }

  function openEntry(entry: FileEntry) {
    setCursorPath(entry.path);
    if (entry.type === "dir") {
      setExpanded((prev) => new Set(prev).add(entry.path));
    } else {
      setMobileShowBuffer(true);
    }
  }

  function collapseEntry(entry: FileEntry) {
    if (entry.type === "dir" && expanded.has(entry.path)) {
      collapseDir(entry.path);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case "j":
      case "ArrowDown":
        e.preventDefault();
        moveCursor(1);
        break;
      case "k":
      case "ArrowUp":
        e.preventDefault();
        moveCursor(-1);
        break;
      case "l":
      case "Enter":
        e.preventDefault();
        if (cursorEntry) openEntry(cursorEntry);
        break;
      case "h":
        e.preventDefault();
        if (cursorEntry) collapseEntry(cursorEntry);
        break;
    }
  }

  const title = getTitle(cursorPath);
  const lines = getPreview(cursorPath);

  return (
    <div className="border border-fg-dim/30">
      <div className="relative h-[65dvh] overflow-hidden md:h-auto md:overflow-visible">
        <div
          className={`flex h-full w-[200%] transition-transform duration-200 ease-out md:h-auto md:w-auto md:translate-x-0 md:items-stretch ${
            mobileShowBuffer ? "-translate-x-1/2" : "translate-x-0"
          }`}
        >
          {/* tree */}
          <div
            role="tree"
            aria-label="files"
            aria-activedescendant={`tree-${cursorPath}`}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="h-full w-1/2 shrink-0 overflow-y-auto py-1 outline-none focus-visible:bg-fg/5 md:h-auto md:w-[26ch] md:overflow-visible md:border-r md:border-fg-dim/30"
          >
            {flat.map(({ entry, depth }) => {
              const isDir = entry.type === "dir";
              const isExpanded = isDir && expanded.has(entry.path);
              const active = entry.path === cursorPath;
              return (
                <div
                  key={entry.path}
                  id={`tree-${entry.path}`}
                  role="treeitem"
                  aria-selected={active}
                  aria-expanded={isDir ? isExpanded : undefined}
                  aria-level={depth + 1}
                  onClick={() => (isDir ? toggleDir(entry.path) : openEntry(entry))}
                  className={`cursor-pointer whitespace-pre px-3 py-1.5 md:px-2 md:py-0.5 ${
                    active ? "bg-fg text-bg" : ""
                  }`}
                  style={{ paddingLeft: `${depth * 2 + 0.5}ch` }}
                >
                  {isDir ? (isExpanded ? "▾ " : "▸ ") : "  "}
                  {entry.name}
                </div>
              );
            })}
          </div>

          {/* buffer preview */}
          <div className="h-full w-1/2 shrink-0 overflow-y-auto md:h-auto md:w-auto md:flex-1 md:overflow-visible">
            <div className="sticky top-0 flex items-center gap-3 border-b border-fg-dim/30 bg-bg px-2 py-1 text-fg-dim">
              <button
                type="button"
                onClick={() => setMobileShowBuffer(false)}
                aria-label="back to files"
                className="shrink-0 -m-1 p-1 underline md:hidden"
              >
                ‹ back
              </button>
              <span className="truncate">{title}</span>
            </div>
            <div className="overflow-x-auto px-2 py-2">
              {lines.map((line, i) => (
                <div key={i} className="min-w-0 whitespace-pre-wrap break-words">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* status line */}
      <div className="flex items-center justify-between border-t border-fg-dim/30 px-2 py-1 text-fg-dim">
        <span className="truncate">{title}</span>
        <span className="shrink-0 pl-3">
          {cursorIndex + 1}/{flat.length}
        </span>
      </div>
    </div>
  );
}
