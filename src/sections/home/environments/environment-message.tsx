'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
const message =
  'Seu estofado faz parte dos seus melhores momentos. Cuidar dele é cuidar do conforto de quem você ama.';
const words = message
  .split(' ')
  .map((word, position) => ({ word, id: `message-word-${position}` }));
function Word({
  word,
  index,
  progress,
}: {
  word: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(
    progress,
    [(index / words.length) * 0.8, ((index + 1) / words.length) * 0.8],
    [0, 1],
  );
  return (
    <span className="message-word">
      <span>{word}</span>
      <motion.span className="message-ink" style={{ opacity }}>
        {word}
      </motion.span>{' '}
    </span>
  );
}
export function EnvironmentMessage() {
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start start', 'end end'],
  });
  return (
    <div ref={target} className="environment-message">
      <div className="message-sticky">
        <span className="eyebrow">Cuidado que faz parte da sua casa</span>
        <h2 id="environments-title" aria-label={message}>
          <span aria-hidden="true">
            {words.map(({ word, id }, index) => (
              <Word
                key={id}
                word={word}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </span>
        </h2>
        <p className="message-scroll">
          Conheça nossos serviços <span aria-hidden="true">↓</span>
        </p>
      </div>
    </div>
  );
}
