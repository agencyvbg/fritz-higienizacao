# Fritz — direção visual da etapa 1

Empresa: Fritz Higienização e Impermeabilização. Região: Joinville e cidades informadas no material recebido. Fonte dos contatos, marca e fotos: ZIP fornecido pelo usuário.

Escopo autorizado: adaptar header e Hero a partir da base visual original. As demais seções serão adaptadas nas etapas seguintes; a publicação da base inteira depende dessa conclusão.

Direção: composição editorial assimétrica, superfícies claras, azul Fritz #1769e0, grafite #30343b, margens amplas, tipografia Geist local já licenciada na base. Logo PNG original preservada e importada como módulo. Imagens locais recebidas, sem geração ou alteração do conteúdo visual.

Header: marca, Serviços, Resultados, Sobre e Contato; orçamento via WhatsApp. Mobile: diálogo nativo, Escape, retorno de foco e navegação para âncoras. Não adicionar bibliotecas.

Hero: mensagem de cuidado e conforto, fotografia de higienização, CTA de orçamento e link para resultados. Fotografia de destaque e retrato são copiados sem alterações para src/assets/images. Next Image entrega tamanhos otimizados; enquadramentos são definidos no CSS para desktop e mobile.

Não publicar números de avaliações sem nova validação. Não prometer remoção de todas as manchas, proteção total ou tempos fixos de secagem. Não habilitar indexação nem tracking durante a adaptação.

As fontes recebidas no ZIP não possuem licença junto aos arquivos; esta etapa mantém Geist local com a licença já existente.

## Adaptação Solara

Referência fornecida: https://solara-flouix.webflow.io/. Hero com foto à esquerda, dentro da largura máxima existente de 1800px e com respiro externo; conteúdo original à direita. Header integrado ao topo da coluna de texto, menu compacto expansível no desktop e diálogo acessível já existente no mobile. Preservar todos os textos, fotos locais, azul Fritz e fonte Geist. Sem números de navegação ou avaliações inventadas. Animações curtas apenas de opacidade e deslocamento, respeitando movimento reduzido. Mobile conserva leitura em sequência e controles de pelo menos 44px.

## Estrutura e comportamento da referência verificados

Hero principal com duas colunas iguais e altura mínima de uma tela; header no fluxo da coluna direita, conteúdo alinhado ao fundo por flex e espaço livre, sem padding superior fixo. Menu absoluto abaixo da marca, sem modal ou bloqueio de rolagem, com transição de opacidade/deslocamento e links acessíveis por teclado. Mobile mantém o mesmo menu abaixo da marca, sobreposto ao hero. Resumo com textos e CTAs em painel inferior; apresentação profissional preservada abaixo do hero principal. Margem entre imagem e conteúdo de 48–88px conforme viewport; frame máximo de 1800px mantido.

## Header durante a rolagem

Autorizado: header compacto acompanha a rolagem no espaço livre da coluna direita e para antes de Joinville e região. CSS sticky limitado por um contêiner acima do texto; sem cálculo por frame. Após o hero completo, header horizontal fixo aparece por IntersectionObserver e desaparece ao voltar. Desktop exibe links; mobile mantém toggle com navegação abaixo da marca, sem bloquear scroll. Fundo gelo frio #F2F6F8 em todos os fundos principais. Largura central de 1800px preservada e movimento reduzido respeitado.

## Mensagem após o hero

Texto aprovado: Seu estofado faz parte dos seus melhores momentos. Cuidar dele é cuidar do conforto de quem você ama. Chamada superior: Cuidado que faz parte da sua casa. Chamada inferior: Conheça nossos serviços. Fundo azul profundo Fritz #1157BB; palavras brancas reveladas sobre base azul clara #91B4E8. Preservar sticky, progresso de scroll e conclusão da mensagem antes da saída; manter alternativa estática para movimento reduzido e telas baixas. Escopo desta etapa: apenas bloco de mensagem; cartões seguintes serão adaptados depois.

## Cartões de serviços

Manter layout e sobreposição na rolagem. Fundo gelo, grafite e azul Fritz. Cinco cartões: sofás, colchões, cadeiras, poltronas e impermeabilização. Imagens geradas autorizadas pelo usuário: cenas ilustrativas de procedimentos, sem antes/depois, sem logotipo ou alegação de atendimento real. WebP desktop/tablet/mobile, com conteúdo principal central e margens para recorte. CTAs e descrições específicos, sem promessas absolutas de resultado.

