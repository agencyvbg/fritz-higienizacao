'use client';
import { Fragment, useEffect, useRef, useState } from 'react';
import { HeaderFaq } from './header-faq';
import { Brand } from './brand';
import { DesktopNavigation } from './desktop-navigation';
import { headerNavigation } from '@/config/navigation';
import { focusAnchor } from '@/lib/focus-anchor';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import './header.css';
export function ScrollHeader() {
  const [visible, setVisible] = useState(false);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const boundary = document.getElementById('fritz-header-boundary');
    if (!boundary) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const nextVisible =
          !entry.isIntersecting && entry.boundingClientRect.top <= 80;
        if (!nextVisible && header.current?.contains(document.activeElement)) {
          document
            .querySelector<HTMLAnchorElement>('.fritz-hero-header-track .brand')
            ?.focus({ preventScroll: true });
        }
        setVisible(nextVisible);
      },
      { rootMargin: '-80px 0px 0px 0px', threshold: 0 },
    );
    observer.observe(boundary);
    return () => observer.disconnect();
  }, []);
  return (
    <header
      ref={header}
      className="fritz-scroll-header"
      data-visible={visible}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="fritz-scroll-header-inner">
        <Brand />
        <nav className="fritz-scroll-links" aria-label="Navegação entre seções">
          {headerNavigation.map((item) => (
            <Fragment key={item.href}>
              {item.href === '/#contato' && <HeaderFaq />}
              <a
                key={item.href}
                href={item.href}
                onClick={() => focusAnchor(item.href.slice(1))}
              >
                {item.label}
              </a>
            </Fragment>
          ))}
        </nav>
        <WhatsAppLink
          className="button fritz-scroll-cta"
          context="higienização ou impermeabilização do meu estofado"
        >
          Solicitar orçamento
        </WhatsAppLink>
        <div className="fritz-scroll-mobile">
          {visible && <DesktopNavigation />}
        </div>
      </div>
    </header>
  );
}
