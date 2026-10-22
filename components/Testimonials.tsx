'use client';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar?: string;
};

// Placeholder testimonials — swap the copy (and optionally add an `avatar`
// image path per person) when the real quotes come in. Four per row keeps the
// two marquee rows balanced.
const testimonials: Testimonial[] = [
  {
    quote:
      'Anas took a fuzzy brief and shipped an interface our users actually understood. He thinks in systems and never drops the human layer.',
    name: 'Elena Marsh',
    role: 'Product Lead, Patronus AI',
    rating: 5,
  },
  {
    quote:
      'The rare designer who can build it too. Our onboarding finally feels effortless — and it shows in the numbers.',
    name: 'Daniel Okafor',
    role: 'Head of Design, House of Stox',
    rating: 5,
  },
  {
    quote:
      'Sharp thinking, clean execution, zero drama. Anas is the first person I call when a product needs an AI brain.',
    name: 'Priya Nair',
    role: 'Founder, Agentmax',
    rating: 5,
  },
  {
    quote:
      'He handed over components our team could actually maintain. Clear tokens, sensible states, no mystery CSS.',
    name: 'Marcus Lee',
    role: 'Engineering Manager, Dev Entity',
    rating: 5,
  },
  {
    quote:
      'He kept the brand intact while making the experience faster. That balance is harder than it looks.',
    name: 'Sofia Bianchi',
    role: 'Brand Director, L’ORÉAL',
    rating: 5,
  },
  {
    quote:
      'We went from a rough prototype to something investors understood in one meeting. Anas made the product legible.',
    name: 'James Carter',
    role: 'CEO, Northwind Labs',
    rating: 5,
  },
  {
    quote:
      'Fast, calm, and specific. He asks the question that saves a week, then quietly ships the answer.',
    name: 'Aisha Rahman',
    role: 'Product Manager, Patronus AI',
    rating: 5,
  },
  {
    quote:
      'Our landing page finally feels like the product. Considered motion, tight typography, and no wasted pixels.',
    name: 'Tomás Silva',
    role: 'Co-founder, Studio Verde',
    rating: 5,
  },
];

// The track repeats one group so it can loop by exactly one group width
// (100% / REPEATS) with no visible seam or restart.
const REPEATS = 4;

const rowOne = testimonials.slice(0, 4);
const rowTwo = testimonials.slice(4);

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="testimonial-stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width="13"
          height="13"
          aria-hidden="true"
          focusable="false"
          fill="currentColor"
          opacity={i < rating ? 1 : 0.22}
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

function QuoteMark() {
  return (
    <svg
      className="testimonial-mark"
      viewBox="0 0 47 34"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 34V21.4C0 9 7 1.6 19 0l1.6 5.6C14 7 10.4 10.8 10 16.6H18V34H0Z" />
      <path d="M26 34V21.4C26 9 33 1.6 45 0l1.6 5.6C40 7 36.4 10.8 36 16.6H44V34H26Z" />
    </svg>
  );
}

function TestimonialCard({ t, duplicate }: { t: Testimonial; duplicate?: boolean }) {
  return (
    <figure className="testimonial" aria-hidden={duplicate || undefined}>
      <div className="testimonial-top">
        <QuoteMark />
        <Stars rating={t.rating} />
      </div>
      <blockquote className="testimonial-quote">{t.quote}</blockquote>
      <figcaption className="testimonial-person">
        <span className="testimonial-avatar" aria-hidden="true">
          {t.avatar ? <img src={t.avatar} alt="" /> : initials(t.name)}
        </span>
        <span className="testimonial-meta">
          <b>{t.name}</b>
          <span>{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function Row({ items, reverse }: { items: Testimonial[]; reverse?: boolean }) {
  return (
    <div className="testimonials-row">
      <div className={reverse ? 'testimonials-track reverse' : 'testimonials-track'}>
        {Array.from({ length: REPEATS }, (_, repeat) =>
          items.map((t, i) => (
            <TestimonialCard key={`${repeat}-${i}`} t={t} duplicate={repeat > 0} />
          ))
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-head">
        <div className="eyebrow">Kind Words</div>
        <h2>
          Words from the people
          <br />
          I&apos;ve built with.
        </h2>
      </div>
      <div className="testimonials-marquee">
        <Row items={rowOne} />
        <Row items={rowTwo} reverse />
      </div>
    </section>
  );
}
