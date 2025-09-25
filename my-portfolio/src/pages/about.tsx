import React from "react";
const AboutPage: React.FC = () => {
  return (
    <main className="about-root">
      <Hero />
      <QuickFacts />
      <Highlights />
      <Skills />
      <Timeline />
      <CTA />
      <style>{styles}</style>
    </main>
  );
};

// ------------------------------ Sections -----------------------------------

const Hero: React.FC = () => (
  <header className="hero">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="eyebrow">About Me</div>
        <h1>Thomas Parisi</h1>
        <p className="tagline">
          Senior Computer Science at The University of Delaware — AI & Robotics
          concentration, Cybersecurity minor. I build end‑to‑end products where
          <em>research‑grade ideas</em> meet <em>production reliability</em>:
          desktop apps (Tauri), data/ML systems, and game prototypes with crisp
          design and real‑world impact.
        </p>
        <div className="hero-cta">
          <a className="button" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
          <a className="button button--ghost" href="mailto:thomas.parisi@example.com">Email Me</a>
          <div className="hero-links">
            <a href="https://github.com/Tommy-Parisi" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub ↗</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/thomas-parisi-771a76261/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn ↗</a>
          </div>
        </div>
      </div>

      <div className="hero-portrait" aria-hidden>
        {/* Swap this with a real image */}
        <div className="portrait-frame">
          <div className="portrait" />
        </div>
      </div>
    </div>
  </header>
);

const QuickFacts: React.FC = () => (
  <section className="facts" aria-label="Quick facts">
    <div className="facts-grid">
      <Fact kpi="20+" label="Codes coded" />
      <Fact kpi="1M+" label="Racks I done stacked" />
      <Fact kpi="80%" label="Of bitches fw it" />
      <Fact kpi="4000+" label="UD Computer Science student users (Sage Discord Bot)" />
    </div>
  </section>
);

const Fact: React.FC<{ kpi: string; label: string }> = ({ kpi, label }) => (
  <div className="fact">
    <div className="kpi">{kpi}</div>
    <div className="kpi-label">{label}</div>
  </div>
);

const Highlights: React.FC = () => (
  <section className="highlights" aria-label="Experience highlights">
    <h2>What I build</h2>
    <div className="cards">
      <HighlightCard
        title="FileSort — Smart File Organizer"
        subtitle="Svelte + Tauri UI · Python embeddings"
        bullets={[
          "Semantic clustering via sentence‑transformers + HDBSCAN",
          "Human‑in‑the‑loop labeling with sticky clusters",
          "Cross‑platform desktop app with a clean, resilient UI",
        ]}
        links={[
          //{ label: "GitHub", href: "https://github.com/Tommy-Parisi/FileSorter" },
        ]}
      />
      <HighlightCard
        title="SageTeamX — Discord Automation"
        subtitle="Node.js · TypeScript · Discord.js"
        bullets={[
          "Aided in developing custom calendar command with Google Calendar API",
          "Worked in an Agile team, holding sprints and consulting with dev ops and testing teams",
        ]}
      />
      <HighlightCard
        title="Captcha Cracker — Research Project"
        subtitle="Yolo11n, OpenCV, Selenium, Python"
        bullets={[
          "Automated CAPTCHA detection and interaction using selenium and pyautogui",
          "Object detection with YOLOv11n and OpenCV, tested on photo‑based CAPTCHAs",
          "Worked closley with University of Alabama at Huntsville VIVID faculty",
        ]}
      />
      <HighlightCard
        title="Swapborn — Puzzle Platformer"
        subtitle="Godot 4 · GDScript"
        bullets={[
          "Death‑swap core mechanic; timing‑driven level design",
          "Custom levels with NPC pathfinding",
        ]}
        //links={[{ label: "Page", href: "/projects/swapborn" }]} add a game demo 
      />
    </div>
  </section>
);

