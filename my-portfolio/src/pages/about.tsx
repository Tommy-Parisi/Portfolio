import React, { useEffect, useRef } from "react";

const profileImage = "/assets/profile-image.jpg";

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

const AboutPage: React.FC = () => (
  <div className="ab-root">
    <Hero />
    <QuickFacts />
    <Highlights />
    <Skills />
    <Timeline />
    <CTA />
    <style>{styles}</style>
  </div>
);

// ----------------------------- Sections -----------------------------------

const Hero: React.FC = () => {
  const ref = useSectionAnimation();
  return (
    <header className="ab-hero" ref={ref as React.RefObject<HTMLElement>}>
      <div className="ab-hero-grid">
        <div className="ab-hero-copy fade-up">
          <span className="ab-eyebrow">About Me</span>
          <h2 className="ab-hero-name">Thomas Parisi</h2>
          <p className="ab-hero-tagline">
            I am a Senior studying Computer Science at The University of Delaware — AI &amp; Robotics
            concentration, Cybersecurity minor. From Syracuse, NY. Open to relocating — Philadelphia,
            Chicago, NYC, or Syracuse are all appealing. My dream is to work as a Game Developer or
            Software Engineer for whoever I can help.
          </p>
          <div className="ab-hero-cta">
            <a className="btn-solid" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a className="btn-ghost" href="mailto:tcparisi55@gmail.com">
              Email Me
            </a>
            <div className="ab-hero-links">
              <a href="https://github.com/Tommy-Parisi" target="_blank" rel="noreferrer">GitHub ↗</a>
              <span aria-hidden>·</span>
              <a href="https://www.linkedin.com/in/thomas-parisi-771a76261/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </div>

        <div className="ab-hero-portrait fade-up" style={{ transitionDelay: '120ms' }}>
          <div className="ab-portrait-frame">
            <img src={profileImage} alt="Thomas Parisi" className="ab-portrait" />
          </div>
        </div>
      </div>
    </header>
  );
};

const QuickFacts: React.FC = () => {
  const ref = useSectionAnimation();
  return (
    <section className="ab-facts" aria-label="Quick facts" ref={ref as React.RefObject<HTMLElement>}>
      <div className="ab-facts-grid">
        <Fact kpi="4000+" label="UD Computer Science student users (Sage Discord Bot)" index={0} />
        <Fact kpi="2026"  label="Graduating UD Computer Science class"                  index={1} />
        <Fact kpi="100%"  label="Self-Hosted Infrastructure"                             index={2} />
        <Fact kpi="∞"     label="Curiosity &amp; Creativity"                             index={3} />
      </div>
    </section>
  );
};

const Fact: React.FC<{ kpi: string; label: string; index: number }> = ({ kpi, label, index }) => (
  <div className="ab-fact fade-up glass-card" style={{ transitionDelay: `${index * 80}ms` }}>
    <div className="ab-kpi">{kpi}</div>
    <div className="ab-kpi-label">{label}</div>
  </div>
);

