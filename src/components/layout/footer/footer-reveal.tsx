import type { ReactNode } from 'react';

/** O rodapé permanece no fluxo para que todos os links sejam alcançáveis. */
export function FooterReveal({ children }: { children: ReactNode }) {
  return <footer className="site-footer">{children}</footer>;
}
