'use client';
import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { ResponsiveImage } from '@/components/media/responsive-image';
import { processSteps } from './process.content';
export function ProcessAccordion() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const current = processSteps[active];
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown')
      next = (index + 1) % processSteps.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp')
      next = (index + processSteps.length - 1) % processSteps.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = processSteps.length - 1;
    else return;
    event.preventDefault();
    buttons.current[next]?.focus();
  }
  return (
    <div className="process-experience">
      <div className="process-description" aria-hidden="true">
        <svg
          aria-hidden="true"
          className="process-sketch"
          viewBox="0 0 180 160"
          fill="none"
        >
          <path
            d="M30 78V54a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16v24M22 70h18v34h100V70h18v62H22V70ZM34 132v14M146 132v14M90 40v62"
            stroke="currentColor"
            strokeWidth=".8"
          />
          <path
            d="M145 14v18M136 23h18M119 8v12M113 14h12"
            stroke="currentColor"
            strokeWidth=".5"
          />
        </svg>
        <div key={current.id} className="process-description-copy">
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>
      </div>
      <div className="process-accordion">
        {processSteps.map((step, index) => {
          const open = active === index;
          return (
            <article
              key={step.id}
              className={open ? 'process-item is-active' : 'process-item'}
            >
              <h3 className="process-trigger-heading">
                <button
                  type="button"
                  className="process-trigger"
                  ref={(node) => {
                    buttons.current[index] = node;
                  }}
                  id={`process-trigger-${step.id}`}
                  aria-expanded={open}
                  aria-controls={`process-panel-${step.id}`}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => navigate(event, index)}
                >
                  <span className="process-plus" aria-hidden="true">
                    {open ? '−' : '+'}
                  </span>
                  <span className="process-step-name">{step.title}</span>
                </button>
              </h3>
              <section
                id={`process-panel-${step.id}`}
                aria-labelledby={`process-trigger-${step.id}`}
                className="process-panel"
                aria-hidden={!open}
                inert={!open}
              >
                <div className="process-panel-inner">
                  <ResponsiveImage {...step.images} />
                  <p className="process-panel-description">{step.text}</p>
                </div>
              </section>
            </article>
          );
        })}
      </div>
    </div>
  );
}
