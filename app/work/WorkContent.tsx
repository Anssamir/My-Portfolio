'use client';

import { useRef } from 'react';
import { projects } from '@/data/projects';
import { WorkCard } from '@/components/WorkCard';
import { Footer } from '@/components/Footer';
import { useWorkStack } from '@/hooks/useWorkStack';

export function WorkContent() {
  const stackRef = useRef<HTMLDivElement>(null);
  useWorkStack(stackRef);

  return (
    <main>
      <section className="page-head">
        <div className="eyebrow">Featured Work</div>
        <h1>Like food, great design is invisible<br />when it works perfectly.</h1>
      </section>
      <section className="work-showcase" aria-label="Selected projects">
        <div className="work-stack" ref={stackRef}>
          {projects.map((p, i) => (
            <WorkCard p={p} index={i} key={p.slug} />
          ))}
          {/* Gives the completed stack a little room to hold before the footer */}
          <div className="work-stack-tail" aria-hidden="true" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
