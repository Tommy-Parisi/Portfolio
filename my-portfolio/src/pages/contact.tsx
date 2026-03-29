import React, { useState, useEffect, useRef } from "react";

// ----------------------------- Scroll animation hook -----------------------

function useSectionAnimation() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('.fade-up');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    items.forEach(i => observer.observe(i));
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ----------------------------- Page ---------------------------------------

const ContactPage: React.FC = () => (
  <div className="ct-root">
    <Hero />
    <ContactLinks />
    <style>{styles}</style>
  </div>
);

// ----------------------------- Hero ---------------------------------------

const Hero: React.FC = () => {
  const ref = useSectionAnimation();
  return (
    <header className="ct-hero" ref={ref as React.RefObject<HTMLElement>}>
      <span className="ct-eyebrow fade-up">Contact</span>
      <h2 className="ct-hero-title fade-up" style={{ transitionDelay: '60ms' }}>
        Let's connect
      </h2>
      <p className="ct-hero-tagline fade-up" style={{ transitionDelay: '120ms' }}>
        I'm interested in contributing through a{' '}
        <strong>Software Engineering or Cybersecurity</strong> role — building
        and shipping impactful features, applying AI and ML, or securing critical systems.
        I thrive in fast-paced, collaborative environments where innovation meets security.
      </p>
      <p className="ct-hero-sub fade-up" style={{ transitionDelay: '180ms' }}>
        Reach out through any of the platforms below. Let's build!
      </p>
    </header>
  );
};

// ----------------------------- Contact grid --------------------------------

const ContactLinks: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const ref = useSectionAnimation();

  const copy = async (text: string, setCopied: (v: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  };

  return (
    <section className="ct-section" aria-label="Contact links" ref={ref as React.RefObject<HTMLElement>}>
      <div className="ct-grid">
        {/* Email */}
        <div className="ct-card glass-card fade-up" style={{ transitionDelay: '0ms' }} onClick={() => copy("tcparisi55@gmail.com", setEmailCopied)}>
          <div className="ct-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <div className="ct-info">
            <h3>Email</h3>
            <p>{emailCopied ? "Copied!" : "tcparisi55@gmail.com"}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="ct-card glass-card fade-up" style={{ transitionDelay: '60ms' }} onClick={() => copy("(315) 949-0106", setPhoneCopied)}>
          <div className="ct-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div className="ct-info">
            <h3>Phone</h3>
            <p>{phoneCopied ? "Copied!" : "(315) 949-0106"}</p>
          </div>
        </div>

        {/* GitHub */}
        <a href="https://github.com/Tommy-Parisi" target="_blank" rel="noreferrer" className="ct-card glass-card fade-up" style={{ transitionDelay: '120ms' }}>
          <div className="ct-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </div>
          <div className="ct-info">
            <h3>GitHub</h3>
            <p>Tommy-Parisi</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/thomas-parisi-771a76261/" target="_blank" rel="noreferrer" className="ct-card glass-card fade-up" style={{ transitionDelay: '180ms' }}>
          <div className="ct-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </div>
          <div className="ct-info">
            <h3>LinkedIn</h3>
            <p>Thomas Parisi</p>
          </div>
        </a>

        {/* Resume */}
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="ct-card glass-card fade-up" style={{ transitionDelay: '240ms' }}>
          <div className="ct-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
          <div className="ct-info">
            <h3>Resume</h3>
            <p>Download PDF</p>
          </div>
        </a>

        {/* Projects */}
        <a href="/projects" className="ct-card glass-card fade-up" style={{ transitionDelay: '300ms' }}>
          <div className="ct-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <div className="ct-info">
            <h3>Projects</h3>
            <p>View my work</p>
          </div>
        </a>
      </div>
    </section>
  );
};

// ----------------------------- Styles -------------------------------------

const styles = `
.ct-root {
  color: #e8ecf2;
  min-height: 100vh;
  padding-bottom: 5rem;
}

.ct-hero {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem 2.5rem;
  text-align: center;
}

.ct-eyebrow {
  display: block;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #63b3ff;
  margin-bottom: 12px;
}

.ct-hero-title {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #e8ecf2;
  margin: 0 0 1rem;
  line-height: 1.1;
}

.ct-hero-tagline {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: rgba(232,236,242,0.65);
  line-height: 1.65;
  margin: 0 0 0.75rem;
}

.ct-hero-tagline strong { color: #e8ecf2; font-weight: 600; }

.ct-hero-sub {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  margin: 0;
}

/* Contact grid */
.ct-section {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem 0;
}

.ct-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

/* Card */
.ct-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 1.25rem 1.5rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  /* glass-card class handles bg/border/hover */
}

/* Override glass-card hover transform for contact cards (subtler) */
.ct-card:hover {
  transform: translateY(-3px);
}

/* Icon circle */
.ct-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: rgba(99,179,255,0.08);
  border: 1px solid rgba(99,179,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #63b3ff;
  flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.ct-card:hover .ct-icon {
  background: rgba(99,179,255,0.14);
  border-color: rgba(99,179,255,0.35);
  box-shadow: 0 0 12px rgba(99,179,255,0.18);
}

.ct-info h3 {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #e8ecf2;
  margin: 0 0 3px;
  text-align: left;
}

.ct-info p {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0;
  text-align: left;
  transition: color 0.2s;
}

.ct-card:hover .ct-info p {
  color: rgba(232,236,242,0.55);
}

@media (max-width: 600px) {
  .ct-hero, .ct-section { padding-left: 1rem; padding-right: 1rem; }
  .ct-grid { grid-template-columns: 1fr; }
}
`;

export default ContactPage;
