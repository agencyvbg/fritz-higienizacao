import { environments } from '@/config/navigation';
import { environmentImages } from './environments.images';
const details = {
  sofas: {
    material: 'Higienização de sofás',
    description:
      'O cuidado começa pela avaliação do tecido. A limpeza é realizada com produtos e técnicas adequados à peça, com orientações para a secagem e os cuidados depois do serviço.',
    context: 'higienização do meu sofá',
  },
  colchoes: {
    material: 'Higienização de colchões',
    description:
      'Limpeza do tecido do colchão com atenção ao material e às condições da peça. Você recebe orientações para a ventilação, a secagem e o retorno ao uso.',
    context: 'higienização do meu colchão',
  },
  cadeiras: {
    material: 'Higienização de cadeiras',
    description:
      'Assentos e encostos recebem um cuidado específico para o revestimento. Uma opção para cadeiras de jantar, de escritório e outras peças estofadas da sua rotina.',
    context: 'higienização das minhas cadeiras estofadas',
  },
  poltronas: {
    material: 'Higienização de poltronas',
    description:
      'Atenção aos braços, ao assento e ao encosto, respeitando as características do tecido. Conte com uma avaliação da peça para definir o cuidado mais adequado.',
    context: 'higienização da minha poltrona',
  },
  impermeabilizacao: {
    material: 'Proteção para o tecido',
    description:
      'Tratamento que ajuda a reduzir a absorção de líquidos pelo tecido. A aplicação depende da avaliação do material e vem acompanhada de orientações de uso e conservação.',
    context: 'impermeabilização do meu estofado',
  },
} as const;
export const environmentCollection = environments.map((item) => ({
  ...item,
  ...details[item.id],
  images: environmentImages[item.id],
}));
export type Environment = (typeof environmentCollection)[number];
