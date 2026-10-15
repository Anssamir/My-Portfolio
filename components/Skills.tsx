'use client';

import { assets } from '@/data/assets';

const uiuxIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28" fill="currentColor">
    <g>
      <path d="M104,104V208H40a8,8,0,0,1-8-8V104Z" opacity="0.2"></path>
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z"></path>
    </g>
  </svg>
);

const photoIcon = (
  <img src={assets.devIcon} alt="Website Development" width="28" height="28" style={{ display: 'block' }} />
);

const visualIcon = (
  <img src="/Agent icon.png" alt="AI Agents" width="28" height="28" style={{ display: 'block' }} />
);

const brandIcon = (
  <img src={assets.bulbIcon} alt="End-to-End AI Solutions" width="28" height="28" style={{ display: 'block' }} />
);

const logos = [
  { name: 'Logo 2', src: 'https://framerusercontent.com/images/PWC5JxZO22welyWW3r6IKZSFdE.png?scale-down-to=2048&width=3840&height=2160' },
  { name: 'Logo 3', src: 'https://framerusercontent.com/images/NuRRXScdKLEvzVTpHzyiPhdL8Q4.png?scale-down-to=2048&width=3840&height=2160' },
  { name: 'Logo 4', src: 'https://framerusercontent.com/images/L1KoTeovYT6T0rwg55gWFouY.png?scale-down-to=2048&width=3840&height=2160' },
  { name: 'Logo 5', src: 'https://framerusercontent.com/images/y87cFHrhGISMiomfd3zXWvmP2ew.png?scale-down-to=2048&width=3840&height=2160' },
  { name: 'Logo 6', src: 'https://framerusercontent.com/images/bws6vmt5p3Wa3Y3qkDtfN88bw4.png?scale-down-to=2048&width=3840&height=2166' },
  { name: 'Logo 7', src: 'https://framerusercontent.com/images/gnTrKxXvJ0LzwoQHXt5PQbcgwg.png?scale-down-to=2048&width=3840&height=2160' },
];

export function Skills() {
  return (
    <section className="skills section">
      <div className="eyebrow">The Magic I Create</div>
      <div className="skills-header">
        <h2>My Superpowers</h2>
      </div>
      <div className="skills-bento">
        <div className="skills-column">
          <article className="skill-card has-image">
            <div className="skill-card-content">
              <div className="skill-card-heading">
                <span className="skill-card-icon">{uiuxIcon}</span>
                <h3>Product & UI/UX Design</h3>
              </div>
              <p>I design intuitive, accessible, and user-centric web & mobile experiences that solve real problems.</p>
            </div>
            <div className="skill-card-image">
              <img src={assets.uiuxDesign} alt="UI/UX Design" />
            </div>
          </article>
          <article className="skill-card">
            <div className="skill-card-content">
              <div className="skill-card-heading">
                <span className="skill-card-icon">{photoIcon}</span>
                <h3>Website Development</h3>
              </div>
              <p>I build fast, responsive, and scalable web applications that deliver seamless production-ready products.</p>
            </div>
          </article>
        </div>
        <div className="skills-column">
          <article className="skill-card">
            <div className="skill-card-content">
              <div className="skill-card-heading">
                <span className="skill-card-icon">{visualIcon}</span>
                <h3>AI Agents</h3>
              </div>
              <p>I build intelligent AI agents that automate workflows and repetitive processes into seamless experiences.</p>
            </div>
          </article>
          <article className="skill-card has-marquee">
            <div className="skill-card-content">
              <div className="skill-card-heading">
                <span className="skill-card-icon">{brandIcon}</span>
                <h3>End-to-End AI Solutions</h3>
              </div>
              <p>I build end-to-end AI solutions that connect intelligent systems, automate complex workflows, and turn business challenges into scalable, production-ready products.</p>
            </div>
            <div className="skill-card-marquee">
              <div className="skill-marquee-track">
                {[...logos, ...logos].map((logo, i) => (
                  <div className="skill-marquee-logo" key={i}>
                    <img src={logo.src} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="marquee">
        User Research &#x00B7; Prototyping &#x00B7; Interaction Design &#x00B7; Branding &#x00B7; Custom Code &#x00B7; Framer &#x00B7; Design thinking &#x00B7; Visual Design &#x00B7;
      </div>
    </section>
  );
}
