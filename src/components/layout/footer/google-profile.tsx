import { googleBusiness } from '@/config/google-business';
import { Arrow } from '@/components/ui/arrow';
export function GoogleProfile() {
  return (
    <aside className="google-profile" aria-labelledby="google-profile-title">
      <span className="google-profile-label">
        Higienização &amp; Impermeabilização
      </span>
      <h2 id="google-profile-title">Seu estofado. Nosso cuidado.</h2>
      <div
        className="google-rating"
        role="img"
        aria-label={`Google Avaliações: ${googleBusiness.ratingLabel} de 5 estrelas, ${googleBusiness.reviewCount} avaliações`}
      >
        <div className="google-rating-heading">
          <span className="google-word" aria-hidden="true">
            <span>G</span>
            <span>o</span>
            <span>o</span>
            <span>g</span>
            <span>l</span>
            <span>e</span>
          </span>{' '}
          Avaliações
        </div>
        <div className="google-rating-score" aria-hidden="true">
          <strong>{googleBusiness.ratingLabel}</strong>
          <span className="google-stars">★★★★★</span>
          <span className="google-rating-count">
            ({googleBusiness.reviewCount})
          </span>
        </div>
      </div>
      <a
        className="google-action"
        href={googleBusiness.reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Avaliar no Google <Arrow />
      </a>
      <a
        className="google-action google-action-primary"
        href={googleBusiness.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver perfil no Google <Arrow />
      </a>
    </aside>
  );
}
