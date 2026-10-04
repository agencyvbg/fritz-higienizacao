import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { ResponsiveImage } from '@/components/media/responsive-image';
import type { Environment } from './environments.content';
export function EnvironmentCard({ item }: { item: Environment }) {
  return (
    <article
      id={item.id}
      className={`environment-card environment-card--${item.id}`}
      aria-labelledby={`title-${item.id}`}
    >
      <figure className="environment-photo">
        <ResponsiveImage
          {...item.images}
          sizes={
            item.id === 'impermeabilizacao'
              ? '(min-width: 1600px) 1050px, (min-width: 768px) 60vw, 100vw'
              : '(min-width: 1600px) 960px, (min-width: 768px) 55vw, 100vw'
          }
        />
        <figcaption>{item.material}</figcaption>
      </figure>
      <div className="environment-caption">
        <span className="environment-marker" aria-hidden="true" />
        <div>
          <h3 id={`title-${item.id}`}>{item.label}</h3>
          <p className="environment-note">{item.note}</p>
          <p className="environment-description">{item.description}</p>
          <WhatsAppLink context={item.context}>
            Solicitar orçamento
          </WhatsAppLink>
        </div>
      </div>
    </article>
  );
}
