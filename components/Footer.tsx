'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-heading">
          <h2>
            <span className="footer-heading-light">
              Let’s{' '}
              <span className="footer-word" aria-hidden="true">
                <span className="footer-word-track">
                  <span>design</span>
                  <span>build</span>
                  <span>create</span>
                  <span>make</span>
                  {/* Duplicate of the first word keeps the loop seamless */}
                  <span>design</span>
                </span>
              </span>
              <span className="footer-word-sr">design</span>
            </span>
            <span className="footer-heading-muted">incredible work together.</span>
          </h2>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-label">Email</span>
            <a href="mailto:annasamir122@gmail.com" className="footer-value">
              annasamir122@gmail.com
            </a>
          </div>

          <div className="footer-col">
            <span className="footer-label">Call Me</span>
            <Link href="/contact" className="footer-value">
              Book Now
            </Link>
          </div>

          <div className="footer-col footer-col-social">
            <span className="footer-label">Social</span>
            <div className="footer-socials">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="4.983" cy="5.009" r="2.188" />
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.302-3.118 2.272-3.118 1.943 0 1.969 1.817 1.969 3.221v5.9h3.769v-6.643c0-3.262-.702-5.772-4.509-5.772-1.83 0-3.056 1.007-3.557 1.956h-.053V8.855H9.237zM3.098 8.855h3.769v12.139H3.098z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="footer-social-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.228 15.01c.443 0 .892-.023 1.346-.07.453-.047.854-.184 1.203-.41.35-.226.621-.54.814-.943.193-.402.29-.916.29-1.54 0-.672-.158-1.229-.475-1.67-.316-.442-.81-.744-1.482-.907.502-.213.885-.506 1.15-.879.264-.373.396-.838.396-1.394 0-.501-.09-.927-.27-1.278a2.534 2.534 0 0 0-.74-.888 3.518 3.518 0 0 0-1.121-.497C8.948 4.47 8.441 4.437 7.82 4.437H1.5v15.126h6.728zm-3.83-8.082h3.183c.73 0 1.277.135 1.64.406.364.27.546.685.546 1.242 0 .591-.197 1.02-.591 1.285-.395.266-.975.399-1.74.399H4.398V6.928zm0 5.43h3.498c.844 0 1.48.16 1.908.48.428.32.642.806.642 1.458 0 .685-.224 1.196-.672 1.534-.448.337-1.135.506-2.06.506H4.398v-3.978zm13.12 1.366c-.031-.767-.225-1.373-.58-1.819a2.76 2.76 0 0 0-1.077-.852 3.69 3.69 0 0 0-1.517-.297c-.63 0-1.192.115-1.685.345a3.42 3.42 0 0 0-1.248.966c-.34.415-.595.92-.765 1.516-.17.597-.247 1.258-.232 1.984 0 .762.094 1.442.283 2.041.19.6.471 1.104.845 1.512.374.408.835.717 1.383.927.548.21 1.171.315 1.87.315.932 0 1.743-.198 2.433-.594.69-.396 1.189-.997 1.497-1.803l-2.06-.525c-.156.402-.404.708-.744.918-.34.21-.75.315-1.23.315-.653 0-1.17-.184-1.55-.552-.38-.368-.588-.936-.624-1.704h5.45c.01-.252.015-.494.015-.727 0-.012 0-.036.002-.07zm-5.405-1.353c.04-.634.22-1.118.54-1.452.32-.334.783-.501 1.39-.501.577 0 1.026.155 1.346.465.32.31.503.768.55 1.374h-3.826v-.014v.128zm.39-4.887h4.63v1.393h-4.63V7.484z" />
                </svg>
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="footer-social-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-sub">
          <span className="footer-location">Based in Pakistan</span>
          <span className="footer-copyright">&copy; 2026 Anas Amir</span>
        </div>
      </div>

      <div className="footer-bottom">
        <Link href="/contact" className="footer-touch-banner" aria-label="Get in touch">
          <span className="footer-touch-sharp" aria-hidden="true">
            Get in touch
          </span>
          <span className="footer-touch-glass" aria-hidden="true">
            Get in touch
          </span>
        </Link>
      </div>
    </footer>
  );
}