const HighlightCard: React.FC<{
  title: string;
  subtitle?: string;
  bullets: string[];
  links?: { label: string; href: string }[];
}> = ({ title, subtitle, bullets, links }) => (
  <article className="hcard">
    <h3>{title}</h3>
    {subtitle && <p className="muted">{subtitle}</p>}
    <ul>
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
    {links && (
      <div className="links">
        {links.map((l) => (
          <a key={l.href} className="button button--ghost" href={l.href} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </div>
    )}
  </article>
);

const Skills: React.FC = () => (
  <section className="skills" aria-label="Skills">
    <h2>Skills</h2>
    <div className="skill-columns">
      <SkillColumn
        title="Languages"
        items={["TypeScript", "Python", "C/C++", "SQL", "GDScript", "Java"]}
      />
      <SkillColumn
        title="Frameworks & Tools"
        items={["React/Vite", "Node.js", "Tauri", "Svelte", "Godot 4", "OpenCV"]}
      />
      <SkillColumn
        title="AI/ML & Data"
        items={["Embeddings", "HDBSCAN", "NLP", "Recommenders", "Pandas/NumPy", "ETL"]}
      />
      <SkillColumn
        title="Platforms & DevOps"
        items={["Docker", "Git/GitHub", "Linux", "Observability", "CI/CD Basics"]}
      />
    </div>
  </section>
);

const SkillColumn: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="skill-col">
    <h4>{title}</h4>
    <div className="chips">
      {items.map((i) => (
        <span key={i} className="chip">
          {i}
        </span>
      ))}
    </div>
  </div>
);

const Timeline: React.FC = () => (
  <section className="timeline" aria-label="Timeline">
    <h2>Path so far</h2>
    <ol className="tlist">
      <li>
        <div className="tdate">2025</div>
        <div className="tcontent">
          <strong>SmartSort</strong> public MVP — Implemented HDBSCAN clustering for semantic file sorting.
          Built Svelte + Tauri desktop with Python backend.
        <div> 
        </div>
          <strong>CaptchaCracker</strong> — Research project with University of Alabama in Huntsville VIVID virtual internship.
          Built and evaluated automated puzzle‑based CAPTCHA detection and interaction pipelines using YOLO, OpenCV, and Selenium.
        </div>
      </li>
      <li>
        <div className="tdate">2024</div>
        <div className="tcontent">
          <strong>University of Delaware</strong> — Advanced coursework across
          Computer Vision (CISC 442), Data Mining, OS (custom shell), and DB
          systems (Oracle). Led multiple team projects.
        <div>
        </div>
        <strong>UD Game Development Club</strong> — Built a simple 2D platformer game for a Game Jam. Swapborn 
        is a simple puzzle platformer with a death-swap mechanic where the player trades positions with the closest NPC upon death.
        </div>
      </li>
      <li>
        <div className="tdate">2023</div>
        <div className="tcontent">
          <strong>SageTeamX Discord Bot</strong> — I worked to implement a "/calendar" command that integrates with Google Calendar to fetch and display upcoming events.
          The bot is used in the UD Computer Science discord server by 4000+ students.
        </div>
      </li>
      <li>
        <div className="tdate">2022</div>
        <div className="tcontent">
          <strong>University of Delaware</strong> — Began core Computer Science curriculum in 
          datastructures, algorithms, OOP, and web development. Built small apps and games including 
          three card poker and a chess simulator with custom mechanics.
        </div>
      </li>
    </ol>
  </section>
);

const CTA: React.FC = () => (
  <section className="cta" aria-label="Contact">
    <div className="cta-card">
      <h2>Let’s build something great</h2>
      <p className="muted">
        Open to Software Engineering internships and new‑grad roles where I can
        ship product, own reliability, and apply ML thoughtfully.
      </p>
      <div className="links">
        <a className="button" href="mailto:thomas.parisi@example.com">Get in touch</a>
        <a className="button button--ghost" href="/Projects">View my projects</a>
      </div>
    </div>
  </section>
);

// ------------------------------- Styles ------------------------------------

const styles = `
:root{
  --bg: #0b0d12; --surface:#10131a; --muted:#9aa3b2; --text:#e8ecf2;
  --brand:#63b3ff; --ring:#3b82f6; --shadow:0 10px 30px rgba(0,0,0,.4);
  --chip:#1b2230; --chipText:#c9d4e3; --radius:16px;
}
*{box-sizing:border-box}
.about-root{color:var(--text); background: radial-gradient(1200px 600px at 10% -10%, rgba(99,179,255,.08), transparent 60%), radial-gradient(900px 500px at 100% 0%, rgba(99,255,210,.06), transparent 60%), var(--bg); min-height:100vh}

/* Hero */
.hero{max-width:1500px;margin:0 auto;padding:72px 24px 24px}
.hero-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:28px;align-items:center}
@media(max-width:880px){.hero-grid{grid-template-columns:1fr;gap:18px}}
.eyebrow{color:#b9c7dd;letter-spacing:.18em;text-transform:uppercase;font-size:12px;margin-bottom:8px}
.hero-copy h1{font-size:44px;line-height:1.05;margin:0 0 8px}
.hero-copy .tagline{color:#cdd6e6;font-size:18px;line-height:1.55;margin:0}
.hero-copy em{font-style:normal;color:#bfe2ff}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-top:16px}
.hero-links a{color:#cfe0ff;text-decoration:none}
.hero-links span{opacity:.5;margin:0 6px}

.hero-portrait{display:grid;place-items:center}
.portrait-frame{width:min(440px,100%);aspect-ratio:4/5;background:linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));border:1px solid #1b2230;border-radius:20px;box-shadow:var(--shadow);padding:14px}
.portrait{width:100%;height:100%;border-radius:14px;background:repeating-linear-gradient(45deg,#0f1520,#0f1520 10px,#0d121b 10px,#0d121b 20px)}

/* Buttons */
.button{background:linear-gradient(180deg,#2b63d9,#1b4ab8); border:1px solid #2f55c8; color:white; padding:10px 12px; border-radius:10px; font-weight:600; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px}
.button:hover{filter:brightness(1.05)}
.button--ghost{background:transparent;border:1px solid #24314a;color:#dbe8ff}
.button--ghost:hover{background:#0f1726}

/* Quick Facts */
.facts{max-width:1500px;margin:12px auto 24px;padding:0 24px}
.facts-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
@media(max-width:880px){.facts-grid{grid-template-columns:repeat(2,1fr)}}
.fact{background:linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.0)); border:1px solid #1b2230; border-radius:14px; padding:16px; text-align:center}
.kpi{font-size:26px;font-weight:700}
.kpi-label{color:var(--muted);font-size:13px}

/* Highlights */
.highlights{max-width:1500px;margin:24px auto;padding:0 24px}
.highlights h2{margin:0 0 12px;font-size:24px}
.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
@media(max-width:880px){.cards{grid-template-columns:1fr}}
.hcard{background:linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.0)); border:1px solid #1b2230; border-radius:16px; padding:16px; box-shadow:var(--shadow)}
.hcard h3{margin:0 0 4px;font-size:18px}
.muted{color:var(--muted);margin:0 0 8px}
.hcard ul{margin:0 0 8px 18px;line-height:1.45}
.links{display:flex;flex-wrap:wrap;gap:8px}

/* Skills */
.skills{max-width:1500px;margin:24px auto;padding:0 24px}
.skills h2{margin:0 0 12px;font-size:24px}
.skill-columns{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
@media(max-width:880px){.skill-columns{grid-template-columns:repeat(2,1fr)}}
.skill-col{background:linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.0)); border:1px solid #1b2230; border-radius:14px; padding:14px}
.skill-col h4{margin:0 0 8px;font-size:14px;letter-spacing:.3px;color:#a9b5c9;text-transform:uppercase}
.chips{display:flex;flex-wrap:wrap;gap:6px}
.chip{background:#121926;color:#c7d2e6;border:1px solid #1c2333;border-radius:8px;padding:4px 8px;font-size:12px}

/* Timeline */
.timeline{max-width:1500px;margin:24px auto;padding:0 24px}
.timeline h2{margin:0 0 12px;font-size:24px}
.tlist{list-style:none;margin:0;padding:0;border-left:2px solid #1f2a3d}
.tlist li{display:grid;grid-template-columns:120px 1fr;gap:12px;padding:12px 0 12px 12px}
@media(max-width:640px){.tlist li{grid-template-columns:1fr}}
.tdate{color:#a9b5c9;font-weight:600}
.tcontent{color:#c7cfdb}

/* CTA */
.cta{max-width:1500px;margin:32px auto 56px;padding:0 24px}
.cta-card{background:linear-gradient(180deg, rgba(99,179,255,.08), rgba(99,179,255,.02)); border:1px solid #1b2230; border-radius:20px; padding:22px; text-align:center; box-shadow:var(--shadow)}
.cta-card h2{margin:0 0 8px}
`;

export default AboutPage;
