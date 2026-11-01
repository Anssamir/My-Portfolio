'use client';

import { useReveal } from '@/hooks/useReveal';
import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';

export function BlogContent() {
  const ref = useReveal();

  return (
    <main ref={ref}>
      <div className="blog-page">
        <BlogSection showCta={false} linkCards={false} />
      </div>
      <Footer />
    </main>
  );
}
