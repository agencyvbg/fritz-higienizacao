import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { ResponsiveImage } from '@/components/media/responsive-image';

import { servicesContent } from './services.content';
import { servicesImages } from './services.images';
import { ServiceIcon } from './service-icon';
import './services.css';
export function Services() {
  return (
    <section
      id="atendimento"
      className="services"
      aria-labelledby="services-title"
    >
      <div className="services-copy">
        <div className="services-heading">
          <div className="section-heading">
            <span className="eyebrow section-label">Como funciona</span>
            <h2 id="services-title">
              {servicesContent.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
          </div>
          <p className="services-introduction">
            {servicesContent.introduction}
          </p>
        </div>
        <div className="services-grid">
          {servicesContent.items.map((item) => (
            <article
              className="service-item"
              key={item.id}
              aria-labelledby={`service-${item.id}`}
            >
              <ServiceIcon kind={item.id} />
              <h3 id={`service-${item.id}`}>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <WhatsAppLink
          className="services-cta"
          context="higienização ou impermeabilização do meu estofado"
        >
          Solicitar orçamento
        </WhatsAppLink>
      </div>
      <figure className="services-material">
        <div className="services-material-visual">
          <ResponsiveImage {...servicesImages} sizes="100vw" />
        </div>
        <figcaption>
          Fritz · Atenção em cada detalhe. Imagem ilustrativa do serviço.
        </figcaption>
      </figure>
    </section>
  );
}
