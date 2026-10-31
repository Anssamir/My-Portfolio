'use client';

import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/data/assets';
import { AboutDescription } from '@/components/AboutDescription';

export function AboutPreview() {
  return (
    <section className="about-preview section">
      <div className="about-preview-header">
        <div className="eyebrow">About Me</div>
        <h2 className="about-preview-heading reveal">I care about how it feels,<br /> not just how it looks.</h2>
      </div>
      <div className="about-preview-photo reveal">
        <Image src={assets.aboutImage} alt="Anas Amir" fill sizes="440px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
      </div>
      <div className="about-preview-content reveal">
        <div className="about-preview-content-body">
          <AboutDescription />
        </div>
        <p className="about-preview-quote reveal">Exploring what AI can do. Building what people need.</p>
        <Link className="about-work-btn" href="/contact">Let&apos;s Work Together</Link>
      </div>
    </section>
  );
}
