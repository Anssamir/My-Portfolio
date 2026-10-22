'use client';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar?: string;
};

// Placeholder testimonials — swap the copy (and optionally add an `avatar`
// image path per person) when the real quotes come in. The first entry is
// rendered as the large lead panel.
const testimonials: Testimonial[] = [
  {
    quote:
      'Anas took a fuzzy brief and shipped an interface our users actually understood. He thinks in systems, moves fast, and never drops the human layer.',
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
];

const [lead, ...supporting] = testimonials;

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
          width="16"
          height="16"
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

function TestimonialCard({ t, lead: isLead }: { t: Testimonial; lead?: boolean }) {
  return (
    <figure className={isLead ? 'testimonial testimonial-lead' : 'testimonial'}>
      <Stars rating={t.rating} />
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

export function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="eyebrow">Kind Words</div>
      <div className="testimonials-head">
        <h2>
          Words from the people
          <br />
          I&apos;ve built with.
        </h2>
      </div>
      <div className="testimonials-grid reveal">
        <TestimonialCard t={lead} lead />
        <div className="testimonials-side">
          {supporting.map((t) => (
            <TestimonialCard t={t} key={t.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
