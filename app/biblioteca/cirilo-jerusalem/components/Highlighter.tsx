'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Highlighter.module.css';

type Highlight = {
  id: string;
  chapterSlug: string;
  text: string;
  createdAt: number;
};

type Props = {
  chapterSlug: string;
  containerRef: React.RefObject<HTMLElement | null>;
};

const STORAGE_KEY = 'cirilo-highlights';

export default function Highlighter({ chapterSlug, containerRef }: Props) {
  const [toolbar, setToolbar] = useState<{
    x: number;
    y: number;
    text: string;
  } | null>(null);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const restoredRef = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const all: Highlight[] = raw ? JSON.parse(raw) : [];
      setHighlights(all.filter((h) => h.chapterSlug === chapterSlug));
    } catch {
      /* noop */
    }
  }, [chapterSlug]);

  useEffect(() => {
    if (!containerRef.current || restoredRef.current) return;
    highlights.forEach((h) => applyHighlightToDOM(containerRef.current!, h.text, h.id));
    restoredRef.current = true;
  }, [highlights, containerRef]);

  const handleSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setToolbar(null);
      return;
    }

    const text = selection.toString().trim();
    if (text.length < 3) {
      setToolbar(null);
      return;
    }

    const range = selection.getRangeAt(0);
    if (!containerRef.current?.contains(range.commonAncestorContainer)) {
      setToolbar(null);
      return;
    }

    const rect = range.getBoundingClientRect();
    setToolbar({
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + window.scrollY - 8,
      text,
    });
  }, [containerRef]);

  useEffect(() => {
    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);
    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
    };
  }, [handleSelection]);

  const createHighlight = () => {
    if (!toolbar || !containerRef.current) return;

    const id = `hl-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const newHl: Highlight = {
      id,
      chapterSlug,
      text: toolbar.text,
      createdAt: Date.now(),
    };

    applyHighlightToDOM(containerRef.current, toolbar.text, id);

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const all: Highlight[] = raw ? JSON.parse(raw) : [];
      all.push(newHl);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch {
      /* noop */
    }

    setHighlights((prev) => [...prev, newHl]);
    window.getSelection()?.removeAllRanges();
    setToolbar(null);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'MARK' && target.dataset.hlId) {
        const id = target.dataset.hlId;
        if (confirm('Remover este destaque?')) {
          removeHighlightFromDOM(container, id);
          try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const all: Highlight[] = raw ? JSON.parse(raw) : [];
            const filtered = all.filter((h) => h.id !== id);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
          } catch {
            /* noop */
          }
          setHighlights((prev) => prev.filter((h) => h.id !== id));
        }
      }
    };

    container.addEventListener('click', onClick);
    return () => container.removeEventListener('click', onClick);
  }, [containerRef]);

  if (!toolbar) return null;

  return (
    <div
      className={styles.toolbar}
      style={{
        left: `${toolbar.x}px`,
        top: `${toolbar.y}px`,
        transform: 'translate(-50%, -100%)',
      }}
    >
      <button
        type="button"
        onClick={createHighlight}
        className={styles.highlightBtn}
        aria-label="Marcar trecho"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
        <span>Marcar</span>
      </button>
    </div>
  );
}

function applyHighlightToDOM(container: HTMLElement, text: string, id: string) {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
  const nodes: Text[] = [];
  let node = walker.nextNode();
  while (node) {
    nodes.push(node as Text);
    node = walker.nextNode();
  }

  for (const textNode of nodes) {
    const idx = textNode.nodeValue?.indexOf(text) ?? -1;
    if (idx === -1) continue;

    const range = document.createRange();
    range.setStart(textNode, idx);
    range.setEnd(textNode, idx + text.length);

    const mark = document.createElement('mark');
    mark.className = 'lf-highlight';
    mark.dataset.hlId = id;
    try {
      range.surroundContents(mark);
    } catch {
      /* seleção atravessa nós — ignora nesta versão */
    }
    return;
  }
}

function removeHighlightFromDOM(container: HTMLElement, id: string) {
  const marks = container.querySelectorAll(`mark[data-hl-id="${id}"]`);
  marks.forEach((mark) => {
    const parent = mark.parentNode;
    if (!parent) return;
    while (mark.firstChild) {
      parent.insertBefore(mark.firstChild, mark);
    }
    parent.removeChild(mark);
    parent.normalize();
  });
}
