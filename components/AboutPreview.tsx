'use client';

import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/data/assets';

export function AboutPreview() {
  return (
    <section className="about-preview section">
      <div className="about-preview-header">
        <div className="eyebrow">About Me</div>
        <h2 className="about-preview-heading reveal">I care deeply about how it feel, how it works <br /> not just how they look.</h2>
      </div>
      <div className="about-preview-photo reveal">
        <Image src={assets.aboutImage} alt="Anas Amir" fill sizes="440px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
      </div>
      <div className="about-preview-content reveal">
        <div className="about-preview-content-body">
          <p>I&apos;m Anas Amir an AI Product Engineer with <strong>2+ years of experience ,</strong> and someone who’s genuinely curious about how people, products, and technology come together.</p>
          <p>I enjoy taking messy problems, asking the right questions, and turning them into intelligent products that feel simple and intuitive. I’m fascinated by what AI can make possible, but
            I care just as much about making it useful, accessible, and meaningful. From shaping the experience to building the technology behind it, I enjoy taking ideas from early concepts to products that genuinely solve problems.</p>
          <p>Outside of work, I love traveling, going on long tours, exploring new places, and trying different kinds of food. I’m always drawn to new experiences and unfamiliar surroundings
            they keep me curious, open-minded, and constantly inspired.</p>
        </div>
        <p className="about-preview-quote reveal">Exploring what AI can do. Building what people need.</p>
        <Link className="about-work-btn" href="/contact">Let&apos;s Work Together</Link>
      </div>
    </section>
  );
}
