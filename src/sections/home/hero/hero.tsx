import Image from 'next/image';

import { Header } from '@/components/layout/header/header';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { Arrow } from '@/components/ui/arrow';
import cleaningPhoto from '@/assets/images/pages/home/fritz/higienizacao.jpg';
import professionalPhoto from '@/assets/images/pages/home/fritz/profissional.webp';
import { heroContent } from './hero.content';
import './hero.css';
export function Hero() {
  return (
    <section className="hero fritz-hero" aria-labelledby="hero-title">
      <div className="fritz-hero-layout">
        <div className="fritz-hero-content">
          <div className="fritz-hero-header-track">
            <Header />
          </div>
          <div className="fritz-hero-copy">
            <div className="fritz-hero-location">
              <span aria-hidden="true" />
              {heroContent.location}
            </div>
            <p className="fritz-eyebrow">{heroContent.eyebrow}</p>
            <h1 id="hero-title">
              {heroContent.title.map((line) => (
                <span className="fritz-hero-title-line" key={line}>
                  {line}
                </span>
              ))}
            </h1>
            <div className="fritz-hero-summary">
              <p className="fritz-hero-subtitle">{heroContent.subtitle}</p>
              <p className="fritz-hero-description">
                {heroContent.description}
              </p>
              <div className="fritz-hero-actions">
                <WhatsAppLink
                  className="button fritz-primary"
                  context="higienização ou impermeabilização do meu estofado"
                >
                  {heroContent.cta}
                </WhatsAppLink>
                <a className="fritz-results-link" href="#resultados">
                  Ver resultados <Arrow />
                </a>
              </div>
            </div>
          </div>
        </div>
        <figure className="fritz-hero-visual" id="resultados" tabIndex={-1}>
          <Image
            src={cleaningPhoto}
            alt="Escovação cuidadosa do tecido de um sofá durante a higienização de estofados"
            priority
            sizes="(max-width: 1099px) 100vw, (min-width: 1800px) 872px, 50vw"
            className="fritz-hero-photo"
          />
          <div className="fritz-photo-label" aria-hidden="true">
            Cuidado em cada detalhe <span />
          </div>
          <figcaption className="fritz-photo-caption">
            <span>Limpeza & proteção</span>
            <p>
              Cada tecido.
              <br />
              Um cuidado próprio.
            </p>
          </figcaption>
        </figure>
      </div>
      <div className="fritz-hero-introduction" id="sobre" tabIndex={-1}>
        <div className="fritz-introduction-photo">
          <Image
            src={professionalPhoto}
            alt="Profissional da Fritz aplicando produto e escovando um estofado durante atendimento"
            width={76}
            height={76}
            sizes="76px"
          />
        </div>
        <div>
          <span className="fritz-eyebrow">Fritz Higienização</span>
          <h2>Quem cuida, olha de perto.</h2>
          <p>
            Avaliação do tecido, atenção à peça e orientações para o cuidado
            depois do serviço.
          </p>
        </div>
        <span className="fritz-introduction-arrow" aria-hidden="true">
          <Arrow />
        </span>
      </div>
      <div id="fritz-header-boundary" aria-hidden="true" />
    </section>
  );
}