## Como funciona o atendimento

Preservar estrutura, largura e comportamento da seção. Explicar envio de fotos, avaliação e atendimento agendado em três etapas, com ícones de conversa, avaliação e cuidado. Fundo gelo, texto grafite, acentos e CTA azuis. Usar WebP responsivo disponível de equipamento em uso, identificado como ilustrativo. Um CTA geral após as etapas evita repetir a ação em cada coluna.

## Cuidados com cada tecido

Preservar acordeão horizontal no desktop e vertical no celular, largura e transições. Três temas: avaliação do tecido, higienização adequada e cuidados depois do atendimento. Fundo gelo e acentos azuis. Reutilizar WebP responsivos ilustrativos de peças estofadas, sem representar resultados reais. Substituir desenho do modelo original por sofá e remover numeração visual. Títulos devem caber no painel ativo e no celular; manter navegação por teclado e alternativa de movimento reduzido.

## Sobre a Fritz

Adaptar Estúdio para apresentação da Fritz, mantendo painéis interativos. Título aprovado: Quem cuida, olha de perto. Quatro temas: A Fritz, Cada peça importa, Cuidado na sua casa e Joinville e região. Foto real profissional.webp no primeiro painel, preservando rosto e ação no enquadramento; imagens ilustrativas responsivas nos demais. Azul escuro sobre as fotos e texto branco; fundo gelo e CTA azul. Não inventar história, experiência ou métricas da empresa.

## Contato e rodapé

Finalizar com CTA de orçamento: envie fotos e localização pelo WhatsApp, sem formulário adicional. Contato azul profundo, texto branco e botão gelo. Rodapé azul marinho com marca real Fritz, serviços e links para atendimento/cuidados/sobre/contato, telefone e Instagram oficiais. Manter revelação do rodapé e crédito VBG. Remover card Google herdado da agência, pois não há perfil Fritz confirmado. Usar Instagram como chamada complementar; sem endereço, horários ou métricas inventados.

## Card Google da Fritz

Restaurar o card com duas ações, mantendo estilo e dimensões do modelo. Usar dados reais fornecidos em fritz-higienizacao-v1/src/config/company.ts: nota 5,0, 286 avaliações, link de avaliação com placeid e Maps com nome/endereço Fritz. Esses valores são o registro do material fornecido, sem atualização automática. Substitui a chamada complementar de Instagram; manter Instagram nos contatos do rodapé.

## Ajustes finais de navegação e ritmo visual

Aprovado: retirar números de telefone visíveis no contato e rodapé; manter CTAs WhatsApp. Header com Serviços, Como funciona, Cuidados, Sobre e Contato. Menu mobile com fundo gelo sólido, sombra e rolagem interna sem bloqueio da página. O cuidado Fritz com azul claro. Curva SVG discreta e consistente nas imagens grandes do hero, atendimento e Sobre em telas a partir de 768px; preservar recortes dos cartões e acordeões e imagens retas no celular.

## Revisão dos recortes

Usuário rejeitou ondulações. Remover curvas SVG e substituir por um único canto arredondado nas imagens grandes a partir de 768px: inferior esquerdo no hero/Sobre e superior direito na imagem de atendimento. Manter imagens retas no celular e demais ajustes aprovados.

## Harmonia das cores entre seções

Manter uma família de azuis frios, com alternância por conteúdo: hero e serviços em gelo; mensagem em azul vivo; Como funciona em azul ardósia escuro; Cuidados em azul suave; introdução Sobre em gelo com fotografia escura; contato azul profundo e rodapé marinho. Texto branco e secundário azul claro nas superfícies escuras, grafite e cinza azulado nas claras. Centralizar tons em tokens e substituir aliases quentes remanescentes. Preservar animações, geometrias e conteúdo.

## Cantos arredondados no celular

Aplicar também no mobile os mesmos cantos assimétricos aprovados no desktop, com raio de 28px: hero/Sobre inferior esquerdo e imagens de serviços/atendimento superior direito. Preservar demais recortes e comportamento.
