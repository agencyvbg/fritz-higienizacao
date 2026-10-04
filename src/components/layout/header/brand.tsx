import Image from 'next/image';
import fritzMark from '@/assets/images/shared/fritz/fritz-mark.png';
export function Brand() {
  return (
    <a
      className="brand"
      href="/#inicio"
      aria-label="Fritz Higienização — início"
    >
      <Image
        src={fritzMark}
        alt=""
        width={48}
        height={48}
        className="brand-mark"
      />
      <span className="brand-copy">
        <span className="brand-name">
          Fritz<span className="brand-dot">.</span>
        </span>
        <span className="brand-descriptor">
          Higienização & Impermeabilização
        </span>
      </span>
    </a>
  );
}
