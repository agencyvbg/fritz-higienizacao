'use client';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { headerNavigation } from '@/config/navigation';
import { focusAnchor } from '@/lib/focus-anchor';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { Arrow } from '@/components/ui/arrow';
import { Brand } from './brand';

export function MobileNavigation() {
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef<{ body: string; html: string } | null>(null);
  const destination = useRef('');
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phase = useRef<'closed' | 'opening' | 'closing'>('closed');
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  function unlockScroll() {
    const previous = previousOverflow.current;
    if (!previous) return;
    document.body.style.overflow = previous.body;
    document.documentElement.style.overflow = previous.html;
    previousOverflow.current = null;
  }
  function restore() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
    phase.current = 'closed';
    unlockScroll();
    setOpen(false);
    const hash = destination.current;
    destination.current = '';
    if (hash) {
      window.location.hash = hash;
      focusAnchor(hash);
    } else toggle.current?.focus({ preventScroll: true });
  }
  function openMenu() {
    const menu = dialog.current;
    if (!menu || menu.open || phase.current !== 'closed') return;
    destination.current = '';
    menu.dataset.state = 'opening';
    // Lock the page only after the native dialog has opened.
    try {
      menu.showModal();
    } catch {
      menu.removeAttribute('data-state');
      return;
    }
    phase.current = 'opening';
    previousOverflow.current = {
      body: document.body.style.overflow,
      html: document.documentElement.style.overflow,
    };
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    menu.scrollTop = 0;
    closeButton.current?.focus({ preventScroll: true });
    setOpen(true);
  }
  function closeMenu() {
    const menu = dialog.current;
    if (!menu?.open || phase.current === 'closing') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      menu.close();
      restore();
      return;
    }
    phase.current = 'closing';
    menu.dataset.state = 'closing';
    // Complete closing even if the browser skips animationend.
    closeTimer.current = setTimeout(() => {
      menu.close();
      restore();
    }, 220);
  }
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    const query = window.matchMedia('(min-width: 1100px)');
    const menu = dialog.current;
    function dismissImmediately() {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      closeTimer.current = null;
      destination.current = '';
      if (menu?.open) menu.close();
      phase.current = 'closed';
      const previous = previousOverflow.current;
      if (previous) {
        document.body.style.overflow = previous.body;
        document.documentElement.style.overflow = previous.html;
        previousOverflow.current = null;
      }
      setOpen(false);
    }
    function handleResize() {
      if (query.matches) dismissImmediately();
    }
    query.addEventListener('change', handleResize);
    window.addEventListener('pagehide', dismissImmediately);
    return () => {
      query.removeEventListener('change', handleResize);
      window.removeEventListener('pagehide', dismissImmediately);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (menu?.open) menu.close();
      const previous = previousOverflow.current;
      if (previous) {
        document.body.style.overflow = previous.body;
        document.documentElement.style.overflow = previous.html;
        previousOverflow.current = null;
      }
    };
  }, [mounted]);

  const menuPanel = (
    <dialog
      ref={dialog}
      id="fritz-mobile-menu"
      className="fritz-mobile-dialog"
      aria-labelledby="fritz-menu-title"
      onClose={() => {
        if (!dialog.current?.open && phase.current !== 'closed') restore();
      }}
      onCancel={(event) => {
        event.preventDefault();
        closeMenu();
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeMenu();
        }
      }}
      onClick={(event) => {
        const link =
          event.target instanceof Element
            ? event.target.closest<HTMLAnchorElement>('a')
            : null;
        if (link) {
          const url = new URL(link.href);
          if (
            url.origin === window.location.origin &&
            url.pathname === window.location.pathname &&
            url.hash
          ) {
            event.preventDefault();
            destination.current = url.hash;
          }
          closeMenu();
          return;
        }
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          closeMenu();
      }}
    >
      <div className="fritz-dialog-header">
        <Brand />
        <button
          type="button"
          className="fritz-menu-close"
          aria-label="Fechar menu"
          onClick={closeMenu}
          ref={closeButton}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="m6 6 12 12M6 18 18 6" />
          </svg>
        </button>
      </div>
      <h2 id="fritz-menu-title">Cuidado em cada detalhe.</h2>
      <nav aria-label="Navegação mobile" className="fritz-mobile-links">
        {headerNavigation.map((item) => (
          <a key={item.href} href={item.href}>
            <span>{item.label}</span>
            <Arrow />
          </a>
        ))}
      </nav>
      <div className="fritz-menu-contact">
        <p>Joinville e região</p>
        <WhatsAppLink
          className="button fritz-primary"
          context="higienização ou impermeabilização do meu estofado"
        >
          Solicitar orçamento
        </WhatsAppLink>
      </div>
    </dialog>
  );
  return (
    <div className="mobile-nav">
      <button
        ref={toggle}
        type="button"
        className="fritz-menu-toggle"
        aria-label="Abrir menu"
        aria-expanded={open}
        aria-controls="fritz-mobile-menu"
        onClick={openMenu}
        disabled={!mounted}
      >
        <span>Menu</span>
        <span className="fritz-menu-lines" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
      {mounted && createPortal(menuPanel, document.body)}
    </div>
  );
}
