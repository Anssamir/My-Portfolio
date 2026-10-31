'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { assets } from '@/data/assets';
import { AboutDescription } from '@/components/AboutDescription';
import { WorkShowcase } from '@/components/WorkShowcase';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

export function AboutContent() {
  const ref = useReveal();

  return (
    <main ref={ref}>
      <section className="about-hero section">
        <div className="eyebrow">About Me</div>
        <div className="about-hero-content">
          <div className="about-card about-card-head">
            <h1>Anas Amir</h1>
            <strong>AI Product Engineer</strong>
          </div>
          <div className="about-card about-card-body">
            <AboutDescription />
            <Link className="about-work-btn" href="/contact">Let&apos;s Work Together</Link>
          </div>
        </div>
        <div className="about-hero-photo reveal">
          <Image src={assets.aboutImage} alt="Anas Amir" fill sizes="(max-width: 720px) 100vw, 440px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </div>
      </section>

      <section className="statement">
        <p>Exploring what AI can do.<br />Building what people need.</p>
      </section>

      <WorkShowcase showCta />

      <Testimonials />
      <Footer />
    </main>
  );
}
