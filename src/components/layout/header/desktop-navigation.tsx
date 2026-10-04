'use client';
import './compact-navigation.css';
import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { headerNavigation } from '@/config/navigation';
import { focusAnchor } from '@/lib/focus-anchor';
import cleaningPhoto from '@/assets/images/pages/home/fritz/higienizacao.jpg';
import professionalPhoto from '@/assets/images/pages/home/fritz/profissional.webp';
export function DesktopNavigation() {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target))
        setOpen(false);
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus({ preventScroll: true });
      }
    }
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);
  return (
    <div ref={root} className="fritz-navigation" data-open={open}>
      <button
        ref={toggle}
        className="fritz-menu-toggle"
        type="button"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        <span className="fritz-menu-lines" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
      <nav
        id={panelId}
        className="fritz-navigation-panel"
        aria-label="Navegação principal"
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest('a'))
            setOpen(false);
        }}
        aria-hidden={!open}
        inert={!open}
      >
        {headerNavigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => {
              setOpen(false);
              focusAnchor(item.href.slice(1));
            }}
          >
            {item.href === '/#faq' ? (
              <span className="fritz-nav-faq-icon" aria-hidden="true">
                ?
              </span>
            ) : (
              <Image
                src={
                  item.href === '/#servicos' || item.href === '/#processo'
                    ? cleaningPhoto
                    : professionalPhoto
                }
                alt=""
                width={64}
                height={64}
                sizes="64px"
              />
            )}
            <span>{item.label}</span>
            <span className="fritz-nav-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}
