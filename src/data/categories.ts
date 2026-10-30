// Single source of truth for product categories.
// Used by the Keystatic dropdown AND the products page filter, so they can't drift apart.
export const categories = [
  { slug: 'analgesics', label: 'Analgesic/Antiinflammatory/Antipyretics', short: 'Analgesics' },
  { slug: 'antibiotics', label: 'Antibiotics/Antibacterial/Antifungal', short: 'Antibiotics' },
  { slug: 'antimalarials', label: 'Antimalarials', short: 'Antimalarials' },
  { slug: 'corticosteroids', label: 'Corticosteroids', short: 'Corticosteroids' },
  { slug: 'antacids', label: 'Antacids', short: 'Antacids' },
  { slug: 'ors-electrolytes', label: 'ORS/Electrolytes', short: 'ORS/Electrolytes' },
  { slug: 'lifestyle', label: 'Lifestyle', short: 'Lifestyle' },
  { slug: 'antihelmintics', label: 'Antihelmintics', short: 'Antihelmintics' },
  { slug: 'antifungals', label: 'Antifungals', short: 'Antifungals' },
  { slug: 'respiratory-support', label: 'Cough/Cold/Respiratory Support', short: 'Respiratory' },
  { slug: 'vitamins-supplements', label: 'Vitamins/Supplements/Hemanitics', short: 'Vitamins' },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
