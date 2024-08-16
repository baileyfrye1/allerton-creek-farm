import { v4 as uuid } from 'uuid';

const markets = [
  {
    id: uuid(),
    marketName: 'Stangl Factory Farmers Market',
    dayAndTime: 'Saturdays, 9am - 3pm',
    availability: 'Year Round',
    location: '50 Stangl Rd, Flemington, NJ',
    url: 'http://www.stanglfactory.com/farmers-market-2/',
  },
  {
    id: uuid(),
    marketName: 'Easton Farmers Market',
    dayAndTime: 'Saturdays, 9am - 1pm',
    availability: 'May - December',
    location: '128 Larry Holmes Dr, Easton, PA',
    url: 'https://eastonfarmersmarket.com/',
  },
  {
    id: uuid(),
    marketName: 'Saucon Valley Farmers Market',
    dayAndTime: 'Sundays, 9am - 1pm',
    availability: 'May - November',
    location: '409 Constitution Ave, Hellertown, PA',
    url: 'https://www.svfmpa.com/',
  },
  {
    id: uuid(),
    marketName: 'Bernardsville Farmers Market',
    dayAndTime: 'Saturdays, 9am - 1pm',
    availability: 'June - December',
    location: 'US-202 & Claremont Rd, Bernardsville, NJ',
    url: 'https://www.bernardsvillefarmersmarket.com/',
  },
  {
    id: uuid(),
    marketName: 'Wrightstown Farmers Market',
    dayAndTime: 'Saturdays, 9am - 12pm',
    availability: 'May - November',
    location: '576 Penns Park Rd, Newtown, PA',
    url: '576 Penns Park Rd, Newtown, PA',
  },
];

export default markets;
