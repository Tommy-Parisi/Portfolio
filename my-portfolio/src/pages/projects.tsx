import React, { useMemo, useState } from "react";

const smartSortImage      = "/assets/SmartSort.png";
const captchaImage        = "/assets/captcha.png";
const serverImage         = "/assets/server.png";
const swapbornImage       = "/assets/Swapborn.png";
const sageImage           = "/assets/Sage.png";
const mosaickImage        = "/assets/mosaick2.png";
const stereoRegionImage   = "/assets/stereo_region.png";
const sheepSegmentedImage = "/assets/Sheep_segmented.png";
const portfolioImage      = "/assets/portfolio.png";
const securityExceptionImage = "/assets/security_exception.png";
const biasDetectorImage   = "/assets/bias_detector.png";
const tradingBotImage      = "/assets/trading_bot.png";
const canvasCalendarImage   = "/assets/canvas_calendar.png";
const gotGuessrImage         = "/assets/gotguessr.png";

// ----------------------------- Types ---------------------------------------

type Link = { label: string; href: string };

type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  tech: string[];
  image?: string;
  video?: string;
  year?: number;
  complexity?: number;
  links: Link[];
};

// ------------------------ Project Data -------------------------------------

const PROJECTS: Project[] = [
  {
    id: "security-exception-system",
    title: "Automated Security Exception Risk Assessment System",
    subtitle: "React · Python · Gemini API · Pinecone",
    description:
      "AI-assisted security policy exception request system for UD Information Technology, featuring a guided chatbot interface and deterministic risk assessment engine with LLM-enhanced analysis",
    highlights: [
      "Led team as Scrum leader through full development lifecycle",
      "Implemented RAG system with Pinecone vector database for policy retrieval and semantic search",
      "Built deterministic risk scoring engine — LLMs generate narratives only, not risk decisions",
      "Developed dual-interface system: user-facing chatbot and internal decision support tool",
      "Achieved 300× faster policy lookups through local embedding caching",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Python", "Gemini Pro API", "Pinecone", "TDX API"],
    image: securityExceptionImage,
    year: 2025, complexity: 5,
    links: [{ label: "GitHub", href: "https://github.com/Tommy-Parisi/ExemptionRequestClassifier" }],
  },
  {                                                                                                                                                    
  id: "polymarket-trading-bot",                                                                                                                      
  title: "Kalshi Prediction Market Trading Bot",                                                                                                     
  subtitle: "Rust · Kalshi API · Claude AI · ML Models",                                                                                             
  description:                                                                                                                                       
      "Built an automated trading system for Kalshi event contracts that combines real-time market scanning, AI-assisted valuation, and a              self-improving machine learning pipeline. The bot operates live with strict risk controls while simultaneously collecting data to train and refine its own forecast and execution models.",                                                                                                             
  highlights: [                                                                                                                                      
      "Scans Kalshi prediction markets via REST and WebSocket APIs, enriching signals with weather, sports, and crypto sentiment data",                
      "Integrates Claude AI (Haiku) for market valuation, falling back to heuristics when AI is unavailable",                                          
      "Implements Kelly-inspired capital allocation with bankroll caps, daily loss limits, and open exposure guards",                                  
      "Trains forecast and execution models from captured trade lifecycle data with strict data provenance (paper vs. live)",                          
      "Supports shadow-mode policy evaluation — models run in parallel without controlling execution until validated",                                 
      "Dual execution modes (live and paper simulator) enable safe iteration without risking capital",                                                 
  ],                                                                                                                                                 
  tech: ["Rust", "Tokio", "Kalshi API", "Claude AI", "WebSocket", "JSONL", "RSA", "NOAA API"],                                                       
  image: tradingBotImage,                                                                                                                            
  year: 2026,                                                                                                                                        
  complexity: 5,                                                                                                                                     
  links: [{label: "GitHub", href: "https://github.com/Tommy-Parisi/PolymarketTradingBot"}],                                                                                                                                         
  },        
  {
    id: "bias-detector",
    title: "BiasDetector — Media Bias Analysis Engine",
    subtitle: "C++17 · CMake · NLP",
    description:
      "Production-grade C++ system that detects and quantifies media bias in news articles using 4 independent statistical signals aggregated through weighted ensemble methods",
    highlights: [
      "Architected using SOLID principles with Strategy pattern for pluggable bias detection signals",
      "Built complete NLP pipeline: tokenization, sentence splitting, NER, and sentiment analysis",
      "Implemented 4 bias signals: outlet reputation, entity sentiment, policy framing, emotional intensity",
      "Developed algorithmic confidence scoring based on signal agreement and data quantity",
      "Produces interpretable -1.0 to +1.0 bias scores with per-signal explanations",
      "~1,200 lines of modular, testable C++17 demonstrating clean architecture principles",
    ],
    tech: ["C++17", "CMake", "NLP", "Design Patterns"],
    image: biasDetectorImage,
    year: 2025, complexity: 5,
    links: [{ label: "GitHub", href: "https://github.com/Tommy-Parisi/bias-detector" }],
  },
  {
    id: "filesort",
    title: "FileSort — Semantic File Organizer",
    subtitle: "Svelte + Tauri UI · Python backend",
    description:
      "Backend functionality that embeds documents, clusters by topic (HDBSCAN), and auto‑creates labeled folders. In progress of building a clean cross‑platform UI.",
    highlights: [
      "Automatically organizes files by content, not name or filetype",
      "Semantic grouping via sentence transformers + cosine similarity",
      "Robust backend with solid code coverage, in progress UI",
      "HDBSCAN with sticky clusters + human‑in‑the‑loop labeling",
    ],
    tech: ["Python", "Svelte", "Tauri", "HDBSCAN", "Embeddings", "TypeScript"],
    image: smartSortImage,
    year: 2025, complexity: 5,
    links: [{ label: "GitHub", href: "https://github.com/Tommy-Parisi/FileSorter" }],
  },
  {
    id: "captcha-automation-research",
    title: "CAPTCHA Automation & Robustness Research",
    subtitle: "Automated puzzle-based CAPTCHA analysis and interaction",
    description:
      "Remote research project with VIVID Cybersecurity Research through the University of Alabama in Huntsville studying automated detection and interaction with image-based puzzle-style CAPTCHAs.",
    highlights: [
      "Worked closely with faculty advisors to define research goals, experimental design, and ethical considerations",
      "Created a testbed to evaluate CAPTCHA detection and interaction",
      "Developed an end-to-end pipeline using YOLO-based object detection and classical CV techniques",
      "Automated browser interaction using Selenium and PyAutoGUI to simulate realistic user flows",
      "Evaluated robustness across varied datasets, identifying key failure modes and mitigations",
    ],
    tech: ["Python", "YOLO11n", "OpenCV", "Tesseract OCR", "Selenium", "PyAutoGUI", "Computer Vision", "CNN"],
    image: captchaImage,
    year: 2025, complexity: 4,
    links: [{ label: "GitHub", href: "https://github.com/Tommy-Parisi/CaptchaCracker" }],
  },
  {
    id: "home-server",
    title: "Self-Hosted Home Server",
    subtitle: "Ubuntu · Tailscale · Docker · Jellyfin",
    description:
      "Built and maintain a self-hosted home server for secure web hosting, media services, and remote development. Hardened access controls and network security ensure reliable operation.",
    highlights: [
      "Deployed and host personal portfolio website with a custom domain",
      "Configured Tailscale VPN for encrypted offsite SSH access",
      "Hardened security using UFW, non-standard SSH ports, and key-based authentication",
      "Deployed containerized Jellyfin media server with Docker",
      "Maintain reliability through regular updates, monitoring, and uptime checks",
    ],
    tech: ["Linux", "Ubuntu", "Tailscale", "SSH", "UFW", "Docker", "Jellyfin", "Nginx"],
    image: serverImage,
    year: 2025, complexity: 3,
    links: [],
  },
  {
  id: "gotguessr",
  title: "GotGuessr",
  subtitle: "React Native · TypeScript · Expo",
  description:
    "A Game of Thrones-themed GeoGuessr-style game built as a React Native Web app. Players identify real-world filming locations from photos, then place their guess on a clickable SVG world map — no native build required.",
  highlights: [
    "Built with React Native Web and Expo, running entirely in the browser with zero native build needed",
    "Embedded Westeros world map with click-to-guess interaction and lat/lng coordinate projection",
    "Haversine distance formula for accurate guess scoring across a 0–25,000 point scale",
    "Phase-based game state managed in a single custom hook with no external state libraries",
    "Image carousel for browsing location photos with prev/next navigation",
  ],
  tech: ["React Native", "TypeScript", "Expo", "SVG", "HTML"],
  image: gotGuessrImage,
  year: 2025,
  complexity: 2,
  links: [{ label: "GitHub", href: "https://github.com/Tommy-Parisi/GotGuessr" }],
  },

  {
    id: "swapborn",
    title: "Swapborn — Death‑Swap Puzzle Platformer",
    subtitle: "Godot 4 · GDScript",
    description:
      "2D puzzle‑platformer where dying swaps control into the nearest NPC. Designed levels around timing and spatial reasoning; implemented AI pathing and state.",
    highlights: [
      "Core mechanic: death‑swap control of nearest NPC",
      "Implemented NPC pathfinding",
      "Built in Godot 4 with GDScript",
    ],
    tech: ["Godot", "GDScript", "Pathfinding", "Game Design"],
    image: swapbornImage,
    year: 2025, complexity: 4,
    links: [{ label: "GitHub", href: "https://github.com/Tommy-Parisi/swapborn" }],
  },
  {
    id: "discord-bot",
    title: "Sage UD CS Discord Bot",
    subtitle: "Node.js · TypeScript",
    description:
      "Discord bot that handles onboarding, scheduling, and information dissemination for the University of Delaware Computer Science Department.",
    highlights: [
      "Worked in a team setting developing commands",
      "Built and tested a /calendar command",
      "Implemented Google Calendar API and Google Auth",
      "Utilized by the UD CS Department of 4000+ students",
    ],
    tech: ["Node.js", "TypeScript", "Discord.js", "Google Calendar API"],
    image: sageImage,
    year: 2024, complexity: 4,
    links: [],
  },
  {
  id: "calendar-userscript",
  title: "Canvas Calendar Tools",
  subtitle: "UserScript · Canvas API · FullCalendar",
  description:
    "A UserScript that extends Canvas LMS's calendar with a Daily View and a bulk course scheduler. Built for the University of Delaware, it lets students populate a full semester of recurring class meetings in seconds and see today's schedule with a live now indicator.",
  highlights: [
    "Injected a Day view button with a real-time now indicator updated every minute",
    "Built a Schedule Course Times dialog with MWF/TTh presets and custom day/duration options",
    "Created recurring events via Canvas Calendar API using iCalendar RRULE format with timezone-aware ISO 8601 datetimes",
    "Implemented graceful fallback: if recurring event creation fails (422), generates individual events per date",
    "Handled CSRF token acquisition across meta tags, window.ENV, and cookies for broad Canvas compatibility",
    "Used MutationObserver for reliable button injection into Canvas's dynamically rendered toolbar",
  ],
  tech: ["JavaScript", "UserScript", "Canvas API", "jQuery", "FullCalendar"],
  image: canvasCalendarImage,
  year: 2025,
  complexity: 3,
  links: [{ label: "GitHub", href: "https://github.com/Tommy-Parisi/more-canvas-tools"}],
  },
  {
    id: "gaussian-laplacian-mosaicking",
    title: "Multi-Scale Image Pyramids & Mosaicking",
    subtitle: "Blending images with Gaussian & Laplacian pyramids",
    description:
      "Built a modular computer vision pipeline implementing Gaussian/Laplacian image pyramids for seamless multi-scale image blending and mosaicking.",
    highlights: [
      "Implemented custom convolution, reduction/expansion, and pyramid operations from scratch",
      "Reconstructed images from Laplacian pyramids with low error",
      "Blended multiple images seamlessly using pyramid-based mosaicking",
    ],
    tech: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    image: mosaickImage,
    year: 2025, complexity: 4,
    links: [],
  },
  {
    id: "stereo-analysis-system",
    title: "Stereo Analysis System",
    subtitle: "Region- and Feature-Based Disparity Estimation",
    description:
      "Built a stereo vision system implementing both region-based and feature-based methods to estimate disparity maps between stereo image pairs.",
    highlights: [
      "Implemented region-based stereo matching with SAD, SSD, and NCC scoring",
      "Developed feature-based matching using Harris corner detection and descriptors",
      "Applied left-right consistency checks and interpolation to handle occlusions",
    ],
    tech: ["Python", "OpenCV", "NumPy", "Computer Vision", "Stereo Vision"],
    image: stereoRegionImage,
    year: 2025, complexity: 5,
    links: [],
  },
  {
    id: "deep-learning-vision",
    title: "Deep Learning for Image Classification & Segmentation",
    subtitle: "VGG16 fine-tuning, custom CNN, and semantic segmentation",
    description:
      "Implemented multiple deep learning pipelines in PyTorch for image understanding tasks including transfer learning, custom CNN design, and semantic segmentation.",
    highlights: [
      "Fine-tuned pretrained VGG16 on CIFAR-100, achieving high classification accuracy",
      "Designed and trained a custom CNN architecture from scratch",
      "Applied FCN-based semantic segmentation to detect and label objects across 21 classes",
    ],
    tech: ["Python", "PyTorch", "CNN", "Transfer Learning", "FCN", "Computer Vision", "Deep Learning"],
    image: sheepSegmentedImage,
    year: 2025, complexity: 5,
    links: [],
  },
  {
    id: "portfolio-website",
    title: "Self-Hosted Portfolio Website",
    subtitle: "React · Vite · TypeScript",
    description:
      "Developed and deployed a personal portfolio website from scratch. Fully responsive, self-hosted on a personal Ubuntu server with a custom domain.",
    highlights: [
      "Built with React, Vite, and TypeScript",
      "Responsive design for desktop and mobile",
      "Self-hosted with Nginx, custom domain, and secure access",
      "Glassmorphism redesign with DM Sans typography and animated components",
    ],
    tech: ["React", "TypeScript", "Vite", "CSS", "Nginx"],
    image: portfolioImage,
    year: 2025, complexity: 2,
    links: [],
  },
];

// ----------------------------- Utilities -----------------------------------

const allTags = Array.from(new Set(PROJECTS.flatMap(p => p.tech))).sort();

// ----------------------------- Page component ------------------------------

const ProjectsPage: React.FC<{ onNavbarToggle?: { hide: () => void; show: () => void } }> = ({ onNavbarToggle }) => {
  const [query, setQuery]           = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortKey, setSortKey]       = useState<"Newest" | "Complexity">("Newest");
  const [activeId, setActiveId]     = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = PROJECTS.filter(p => {
      const matchesQuery = q
        ? p.title.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.join(" ").toLowerCase().includes(q)
        : true;
      const matchesTags =
        selectedTags.length === 0 || selectedTags.every(t => p.tech.includes(t));
      return matchesQuery && matchesTags;
    });
    return list.sort((a, b) =>
      sortKey === "Newest"
        ? (b.year ?? 0) - (a.year ?? 0)
        : (b.complexity ?? 0) - (a.complexity ?? 0)
    );
  }, [query, selectedTags, sortKey]);

  const active =
    filtered.find(p => p.id === activeId) ||
    PROJECTS.find(p => p.id === activeId) ||
    null;

  const toggleTag = (tag: string) =>
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );

  const openModal = (id: string) => { setActiveId(id); onNavbarToggle?.hide(); };
  const closeModal = () => { setActiveId(null); onNavbarToggle?.show(); };

  return (
    <div className="p-root">
      {/* Header */}
      <header className="p-header">
        <h2 className="p-title">Projects</h2>
        <p className="p-subtitle">
          A curated selection of projects built in class, through research, and on my own —
          end‑to‑end with a focus on impact, reliability, and craft.
        </p>
      </header>

      {/* Controls */}
      <section className="p-controls" aria-label="project controls">
        <input
          className="p-search"
          aria-label="Search projects"
          placeholder="Search by title, tech, or description…"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <select
          className="p-sort"
          value={sortKey}
          onChange={e => setSortKey(e.target.value as "Newest" | "Complexity")}
          aria-label="Sort projects"
        >
          <option>Newest</option>
          <option>Complexity</option>
        </select>
      </section>

      {/* Tag filters */}
      <section className="p-tags" aria-label="filter by technology">
        {allTags.map(tag => (
          <button
            key={tag}
            className={`p-tag ${selectedTags.includes(tag) ? "p-tag--active" : ""}`}
            onClick={() => toggleTag(tag)}
            aria-pressed={selectedTags.includes(tag)}
          >
            {tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button className="p-tag p-tag--clear" onClick={() => setSelectedTags([])}>
            Clear filters
          </button>
        )}
      </section>

      {/* Grid */}
      <section className="p-grid" aria-label="projects list">
        {filtered.map((p, i) => (
          <ProjectCard
            key={p.id}
            p={p}
            index={i}
            onOpen={() => openModal(p.id)}
          />
        ))}
        {filtered.length === 0 && (
          <div className="p-empty" role="status">
            No matching projects. Try removing filters or changing your search.
          </div>
        )}
      </section>

      <p className="p-footnote">
        Click a card for highlights, media, and links.
      </p>

      {active && <ProjectModal project={active} onClose={closeModal} />}

      <style>{styles}</style>
    </div>
  );
};

// ----------------------------- Card ----------------------------------------

const ProjectCard: React.FC<{ p: Project; index: number; onOpen: () => void }> = ({ p, index, onOpen }) => (
  <article
    className="pc"
    tabIndex={0}
    onClick={onOpen}
    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(); } }}
    aria-label={`${p.title} — open details`}
    style={{ animationDelay: `${index * 60}ms` }}
  >
    <div className="pc-media">
      {p.image
        ? <img src={p.image} alt="" loading="lazy" />
        : <div className="pc-media-placeholder" aria-hidden />}
    </div>
    <div className="pc-body">
      <h3 className="pc-title">{p.title}</h3>
      {p.subtitle && <p className="pc-sub">{p.subtitle}</p>}
      <p className="pc-desc">{p.description}</p>
      <div className="pc-chips">
        {p.tech.slice(0, 4).map(t => (
          <span className="chip" key={t}>{t}</span>
        ))}
        {p.tech.length > 4 && (
          <span className="chip chip--more">+{p.tech.length - 4}</span>
        )}
      </div>
      {p.links.length > 0 && (
        <div className="pc-links" onClick={e => e.stopPropagation()}>
          {p.links.map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn-ghost">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </article>
);

// ----------------------------- Modal ---------------------------------------

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const dots = project.complexity ? Array.from({ length: 5 }, (_, i) => i < project.complexity!) : [];

  return (
    <div
      className="pm-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      onClick={onClose}
    >
      <div className="pm" onClick={e => e.stopPropagation()}>

        {/* Left: visual panel */}
        <div className="pm-visual">
          {project.video
            ? <video src={project.video} controls preload="none" className="pm-visual-media" />
            : project.image
              ? <img src={project.image} alt="Project preview" className="pm-visual-media" />
              : <div className="pm-visual-placeholder" />}
          <div className="pm-visual-gradient" />

          {/* Overlaid title on the image */}
          <div className="pm-visual-caption">
            <h2 className="pm-title">{project.title}</h2>
            {project.subtitle && <p className="pm-sub">{project.subtitle}</p>}
          </div>

          <button className="pm-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Right: scrollable content */}
        <div className="pm-body">
          {/* Meta row */}
          <div className="pm-meta">
            {project.year && <span className="pm-badge">{project.year}</span>}
            {dots.length > 0 && (
              <div className="pm-complexity" aria-label={`Complexity: ${project.complexity} of 5`}>
                {dots.map((filled, i) => (
                  <span key={i} className={`pm-dot ${filled ? 'pm-dot--on' : 'pm-dot--off'}`} />
                ))}
              </div>
            )}
          </div>

          <p className="pm-desc">{project.description}</p>

          <section>
            <h4 className="pm-section-label">Highlights</h4>
            <ul className="pm-list">
              {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </section>

          <section>
            <h4 className="pm-section-label">Tech Stack</h4>
            <div className="pm-chips">
              {project.tech.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </section>

          {project.links.length > 0 && (
            <div className="pm-links">
              {project.links.map(l => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn-solid">
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ----------------------------- Styles --------------------------------------

const styles = `
.p-root {
  color: var(--text, #e8ecf2);
  min-height: 100vh;
  padding: 0 0 4rem;
}

.p-header {
  max-width: 1500px;
  margin: 0 auto;
  padding: 3.5rem 2rem 1rem;
}

.p-title {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: #e8ecf2;
}

.p-subtitle {
  color: #6b7280;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 1rem;
  margin: 0;
  max-width: 600px;
}

/* Controls */
.p-controls {
  max-width: 1500px;
  margin: 1.5rem auto 0;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 0 2rem;
}

.p-search {
  flex: 1;
  padding: 12px 16px;
  border-radius: var(--radius-sm, 8px);
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: #e8ecf2;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.p-search::placeholder { color: #6b7280; }

.p-search:focus {
  border-color: rgba(99,179,255,0.45);
  box-shadow: 0 0 0 3px rgba(99,179,255,0.1);
}

.p-sort {
  padding: 12px 14px;
  border-radius: var(--radius-sm, 8px);
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: #e8ecf2;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s;
}

.p-sort:focus { border-color: rgba(99,179,255,0.45); }

/* Tags */
.p-tags {
  max-width: 1500px;
  margin: 1rem auto 0;
  padding: 0 2rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.p-tag {
  background: rgba(255,255,255,0.04);
  color: #9aa3b2;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 12px;
  font-family: 'DM Mono', monospace;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.1s, color 0.15s;
}

.p-tag:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(255,255,255,0.14);
  transform: translateY(-1px);
  color: #e8ecf2;
}

.p-tag--active {
  background: rgba(99,179,255,0.15);
  border-color: rgba(99,179,255,0.40);
  color: #63b3ff;
}

.p-tag--active:hover {
  background: rgba(99,179,255,0.22);
  color: #63b3ff;
}

.p-tag--clear {
  background: rgba(255,100,100,0.08);
  border-color: rgba(255,100,100,0.2);
  color: #ff9999;
}

.p-tag--clear:hover {
  background: rgba(255,100,100,0.14);
  border-color: rgba(255,100,100,0.35);
  color: #ff9999;
}

/* Grid */
.p-grid {
  max-width: 1500px;
  margin: 1.5rem auto 0;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

/* Card */
.pc {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  outline: none;
  transition: background 0.2s, border-color 0.2s, transform 0.22s, box-shadow 0.22s;
  animation: cardEnter 0.4s ease-out both;
}

.pc:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(99,179,255,0.30);
  transform: translateY(-4px);
  box-shadow: 0 0 0 1px rgba(99,179,255,0.12), 0 12px 36px rgba(0,0,0,0.70);
}

.pc:focus-visible {
  border-color: rgba(99,179,255,0.5);
  box-shadow: 0 0 0 3px rgba(99,179,255,0.2);
}

@keyframes cardEnter {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.pc-media {
  aspect-ratio: 16/9;
  background: #0c1017;
  overflow: hidden;
}

.pc-media img, .pc-media video {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.pc:hover .pc-media img { transform: scale(1.03); }

.pc-media-placeholder {
  width: 100%; height: 100%;
  background: repeating-linear-gradient(
    45deg, #0d1118, #0d1118 10px, #0b0e14 10px, #0b0e14 20px
  );
}

.pc-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.pc-title {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #e8ecf2;
  margin: 0;
  line-height: 1.3;
}

.pc-sub {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #6b7280;
  margin: 0;
}

.pc-desc {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.875rem;
  color: rgba(232,236,242,0.65);
  line-height: 1.5;
  margin: 0;
}

.pc-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
}

.chip--more { opacity: 0.65; }

.pc-links {
  display: flex;
  gap: 8px;
  margin-top: 4px;
}

/* Empty */
.p-empty {
  grid-column: 1 / -1;
  padding: 2rem;
  border: 1px dashed rgba(255,255,255,0.1);
  border-radius: 12px;
  color: #6b7280;
  text-align: center;
  font-family: 'DM Sans', system-ui, sans-serif;
}

/* Footnote */
.p-footnote {
  max-width: 1500px;
  margin: 1rem auto 0;
  padding: 0 2rem;
  color: #374151;
  font-size: 0.85rem;
  font-family: 'DM Sans', system-ui, sans-serif;
}

/* Modal overlay */
.pm-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.80);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: grid;
  place-items: center;
  padding: 1.5rem;
  z-index: 2000;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* Modal panel — side-by-side on desktop */
.pm {
  width: min(960px, 95vw);
  max-height: 88vh;
  display: grid;
  grid-template-columns: 42% 1fr;
  background: rgba(8,10,15,0.97);
  backdrop-filter: blur(32px) saturate(180%);
  -webkit-backdrop-filter: blur(32px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 24px;
  box-shadow: 0 32px 100px rgba(0,0,0,0.95), 0 0 0 1px rgba(99,179,255,0.07);
  overflow: hidden;
  animation: modalEnter 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes modalEnter {
  from { opacity: 0; transform: scale(0.96) translateY(12px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

/* Left visual panel */
.pm-visual {
  position: relative;
  overflow: hidden;
  background: #060810;
}

.pm-visual-media {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}

.pm-visual-placeholder {
  width: 100%; height: 100%;
  background: repeating-linear-gradient(
    45deg, #0d1118, #0d1118 10px, #0b0e14 10px, #0b0e14 20px
  );
}

/* Gradient that fades the image into the caption */
.pm-visual-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.15) 0%,
    rgba(0,0,0,0.02) 40%,
    rgba(6,8,16,0.75) 72%,
    rgba(6,8,16,0.97) 100%
  );
}

/* Title/subtitle overlaid on image bottom */
.pm-visual-caption {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 1.25rem 1.5rem 1.5rem;
}

.pm-title {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(1rem, 2.2vw, 1.35rem);
  font-weight: 700;
  color: #e8ecf2;
  margin: 0 0 4px;
  line-height: 1.25;
  text-shadow: 0 1px 8px rgba(0,0,0,0.8);
}

.pm-sub {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: rgba(99,179,255,0.8);
  margin: 0;
}

/* Close button — top-left of visual */
.pm-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0,0,0,0.55);
  border: 1px solid rgba(255,255,255,0.12);
  color: #9aa3b2;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.8rem;
  line-height: 1;
  transition: background 0.18s, color 0.18s;
  z-index: 2;
  backdrop-filter: blur(6px);
}

.pm-close:hover {
  background: rgba(255,255,255,0.10);
  color: #e8ecf2;
}

/* Right scrollable body */
.pm-body {
  overflow-y: auto;
  padding: 1.75rem 1.75rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.pm-body::-webkit-scrollbar { width: 4px; }
.pm-body::-webkit-scrollbar-track { background: transparent; }
.pm-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }

/* Meta row: year badge + complexity dots */
.pm-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pm-badge {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  color: #63b3ff;
  background: rgba(99,179,255,0.10);
  border: 1px solid rgba(99,179,255,0.20);
  border-radius: 6px;
  padding: 3px 9px;
}

.pm-complexity {
  display: flex;
  gap: 4px;
  align-items: center;
}

.pm-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: inline-block;
}

.pm-dot--on  { background: #63b3ff; box-shadow: 0 0 4px rgba(99,179,255,0.5); }
.pm-dot--off { background: rgba(255,255,255,0.12); }

/* Description */
.pm-desc {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.9rem;
  color: rgba(232,236,242,0.65);
  line-height: 1.65;
  margin: 0;
}

.pm-section-label {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #6b7280;
  margin: 0 0 0.6rem;
}

.pm-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pm-list li {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: 0.875rem;
  color: rgba(232,236,242,0.80);
  line-height: 1.5;
  padding-left: 1rem;
  position: relative;
}

.pm-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(99,179,255,0.6);
}

.pm-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.pm-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding-top: 0.25rem;
}

/* Mobile: stack vertically */
@media (max-width: 680px) {
  .p-controls { flex-direction: column; align-items: stretch; }
  .p-grid { grid-template-columns: 1fr; padding: 0 1rem; }
  .p-header, .p-controls, .p-tags, .p-footnote { padding-left: 1rem; padding-right: 1rem; }

  .pm {
    grid-template-columns: 1fr;
    grid-template-rows: 220px 1fr;
    max-height: 92vh;
    border-radius: 18px;
  }
  .pm-visual { border-radius: 0; }
  .pm-body { padding: 1.25rem 1.25rem 1.75rem; }
}
`;

export default ProjectsPage;