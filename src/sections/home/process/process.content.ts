import { processImages } from './process.images';
export const processSteps = [
  {
    id: 'avaliacao',
    title: 'Avaliação do tecido',
    text: 'Antes do serviço, a Fritz observa o revestimento e as condições da peça. Essa avaliação ajuda a definir o cuidado adequado para cada estofado.',
    images: processImages[0],
  },
  {
    id: 'higienizacao',
    title: 'Higienização adequada',
    text: 'Produtos e técnicas são definidos conforme a avaliação do tecido. Assento, encosto e demais áreas recebem atenção às características da peça.',
    images: processImages[1],
  },
  {
    id: 'conservacao',
    title: 'Cuidados depois do atendimento',
    text: 'Siga as orientações de secagem e mantenha o ambiente ventilado. Antes de voltar a usar a peça, confirme que o tecido está seco e observe as recomendações de conservação.',
    images: processImages[2],
  },
] as const;