const Highlights: React.FC = () => {
  const ref = useSectionAnimation();
  return (
    <section className="ab-section" aria-label="Current work" ref={ref as React.RefObject<HTMLElement>}>
      <h2 className="ab-section-title fade-up">What I'm Currently Working On</h2>
      <div className="ab-cards">
        <HighlightCard
          index={0}
          title="Security Exception System — AI‑Assisted Risk Assessment"
          subtitle="React + Python · Gemini API · Pinecone RAG"
          bullets={[
            "Deterministic risk scoring with LLM‑generated narratives and policy citations",
            "RAG pipeline with semantic search over UD security policies (300× faster via local caching)",
            "Dual interface: guided chatbot for users + decision support tool for IT analysts",
          ]}
          links={[{ label: "GitHub", href: "https://github.com/Tommy-Parisi/ExemptionRequestClassifier" }]}
        />
        <HighlightCard
          index={1}
          title="BiasDetector — Media Bias Analysis Engine"
          subtitle="C++17 · NLP Pipeline · Design Patterns"
          bullets={[
            "4 independent bias signals (sentiment, framing, emotion) via Strategy pattern ensemble",
            "Full NLP pipeline: tokenization, sentence splitting, NER, sentiment analysis",
            "Algorithmic confidence scoring based on signal agreement and data sufficiency",
          ]}
          links={[{ label: "GitHub", href: "https://github.com/Tommy-Parisi/bias-detector" }]}
        />
        <HighlightCard
          index={2}
          title="Self-Hosted Home Server"
          subtitle="Ubuntu · Tailscale · Docker · Jellyfin"
          bullets={[
            "Host personal portfolio website with custom domain on Ubuntu server",
            "Configured Tailscale VPN, UFW, and key-based SSH for secure remote access",
            "Deployed Dockerized Jellyfin media server for streaming and media management",
          ]}
        />
        <HighlightCard
          index={3}
          title="Current Coursework"
          subtitle="Networks · Cybersecurity · Machine Learning · System Hardening"
          bullets={[
            "Study networks, protocols, and end-to-end communication analysis",
            "Explore reverse engineering and penetration testing to identify vulnerabilities",
            "Apply system hardening and protection strategies to secure environments",
          ]}
        />
      </div>
    </section>
  );
};

