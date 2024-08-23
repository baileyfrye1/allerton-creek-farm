import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.BASE_URL}`,
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/sharpening`,
      priority: 0.75,
    },
    {
      url: `${process.env.BASE_URL}/about`,
      priority: 0.75,
    },
    {
      url: `${process.env.BASE_URL}/find`,
      priority: 0.75,
    },
  ];
}
