import { assets } from './assets';

export interface Project {
  slug: string;
  title: string;
  date: string;
  image: string;
  tags: string[];
  description: string;
}

export const projects: Project[] = [
  {
    slug: 'danske',
    title: 'DanoGPT',
    date: 'June 2024',
    image: assets.dansk,
    tags: ['GenAI', 'Conversational UX', 'Figma'],
    description: 'An internal GenAI tool for banking staff. Speeds up query resolution with a smarter, conversational AI experience.',
  },
  {
    slug: 'nissan',
    title: 'Ventra & Luxoro',
    date: 'February 2023',
    image: assets.nissan,
    tags: ['Automotive', 'Service Design', 'Figma'],
    description: 'A digital car ownership platform — manage finances, track orders, and schedule maintenance in one place.',
  },
  {
    slug: 'loreal',
    title: 'GrowthOrbit by Aveline',
    date: 'October 2023',
    image: assets.loreal,
    tags: ['Analytics', 'Data Viz', 'Figma'],
    description: 'Redesigned analytics dashboards for a global beauty brand. Clear, insight-driven layouts for better decisions.',
  },
  {
    slug: 'marketly',
    title: 'Marketly Portal',
    date: 'May 2025',
    image: assets.marketly,
    tags: ['Marketing', 'Dashboard', 'Figma'],
    description: 'A presales marketing portal — dashboards, templates, and insights. Helps teams track sales assets with ease.',
  },
];
