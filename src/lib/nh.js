// Display helper: the design rules ask for no hyphens inside copy.
export const nh = (s = '') =>
  s.replace(/e-commerce/gi, (m) => (m[0] === 'E' ? 'Ecommerce' : 'ecommerce'))
    .replace(/ — /g, ', ')
    .replace(/ - /g, ', ')
    .replace(/(\w)-(\w)/g, '$1 $2');
