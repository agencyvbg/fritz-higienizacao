import { EnvironmentCard } from './environment-card';
import { EnvironmentMessage } from './environment-message';
import { environmentCollection } from './environments.content';
import './environments.css';
const groups = [
  environmentCollection.slice(0, 2),
  environmentCollection.slice(2, 4),
  environmentCollection.slice(4),
];
export function Environments() {
  return (
    <section
      id="ambientes"
      className="environments"
      aria-labelledby="environments-title"
    >
      <EnvironmentMessage />
      <div className="environment-collection-heading" id="servicos">
        <span className="eyebrow section-label">Serviços Fritz</span>
        <h2>Cuidado para cada tipo de estofado</h2>
        <nav className="environment-nav" aria-label="Escolher serviço">
          {environmentCollection.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="environment-stack">
        {groups.map((group, index) => (
          <div
            className={`environment-panel environment-panel--${index + 1}`}
            key={group[0].id}
          >
            {group.map((item) => (
              <EnvironmentCard key={item.id} item={item} />
            ))}
          </div>
        ))}
      </div>
      <div className="environment-endnote">
        <span>Cuidado em cada tecido. Atenção em cada detalhe.</span>
        <p>Imagens ilustrativas dos serviços.</p>
      </div>
    </section>
  );
}
