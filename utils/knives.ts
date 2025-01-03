import { v4 as uuid } from 'uuid';

const knives = [
  {
    id: uuid(),
    knifeType: 'Ceramic Knives',
    pricing: '$45/hr',
  },
  {
    id: uuid(),
    knifeType: 'Meat Cleaver',
    pricing: '$10',
  },
  {
    id: uuid(),
    knifeType: 'Kitchen Knife (blade 1 to 6 in.)',
    pricing: '$8 smooth edge / $9 serrated edge',
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
    pricing: '$8 smooth edge / $9 serrated edge',
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
  {
    id: uuid(),
    knifeType: 'Axe and Hatchet',
    pricing: '$10 (Large and numerous chips carry additional charge)',
  },
  {
    id: uuid(),
    knifeType: 'Machete (up to 20 in.)',
    pricing: '$15',
  },
  {
    id: uuid(),
    knifeType: 'Pizza Cutter',
    pricing: '$6',
  },
  {
    id: uuid(),
    knifeType: 'Western Chisel and Plane Blade (straight edge up to 3 in.)',
    pricing: '$11',
  },
  {
    id: uuid(),
    knifeType: 'Turning and Carving Tools (No V-Tools or carbide tips)',
    pricing: '$12',
  },
  {
    id: uuid(),
    knifeType: 'Rotary Mower Blade (clean and sharpen)',
    pricing: '$10',
  },
  {
    id: uuid(),
    knifeType:
      'Hand Pruner / Hedge Trimmer or Loppers (heavy rust removal / clean up additional charge)',
    pricing: '$11 / $5',
  },
  {
    id: uuid(),
    knifeType: 'Electric / Gas Trimmers',
    pricing: '$18',
  },
  {
    id: uuid(),
    knifeType: 'Edges, Hoes, and Shovels',
    pricing: '$8',
  },
  {
    id: uuid(),
    knifeType:
      'Chainsaw Chains (including cleaning and depth gauge when needed / up to 25 in.)',
    pricing: '$10',
  },
  {
    id: uuid(),
    knifeType: 'Household and Fabric Scissors (up to 12 in.)',
    pricing: '$7',
  },
  {
    id: uuid(),
    knifeType: 'Pinking Shears (any size)',
    pricing: '$8',
  },
];

export default knives;
