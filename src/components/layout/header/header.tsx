import { Brand } from './brand';
import { DesktopNavigation } from './desktop-navigation';
import './header.css';
export function Header() {
  return (
    <header className="site-header fritz-header">
      <div className="header-inner">
        <Brand />
        <DesktopNavigation />
      </div>
    </header>
  );
}
