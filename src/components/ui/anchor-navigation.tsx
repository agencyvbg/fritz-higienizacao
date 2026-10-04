'use client';

import { useEffect } from 'react';
import { focusAnchor } from '@/lib/focus-anchor';

/** Resolve âncoras pela posição no fluxo, mesmo quando os cards estão presos. */
export function AnchorNavigation() {
  useEffect(() => {
    function navigate(hash: string) {
      let id: string;
      try {
        id = decodeURIComponent(hash.slice(1));
      } catch {
        return false;
      }
      const target = document.getElementById(id);
      if (!target) return false;
      const root = document.documentElement;
      let top: number;
      // A medição é síncrona: o estado temporário não chega a ser pintado.
      root.classList.add('measuring-anchor');
      try {
        const padding =
          Number.parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
        const margin =
          Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        top = Math.max(
          0,
          target.getBoundingClientRect().top +
            window.scrollY -
            padding -
            margin,
        );
      } finally {
        root.classList.remove('measuring-anchor');
      }
      focusAnchor(hash);
      const instant = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      window.scrollTo({ top, behavior: instant ? 'instant' : 'smooth' });
      return true;
    }

    function handleClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link =
        event.target instanceof Element
          ? event.target.closest('a[href]')
          : null;
      if (
        !(link instanceof HTMLAnchorElement) ||
        link.hasAttribute('download') ||
        (link.target && link.target !== '_self')
      )
        return;
      const url = new URL(link.href, window.location.href);
      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        url.search !== window.location.search ||
        !url.hash
      )
        return;
      if (!navigate(url.hash)) return;
      event.preventDefault();
      if (window.location.hash !== url.hash)
        window.history.pushState(null, '', url.hash);
    }
    function handleHashChange() {
      navigate(window.location.hash || '#inicio');
    }
    document.addEventListener('click', handleClick);
    window.addEventListener('hashchange', handleHashChange);
    const frame = window.requestAnimationFrame(() => {
      if (window.location.hash) navigate(window.location.hash);
    });
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('hashchange', handleHashChange);
      window.cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
