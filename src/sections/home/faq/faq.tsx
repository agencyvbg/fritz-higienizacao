'use client';

import { useState } from 'react';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { faqItems } from './faq.content';
import './faq.css';

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);
  return (
    <section id="faq" className="fritz-faq-section" aria-labelledby="faq-title">
      <div className="fritz-faq-intro">
        <span className="eyebrow section-label">Perguntas frequentes</span>
        <h2 id="faq-title">Dúvidas antes de cuidar do seu estofado?</h2>
        <p>
          Conheça os detalhes do atendimento e encontre o cuidado adequado para
          sua peça.
        </p>
        <div className="fritz-faq-help">
          <span>Ainda tem alguma dúvida?</span>
          <WhatsAppLink
            className="button"
            context="o cuidado com meu estofado e tirar algumas dúvidas sobre o serviço"
          >
            Conversar com a Fritz
          </WhatsAppLink>
        </div>
      </div>
      <div className="fritz-faq-list">
        {faqItems.map((item) => {
          const open = openId === item.id;
          return (
            <div key={item.id} className="fritz-faq-card" data-open={open}>
              <h3>
                <button
                  type="button"
                  className="fritz-faq-trigger"
                  id={`fritz-faq-trigger-${item.id}`}
                  aria-expanded={open}
                  aria-controls={`fritz-faq-panel-${item.id}`}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  <span>{item.question}</span>
                  <span className="fritz-faq-symbol" aria-hidden="true">
                    +
                  </span>
                </button>
              </h3>
              <section
                className="fritz-faq-panel"
                id={`fritz-faq-panel-${item.id}`}
                aria-labelledby={`fritz-faq-trigger-${item.id}`}
                aria-hidden={!open}
                inert={!open}
                data-open={open}
              >
                <div className="fritz-faq-clip">
                  <p>{item.answer}</p>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </section>
  );
}
