import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { studioContent } from './studio.content';
import { StudioPanels } from './studio-panels';
import './studio.css';
export function Studio() {
  return (
    <section className="studio" id="estudio" aria-labelledby="studio-title">
      <header className="studio-intro">
        <span className="eyebrow section-label">Sobre a Fritz</span>
        <h2 id="studio-title">{studioContent.title}</h2>
      </header>
      <StudioPanels />
      <div className="studio-caption">
        <WhatsAppLink context="higienização ou impermeabilização do meu estofado">
          Conversar com a Fritz
        </WhatsAppLink>
        <span>Higienização &amp; Impermeabilização</span>
        <span>Joinville e região · Consulte disponibilidade</span>
      </div>
    </section>
  );
}
