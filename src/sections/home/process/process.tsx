import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { ProcessAccordion } from './process-accordion';
import './process.css';
export function Process() {
  return (
    <section
      className="section process"
      id="processo"
      aria-labelledby="process-title"
    >
      <div className="section-heading">
        <span className="eyebrow section-label">O cuidado Fritz</span>
        <h2 id="process-title">Cada tecido pede um cuidado.</h2>
        <p className="process-introduction">
          Da avaliação à conservação, atenção às características da sua peça em
          cada etapa do cuidado.
        </p>
      </div>
      <ProcessAccordion />
      <WhatsAppLink context="o cuidado indicado para o meu estofado">
        Solicitar orçamento
      </WhatsAppLink>
      <p className="process-credit">
        Fritz · Atenção a cada tecido. Imagens ilustrativas dos serviços.
      </p>
    </section>
  );
}
