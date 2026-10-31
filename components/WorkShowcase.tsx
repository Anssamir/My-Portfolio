'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

interface WorkShowcaseProps {
  id?: string;
  showCta?: boolean;
}

export function WorkShowcase({ id, showCta = false }: WorkShowcaseProps) {
  return (
    <section id={id} className="section featured">
      <div className="eyebrow">Featured Work</div>
      <h2>Turning AI complexity into products people actually understand.</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <ProjectCard p={p} index={i} key={p.slug} />
        ))}
      </div>
      {showCta && (
        <div className="work-cta">
          <Link href="/work" className="about-work-btn">See all work</Link>
        </div>
      )}
    </section>
  );
}
