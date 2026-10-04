'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { EnvironmentFaq } from './environment-faq';
import './environment-faq.css';
import './header-faq.css';
import './compact-navigation.css';

export function HeaderFaq({ inline = false }: { inline?: boolean }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const element = root.current;
    function dismiss(event: Event) {
      if (event.target instanceof Node && !element?.contains(event.target))
        setOpen(false);
    }
    function linkClick(event: MouseEvent) {
      if (
        event.target instanceof Element &&
        event.target.closest('a') &&
        element?.contains(event.target)
      )
        setOpen(false);
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.stopPropagation();
        setOpen(false);
        trigger.current?.focus({ preventScroll: true });
      }
    }
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('focusin', dismiss);
    document.addEventListener('click', linkClick);
    element?.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('focusin', dismiss);
      document.removeEventListener('click', linkClick);
      element?.removeEventListener('keydown', handleEscape);
    };
  }, [open]);
  return (
    <div
      ref={root}
      className={inline ? 'header-faq header-faq-inline' : 'header-faq'}
    >
      <button
        ref={trigger}
        type="button"
        className="header-faq-toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {inline && (
          <span className="header-faq-badge" aria-hidden="true">
            ?
          </span>
        )}
        <span className="header-faq-caption">
          {inline ? 'Perguntas frequentes' : 'FAQ'}
        </span>
        <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div id={id} className="header-faq-content" hidden={!open}>
        {!inline && <p className="header-faq-label">Perguntas frequentes</p>}
        <EnvironmentFaq group={id} />
      </div>
    </div>
  );
}
