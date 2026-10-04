const configuredUrl =
  process.env.SITE_URL || 'https://higienizacaofritz.vercel.app';
const url = new URL(configuredUrl);
if (
  url.protocol !== 'https:' ||
  url.username ||
  url.password ||
  url.search ||
  url.hash ||
  url.pathname !== '/'
) {
  throw new Error(
    'SITE_URL deve ser a origem HTTPS do site, sem caminho, credenciais ou parâmetros.',
  );
}

export const site = {
  name: 'Fritz Higienização e Impermeabilização',
  url: url.origin,
  title: 'Fritz — Higienização e impermeabilização em Joinville',
  description:
    'Limpeza e proteção para sofás, colchões, cadeiras e poltronas. Higienização e impermeabilização de estofados em Joinville e região.',
  indexable: process.env.SITE_INDEXABLE === 'true',
};
