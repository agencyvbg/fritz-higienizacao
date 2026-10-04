'use client';
import { useState } from 'react';
import { environments } from '@/config/navigation';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { Arrow } from '@/components/ui/arrow';
import { environmentAnswers } from './environment-faq.content';
export function EnvironmentFaq({ group }: { group: string }) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="environment-faq">
      {environments.map((item) => (
        <div key={item.id} className="environment-faq-item">
          <button
            type="button"
            className="environment-faq-trigger"
            id={`faq-trigger-${group}-${item.id}`}
            aria-expanded={openId === item.id}
            aria-controls={`faq-panel-${group}-${item.id}`}
            onClick={() =>
              setOpenId((current) => (current === item.id ? null : item.id))
            }
          >
            {item.label}
            <span aria-hidden="true">+</span>
          </button>
          <section
            className="environment-faq-panel"
            id={`faq-panel-${group}-${item.id}`}
            aria-labelledby={`faq-trigger-${group}-${item.id}`}
            data-open={openId === item.id}
            aria-hidden={openId !== item.id}
            inert={openId !== item.id}
          >
            <div className="environment-faq-clip">
              <div className="environment-faq-answer">
                <h3>{environmentAnswers[item.id].question}</h3>
                <p>{environmentAnswers[item.id].answer}</p>
                <div className="environment-faq-actions">
                  <a href={item.href}>
                    Ver serviço <Arrow />
                  </a>
                  <WhatsAppLink
                    context={`serviço para ${item.label.toLocaleLowerCase('pt-BR')}`}
                  >
                    Solicitar orçamento
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