const HighlightCard: React.FC<{
  title: string;
  subtitle?: string;
  bullets: string[];
  links?: { label: string; href: string }[];
  index: number;
}> = ({ title, subtitle, bullets, links, index }) => (
  <article
    className="ab-hcard glass-card fade-up"
    style={{ transitionDelay: `${index * 80}ms` }}
  >
    <div className="ab-hcard-accent" />
    <h3 className="ab-hcard-title">{title}</h3>
    {subtitle && <p className="ab-muted">{subtitle}</p>}
    <ul className="ab-hcard-list">
      {bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
    {links && (
      <div className="ab-row">
        {links.map(l => (
          <a key={l.href} className="btn-ghost" href={l.href} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </div>
    )}
  </article>
);

const Skills: React.FC = () => {
  const ref = useSectionAnimation();
  return (
    <section className="ab-section" aria-label="Skills" ref={ref as React.RefObject<HTMLElement>}>
      <h2 className="ab-section-title fade-up">Skills</h2>
      <div className="ab-skill-grid">
        <SkillColumn index={0} title="Languages, Frameworks & Libraries" items={[
          "TypeScript","Python","C/C++","Java","SQL","GDScript",
          "React/Vite","Node.js","Svelte","Tauri","Godot 4","OpenCV",
        ]} />
        <SkillColumn index={1} title="AI/ML & Data" items={[
          "Embeddings & NLP","Recommender Systems","Collaborative Filtering",
          "Computer Vision","Deep Learning","Image Segmentation",
          "Stereo Vision (Disparity Mapping)","Pandas/NumPy","ETL",
        ]} />
        <SkillColumn index={2} title="Systems & Platforms" items={[
          "Docker","Linux Server Admin","Nginx","Self-Hosting",
          "Tailscale VPN","System Hardening (UFW, SSH Keys)","Git/GitHub","CI/CD Basics",
        ]} />
        <SkillColumn index={3} title="Cybersecurity & Research" items={[
          "CAPTCHA Automation & Robustness","Adversarial Testing","Secure Configurations",
          "Network Security","Observability","Experiment Design","Academic Research Collaboration",
        ]} />
      </div>
    </section>
  );
};

const SkillColumn: React.FC<{ title: string; items: string[]; index: number }> = ({ title, items, index }) => (
  <div
    className="ab-skill-col glass-card fade-up"
    style={{ transitionDelay: `${index * 80}ms` }}
  >
    <h4 className="ab-skill-title">{title}</h4>
    <div className="ab-chips">
      {items.map(i => <span key={i} className="chip">{i}</span>)}
    </div>
  </div>
);

const Timeline: React.FC = () => {
  const ref = useSectionAnimation();
  return (
    <section className="ab-section" aria-label="Timeline" ref={ref as React.RefObject<HTMLElement>}>
      <h2 className="ab-section-title fade-up">Path So Far</h2>
      <ol className="ab-timeline">
        {[
          {
            year: "2025",
            content: (
              <>
                <strong>BiasDetector</strong> — C++ media bias detection using independent statistical
                signals with Strategy pattern architecture. Complete NLP pipeline producing interpretable bias scores.
                <br /><br />
                <strong>Security Exception System</strong> — Scrum leader building AI-assisted risk assessment
                for UD IT. RAG system with Pinecone, deterministic risk scoring, and dual-interface system.
                <br /><br />
                <strong>FileSort</strong> — HDBSCAN clustering for semantic file sorting. Svelte + Tauri desktop with Python backend.
                <br /><br />
                <strong>CaptchaCracker</strong> — Research with VIVID / UAH. YOLO, OpenCV, and Selenium pipeline
                for CAPTCHA detection and interaction.
              </>
            ),
          },
          {
            year: "2024",
            content: (
              <>
                <strong>University of Delaware</strong> — Advanced coursework: Computer Vision (CISC 442),
                Data Mining, OS (custom shell), and DB systems. Led multiple team projects.
                <br /><br />
                <strong>UD Game Development Club</strong> — Built Swapborn, a 2D puzzle platformer for a
                Game Jam featuring a death-swap mechanic.
              </>
            ),
          },
          {
            year: "2023",
            content: (
              <>
                <strong>SageTeamX Discord Bot</strong> — Implemented /calendar command integrating
                Google Calendar. Bot serves 4000+ students in the UD CS Discord.
              </>
            ),
          },
          {
            year: "2022",
            content: (
              <>
                <strong>University of Delaware</strong> — Core CS curriculum: data structures, algorithms,
                OOP, and web development. Built three-card poker and a chess simulator.
              </>
            ),
          },
        ].map(({ year, content }, i) => (
          <li key={year} className="ab-tl-item fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="ab-tl-dot" />
            <div className="ab-tl-year">{year}</div>
            <div className="ab-tl-content">{content}</div>
          </li>
        ))}
      </ol>
    </section>
  );
};

const CTA: React.FC = () => {
  const ref = useSectionAnimation();
  return (
    <section className="ab-section" aria-label="Contact" ref={ref as React.RefObject<HTMLElement>}>
      <div className="ab-cta glass-card fade-up">
        <h2 className="ab-cta-title">Let's build something great</h2>
        <p className="ab-muted">
          Open to Software Engineering internships and new-grad roles where I can ship product,
          own reliability, and apply ML thoughtfully.
        </p>
        <div className="ab-row">
          <a className="btn-solid" href="mailto:tcparisi55@gmail.com">Get in touch</a>
          <a className="btn-ghost" href="/projects">View my projects</a>
        </div>
      </div>
    </section>
  );
};

// ----------------------------- Styles -------------------------------------

const styles = `
.ab-root {
  color: #e8ecf2;
  min-height: 100vh;
  padding-bottom: 5rem;
}

/* Hero */
.ab-hero {
  max-width: 1500px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
}

.ab-hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 3rem;
  align-items: center;
}

@media (max-width: 900px) {
  .ab-hero-grid { grid-template-columns: 1fr; gap: 2rem; }
  .ab-hero-portrait { order: -1; }
}

.ab-eyebrow {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #63b3ff;
  display: block;
  margin-bottom: 12px;
}

.ab-hero-name {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: #e8ecf2;
  margin: 0 0 12px;
  line-height: 1.1;
}

.ab-hero-tagline {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 1rem;
  color: rgba(232,236,242,0.65);
  line-height: 1.65;
  margin: 0;
  max-width: 560px;
}

.ab-hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-top: 1.5rem;
}

.ab-hero-links {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.9rem;
}

.ab-hero-links a { color: rgba(99,179,255,0.8); }
.ab-hero-links a:hover { color: #63b3ff; opacity: 1; }
.ab-hero-links span { color: #374151; }

.ab-hero-portrait {
  display: grid;
  place-items: center;
}

.ab-portrait-frame {
  width: min(340px, 100%);
  aspect-ratio: 4/5;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 0 0 1px rgba(99,179,255,0.10), 0 16px 48px rgba(0,0,0,0.70);
}

.ab-portrait {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}

/* Shared section wrapper */
.ab-section {
  max-width: 1500px;
  margin: 0 auto;
  padding: 2.5rem 2rem 0;
}

.ab-section-title {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  font-weight: 700;
  color: #e8ecf2;
  margin: 0 0 1.25rem;
}

/* Quick facts */
.ab-facts {
  max-width: 1500px;
  margin: 0 auto;
  padding: 2.5rem 2rem 0;
}

.ab-facts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

@media (max-width: 900px) { .ab-facts-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .ab-facts-grid { grid-template-columns: 1fr 1fr; } }

.ab-fact {
  padding: 1.25rem;
  text-align: center;
  /* glass-card hover lifts — override to subtle for stat cards */
}

.ab-fact:hover {
  transform: translateY(-2px);
}

.ab-kpi {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  color: #63b3ff;
  line-height: 1;
  margin-bottom: 8px;
}

.ab-kpi-label {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 12px;
  color: #6b7280;
  line-height: 1.4;
}

/* Highlight cards */
.ab-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (max-width: 900px) { .ab-cards { grid-template-columns: 1fr; } }

.ab-hcard {
  padding: 1.25rem 1.5rem 1.5rem;
  position: relative;
  overflow: hidden;
}

/* Top-edge accent bar */
.ab-hcard-accent {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #63b3ff, rgba(99,179,255,0.2));
  border-radius: 16px 16px 0 0;
}

.ab-hcard-title {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #e8ecf2;
  margin: 0 0 4px;
}

.ab-muted {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #6b7280;
  margin: 0 0 10px;
}

.ab-hcard-list {
  margin: 0 0 12px 1.1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ab-hcard-list li {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.875rem;
  color: rgba(232,236,242,0.70);
  line-height: 1.5;
}

/* Skills */
.ab-skill-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

@media (max-width: 1024px) { .ab-skill-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px)  { .ab-skill-grid { grid-template-columns: 1fr; } }

.ab-skill-col {
  padding: 1.25rem;
}

.ab-skill-title {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6b7280;
  margin: 0 0 12px;
}

.ab-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* Timeline */
.ab-timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.ab-timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, #63b3ff, rgba(99,179,255,0.1));
  border-radius: 2px;
}

.ab-tl-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
  padding: 0 0 2rem 2rem;
  position: relative;
}

@media (max-width: 600px) {
  .ab-tl-item { grid-template-columns: 60px 1fr; gap: 0.75rem; }
}

.ab-tl-dot {
  position: absolute;
  left: 1px;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #000;
  border: 2px solid #63b3ff;
  box-shadow: 0 0 8px rgba(99,179,255,0.4);
}

.ab-tl-year {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #63b3ff;
  padding-top: 2px;
}

.ab-tl-content {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.9rem;
  color: rgba(232,236,242,0.70);
  line-height: 1.6;
}

.ab-tl-content strong { color: #e8ecf2; font-weight: 600; }

/* CTA */
.ab-cta {
  padding: 2rem 2.5rem;
  text-align: center;
}

.ab-cta-title {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  font-weight: 700;
  color: #e8ecf2;
  margin: 0 0 10px;
}

.ab-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}

@media (max-width: 600px) {
  .ab-hero, .ab-section, .ab-facts { padding-left: 1rem; padding-right: 1rem; }
}
`;

export default AboutPage;
