import { v4 as uuid } from 'uuid';

const links = [
  {
    id: uuid(),
    label: 'Sharpening Services',
    href: '/sharpening-services',
  },
  {
    id: uuid(),
    label: 'About Us',
    href: '/about',
  },
  {
    id: uuid(),
    label: 'Find Us',
    href: '/find',
  },
];

export default links;
