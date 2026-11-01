export interface Post {
  slug: string;
  title: string;
  date: string;
  dateTime: string;
  excerpt: string;
  image: string;
  alt: string;
}

// Placeholder journal entries — swap the copy and imagery when the real
// essays are ready. The city photography is local Unsplash placeholders in
// /public/blog so the section has no runtime dependency on an external host.
export const posts: Post[] = [
  {
    slug: 'building-trust-through-clear-design',
    title: 'Building Trust Through Clear Design',
    date: 'May 5, 2025',
    dateTime: '2025-05-05',
    excerpt:
      'How thoughtful visual choices create a stronger sense of reliability for modern brands.',
    image: '/blog/building-trust.jpg',
    alt: 'A dense city skyline at dusk',
  },
  {
    slug: 'the-role-of-art-direction-in-branding',
    title: 'The Role of Art Direction in Branding',
    date: 'Jun 16, 2025',
    dateTime: '2025-06-16',
    excerpt:
      'Why visual direction helps brands create emotion and a distinct point of view.',
    image: '/blog/art-direction.jpg',
    alt: 'A freight train moving along tracks under a cloudy sky',
  },
  {
    slug: 'how-creative-teams-build-brand-systems',
    title: 'How Creative Teams Build Brand Systems',
    date: 'Jul 2, 2025',
    dateTime: '2025-07-02',
    excerpt:
      'A look at the workflows that keep branding consistent across every touchpoint.',
    image: '/blog/brand-systems.jpg',
    alt: 'An aerial view of a city filled with skyscrapers',
  },
];
