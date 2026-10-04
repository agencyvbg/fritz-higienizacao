const drawings = {
  contato: 'M20 20h72v52H48L28 88V72h-8V20ZM34 36h44M34 48h32M34 60h20',
  avaliacao:
    'M28 16h42v18h18v58H28V16ZM70 16l18 18M70 16v18h18M40 48l7 7 13-14M40 72h34M40 82h24',
  cuidado:
    'M28 54V42a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v12M24 50h8v16h48V50h8v32H24V50ZM30 82v10M82 82v10M86 12v16M78 20h16M64 8v10M59 13h10',
} as const;
export function ServiceIcon({ kind }: { kind: keyof typeof drawings }) {
  return (
    <svg
      className="service-icon"
      viewBox="0 0 112 108"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={drawings[kind]}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
