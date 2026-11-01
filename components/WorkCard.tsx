'use client';

import Link from 'next/link';
import type { CSSProperties } from 'react';
import { type Project } from '@/data/projects';

interface WorkCardProps {
  p: Project;
  index: number;
}

export function WorkCard({ p, index }: WorkCardProps) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="work-card"
      data-work-card
      style={{ '--stack-index': index } as CSSProperties}
    >
      <div className="work-card-content">
        <p className="work-card-date">{p.date}</p>
        <h2 className="work-card-title">{p.title}</h2>
        <p className="work-card-desc">{p.workDescription ?? p.description}</p>
        <ul className="work-card-tags" aria-label={`${p.title} tags`}>
          {(p.workTags ?? p.tags).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="work-card-media">
        <img
          src={p.image}
          alt={`${p.title} project preview`}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    </Link>
  );
}
