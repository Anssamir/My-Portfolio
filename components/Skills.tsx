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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28" fill="currentColor">
    <g>
      <path d="M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z" opacity="0.2"></path>
      <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path>
    </g>
  </svg>
);

const visualIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28" fill="currentColor">
    <g>
      <path d="M200,104H128L56,40H200ZM56,168l72,72V168h72l-72-64H56Z" opacity="0.2"></path>
      <path d="M208,104V40a8,8,0,0,0-8-8H56a8,8,0,0,0-5.31,14L107,96H56a8,8,0,0,0-8,8v64a8,8,0,0,0,2.34,5.66l72,72A8,8,0,0,0,136,240V176h64a8,8,0,0,0,5.31-14L149,112h51A8,8,0,0,0,208,104Zm-29,56H128a8,8,0,0,0-8,8v52.69l-56-56V112h61Zm13-64H131L77,48H192Z"></path>
    </g>
  </svg>
);

const brandIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="28" fill="currentColor">
    <g>
      <path d="M232,128c0,12.51-17.82,21.95-22.68,33.69-4.68,11.32,1.42,30.64-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68c-11.32-4.68-30.64,1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.67,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.64-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128Z" opacity="0.2"></path>
      <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.57-1.47-7.63-5.37-11.57-9.14C146.27,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.57-5.37,7.63-9.14,11.57C23.51,109.73,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.57,1.47,7.63,5.37,11.57,9.14C109.73,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.57,5.37-7.63,9.14-11.57C232.49,146.27,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.14-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32h0c-3.11-3.1-3.22-10.39-3.32-17.43-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.14,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.14,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.14,214.31,142.11Z"></path>
    </g>
  </svg>
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
                <h3>UI/UX Design</h3>
              </div>
              <p>I design intuitive, accessible, and user-centric web & mobile experiences that solve real problems.</p>
            </div>
            <div className="skill-card-image">
              <img src={assets.dansk} alt="UI/UX Design" />
            </div>
          </article>
          <article className="skill-card">
            <div className="skill-card-content">
              <div className="skill-card-heading">
                <span className="skill-card-icon">{photoIcon}</span>
                <h3>Photography</h3>
              </div>
              <p>I capture stunning visuals—food, travel, lifestyle—that bring stories and aesthetics to life across digital platforms.</p>
            </div>
          </article>
        </div>
        <div className="skills-column">
          <article className="skill-card">
            <div className="skill-card-content">
              <div className="skill-card-heading">
                <span className="skill-card-icon">{visualIcon}</span>
                <h3>Visual Design</h3>
              </div>
              <p>I create modern, engaging visuals that enhance usability, elevate brands, and improve user interaction.</p>
            </div>
          </article>
          <article className="skill-card has-marquee">
            <div className="skill-card-content">
              <div className="skill-card-heading">
                <span className="skill-card-icon">{brandIcon}</span>
                <h3>Branding</h3>
              </div>
              <p>From logos to style guides, I craft unique brand identities that reflect your vision and connect with your audience.</p>
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
