import Image from 'next/image';
import { InstagramIcon } from '@/components/ui/social-icons';
import { PrivacyPreferences } from '@/components/analytics/consent';
import vbgLogo from '@/assets/images/shared/vbg/logo.webp';
import fritzMark from '@/assets/images/shared/fritz/fritz-mark.png';
import { developer } from '@/config/developer';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { contact } from '@/config/contact';
import { environments, navigation } from '@/config/navigation';
import { GoogleProfile } from './google-profile';
import { FooterReveal } from './footer-reveal';
import './footer.css';
export function Footer() {
  return (
    <FooterReveal>
      <div className="footer-top">
        <div className="footer-introduction">
          <a
            className="footer-brand"
            href="/#inicio"
            aria-label="Fritz — voltar ao início"
          >
            <Image src={fritzMark} alt="" width={48} height={48} />
            Fritz.
          </a>
          <p>
            Higienização &amp; Impermeabilização.
            <br />
            Mais cuidado para o seu estofado.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Serviços no rodapé">
          <h2>Serviços</h2>
          {environments.map((item) => (
            <a key={item.id} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <h2>Conheça a Fritz</h2>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <h2>Vamos conversar</h2>
          <WhatsAppLink context="higienização ou impermeabilização do meu estofado">
            Solicitar orçamento
          </WhatsAppLink>

          <PrivacyPreferences />
          <a
            className="footer-instagram"
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fritz no Instagram — abrir em nova aba"
          >
            <InstagramIcon /> Fritz no Instagram{' '}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="footer-showcase">
        <div className="footer-wordmark" aria-hidden="true">
          Fritz.
        </div>
        <GoogleProfile />
      </div>
      <div className="footer-credits">
        <p>
          © {new Date().getFullYear()} · Fritz Higienização e Impermeabilização
          <br />
          <span>Joinville e região</span>
        </p>
        <div className="footer-developer">
          <a
            className="footer-developer-brand"
            href={developer.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Created by VBG Agency — Instagram em nova aba"
          >
            <span>CREATED BY</span>
            <Image src={vbgLogo} alt="VBG Agency" width={112} height={42} />
          </a>
        </div>
      </div>
    </FooterReveal>
  );
}
