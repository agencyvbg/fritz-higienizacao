export const contact = {
  instagram: 'https://www.instagram.com/higienizacaofritz/',
  whatsappNumber: '5547999051278',
  whatsappDisplay: '+55 47 99905-1278',
} as const;
export function whatsappUrl(context?: string) {
  const message = context
    ? 'Olá! Conheci a Fritz pelo site e gostaria de solicitar um orçamento para ' +
      context +
      '.'
    : 'Olá! Gostaria de solicitar um orçamento para higienização ou impermeabilização de estofados.';
  return (
    'https://wa.me/' +
    contact.whatsappNumber +
    '?text=' +
    encodeURIComponent(message)
  );
}
