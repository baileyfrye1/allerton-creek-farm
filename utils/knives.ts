import { v4 as uuid } from 'uuid';

const knives = [
  {
    id: uuid(),
    knifeType: 'Ceramic Knives',
    pricing: '$9 - $15 (based on blade length)',
  },
  {
    id: uuid(),
    knifeType: 'Meat Cleaver',
    pricing: '$9',
  },
  {
    id: uuid(),
    knifeType: 'Kitchen Knife (blade 1 to 6 in.)',
    pricing: '$7 smooth edge / $8 serrated edge',
  },
  {
    id: uuid(),
    knifeType: 'Kitchen Knife (blade 6 to 10 in.)',
    pricing: '$11 smooth edge / $12 serrated edge',
  },
  {
    id: uuid(),
    knifeType: 'Kitchen Knife (blade 10 to 13 in.)',
    pricing: '$13 smooth edge / $14 serrated edge',
  },
  {
    id: uuid(),
    knifeType: 'Hunting / Tactical Knife (blade 1 to 6 in.)',
    pricing: '$7 smooth edge / $8 serrated edge',
  },
  {
    id: uuid(),
    knifeType: 'Hunting / Tactical Knife (blade 6 to 10 in.)',
    pricing: '$11 smooth edge / $12 serrated edge',
  },
  {
    id: uuid(),
    knifeType: 'Hunting / Tactical Knife (blade 10 to 13 in.)',
    pricing: '$13 smooth edge / $14 serrated edge',
  },
  {
    id: uuid(),
    knifeType: 'Knife Tip, Bolster, Heel, or Bevel Repair',
    pricing: '(if possible) - $5',
  },
];

export default knives;
