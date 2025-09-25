import React, { useMemo, useState } from "react";
// ----------------------------- Types ---------------------------------------

type Link = {
  label: "Live" | "GitHub" | "Case Study" | string;
  href: string;
};

type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[]; // bullet points that recruiters care about
  tech: string[]; // tags
  image?: string; // cover image (optional)
  video?: string; // mp4/webm (optional)
  year?: number;
  complexity?: number; // 1..5 rough scale for sorting
  links: Link[];
};

// ------------------------ Project Data ---------------------------

const PROJECTS: Project[] = [
  // Full-Stack Personal Projects 
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
    image:
      "/src/assets/SmartSort.png",
    year: 2025,
    complexity: 5,
    links: [
      //{ label: "Demo", href: "https://yt" }, //use youtube video showing functionality -----
      { label: "GitHub", href: "https://github.com/Tommy-Parisi/FileSorter" },
    ],
  },
  {
    id: "captcha-automation-research",
    title: "CAPTCHA Automation & Robustness Research",
    subtitle: "Automated puzzle-based CAPTCHA analysis and interaction",
    description: "Remote research project with VIVID Cybersecurity Research through the University of Alabama in Huntsville studying automated detection and interaction with image-based puzzle-style CAPTCHAs.",
    highlights: [
      "Worked closeley with faculty advisors to define research goals, experimental design, and ethical considerations",
      "Created a testbed to evaluate CAPTCHA detection and interaction",
      "Developed an end-to-end experimental pipeline for detecting puzzle tiles and UI targets using YOLO-based object detection and classical CV techniques",
      "Automated browser interaction and test orchestration using Selenium and PyAutoGUI to simulate realistic user flows in controlled experiments",
      "Evaluated detection and interaction robustness across varied datasets and environmental conditions, identifying key failure modes and practical mitigations",
    ],
    tech: ["Python", "YOLO11n", "OpenCV", "Tesseract OCR", "Selenium", "PyAutoGUI", "Computer Vision", "Experimental Evaluation", "CNN"],
    image: "/src/assets/captcha.png",
    year: 2025,
    complexity: 4,
    links: [
      { "label": "GitHub", "href": "https://github.com/Tommy-Parisi/CaptchaCracker" },
    ]
  },
  {
    id: "home-server",
    title: "Self-Hosted Home Server",
    subtitle: "Personal Ubuntu server for web hosting, media, and secure remote access",
    description: "Built and maintain a self-hosted home server that provides secure hosting for personal projects and media services. Configured for resilience, security, and flexibility, the system supports my portfolio website, a Dockerized Jellyfin media server, and remote development access through a VPN. Hardened access controls and network security ensure reliable operation both locally and offsite.",
    highlights: [
      "Deployed and host personal portfolio website on the server with a custom domain",
      "Configured Tailscale VPN for encrypted offsite SSH access and private network connectivity",
      "Hardened system security using UFW firewall non-standard SSH ports, and key-based authentication",
      "Implemented containerized Jellyfin media server with Docker for streaming and media management",
      "Maintain system reliability through regular updates, resource monitoring, and service uptime checks"
    ],
    tech: ["Linux", "Ubuntu", "Tailscale", "SSH", "UFW", "Docker", "Jellyfin", "Web Hosting", "System Administration", "Domain Configuration", "Nginx"],
    image: "/src/assets/server.png",
    year: 2025,
    complexity: 3,
    links: [
    ]
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
    image:
      "/src/assets/SwapBorn.png",
    year: 2025,
    complexity: 4,
    links: [
      { label: "GitHub", "href": "https://GitHub.com/Tommy-Parisi/swapborn" },
    ],
  },
  // Sage
  {
    id: "discord-bot",
    title: "Sage UD CS Discord Bot",
    subtitle: "Node.js · TypeScript",
    description:
      "Discord bot that handles onboarding, scheduling, information dissemination, for the Univsersity of Delaware Computer Science Department",
    highlights: [
      "Worked in a team setting developing commands",
      "Built and tested a /calendar command",
      "Implemented Google Calendar API and Google Auth",
      "Utilized by the UD CS Department of 4000+ students",
    ],
    tech: ["Node.js", "TypeScript", "Discord.js", "Google Calendar API"],
    image:
      "src/assets/Sage.png",
    year: 2024,
    complexity: 4,
    links: [
    ],
  },
  // Computer Vision Projects
  {
    id: "gaussian-laplacian-mosaicking",
    title: "Multi-Scale Image Pyramids & Mosaicking",
    subtitle: "Blending images with Gaussian & Laplacian pyramids",
    description: "Built a modular computer vision pipeline that implements Gaussian/Laplacian image pyramids and uses them for seamless multi-scale image blending and mosaicking.",
    highlights: [
      "Implemented custom convolution, reduction/expansion, and pyramid operations from scratch",
      "Reconstructed images from Laplacian pyramids with low error",
      "Blended multiple images seamlessly using pyramid-based mosaicking"
    ],
    tech: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    image: "/src/assets/mosaick2.png",
    year: 2025,
    complexity: 4,
    links: [
      // { label: "Source Code", href: "PR1.zip" }, some sort of report or images
    ]
  },
  {
    id: "stereo-analysis-system",
    title: "Stereo Analysis System",
    subtitle: "Region- and Feature-Based Disparity Estimation",
    description: "Built a stereo vision system implementing both region-based and feature-based methods to estimate disparity maps between stereo image pairs. Applied validity checks and interpolation techniques to handle occlusions and improve accuracy.",
    highlights: [
      "Implemented region-based stereo matching with SAD, SSD, and NCC scoring",
      "Developed feature-based matching using Harris corner detection and descriptors",
      "Applied left-right consistency checks and interpolation to handle occlusions and fill disparity gaps"
    ],
    tech: ["Python", "OpenCV", "NumPy", "Computer Vision", "Stereo Vision"],
    image: "/src/assets/stereo_region.png", 
    year: 2025,
    complexity: 5,
    links: [
      //{ label: "README", href: "README.md" } some sort of report 
    ],
  },
  {
    id: "deep-learning-vision",
    title: "Deep Learning for Image Classification & Segmentation",
    subtitle: "VGG16 fine-tuning, custom CNN, and semantic segmentation",
    description: "Implemented multiple deep learning pipelines in PyTorch for image understanding tasks. This included transfer learning with VGG16, designing a custom convolutional neural network from scratch, and applying fully convolutional networks (FCN) for semantic segmentation on multi-object images.",
    highlights: [
      "Fine-tuned pretrained VGG16 on CIFAR-100 dataset, achieving high classification accuracy",
      "Designed and trained a custom CNN architecture from scratch with multiple convolutional and pooling layers",
      "Applied FCN-based semantic segmentation (fcn_resnet50/fcn_resnet101) to detect and label objects across 21 classes"
    ],
    tech: ["Python", "PyTorch", "CNN", "Transfer Learning", "FCN", "Computer Vision", "Deep Learning"],
    image: "/src/assets/Sheep_segmented.png",
    year: 2025,
    complexity: 5,
    links: [
      //{ label: "Image Classification", href: "ImageClassification.ipynb" },
      //{ label: "Custom CNN", href: "customCNN.ipynb" },
      //{ label: "Semantic Segmentation", href: "SemanticSegmentation.ipynb" }
    ],
},
{
  id: "portfolio-website",
  title: "Self-Hosted Portfolio Website",
  subtitle: "Personal portfolio built with HTML & CSS",
  description: "Developed and deployed a personal portfolio website from scratch using HTML5 and CSS3. The site is fully responsive, self-hosted on a personal server, and designed to showcase projects, resume, and contact information in a clean, professional layout.",
  highlights: [
    "Implemented responsive design principles for seamless viewing across desktop and mobile devices",
    "Applied semantic HTML and modular CSS for accessibility and maintainability",
    "Configured self-hosted server and custom domain to ensure site availability and secure access",
    "Showcases technical projects, work experience, and resume in a professional format"
  ],
  tech: ["HTML5", "CSS3", "Responsive Design", "Web Hosting", "Domain Configuration"],
  image: "/src/assets/portfolio.png", // replace with a screenshot of your site
  year: 2025,
  complexity: 2,
  links: [
    //{ label: "Source Code", href: "https://github.com/Tommy-Parisi/Portfolio" }
  ]
}





];

// ------------------------ Utilities ----------------------------------------

const allTags = Array.from(new Set(PROJECTS.flatMap(p => p.tech))).sort();

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// ------------------------ Components ---------------------------------------

const ProjectsPage: React.FC<{ onNavbarToggle?: { hide: () => void; show: () => void } }> = ({ onNavbarToggle }) => {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<"Newest" | "Complexity">(
    "Newest"
  );
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = PROJECTS.filter(p => {
      const matchesQuery = q
        ? (
            p.title.toLowerCase().includes(q) ||
            p.subtitle?.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.tech.join(" ").toLowerCase().includes(q)
          )
        : true;
      const matchesTags =
        selectedTags.length === 0 || selectedTags.every(t => p.tech.includes(t));
      return matchesQuery && matchesTags;
    });

    list = list.sort((a, b) => {
      if (sortKey === "Newest") return (b.year ?? 0) - (a.year ?? 0);
      return (b.complexity ?? 0) - (a.complexity ?? 0);
    });

    return list;
  }, [query, selectedTags, sortKey]);

  const active = filtered.find(p => p.id === activeId) || PROJECTS.find(p => p.id === activeId) || null;

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="projects-root">
      <Header />

      <section className="controls" aria-label="project controls">
        <div className="search">
          <input
            aria-label="Search projects"
            placeholder="Search by title, tech, or description…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <div className="sort">
          <label htmlFor="sort" className="sr-only">Sort</label>
          <select
            id="sort"
            value={sortKey}
            onChange={e => setSortKey(e.target.value as "Newest" | "Complexity")}
            aria-label="Sort projects"
          >
            <option>Newest</option>
            <option>Complexity</option>
          </select>
        </div>
      </section>

      <section className="tags" aria-label="filter by technology">
        {allTags.map(tag => (
          <button
            key={tag}
            className={cx("tag", selectedTags.includes(tag) && "tag--active")}
            onClick={() => toggleTag(tag)}
            aria-pressed={selectedTags.includes(tag)}
          >
            {tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button className="tag tag--clear" onClick={() => setSelectedTags([])}>
            Clear filters
          </button>
        )}
      </section>

      <section className="grid" aria-label="projects list">
        {filtered.map(p => (
          <ProjectCard key={p.id} p={p} onOpen={() => { setActiveId(p.id); onNavbarToggle?.hide(); }} />
        ))}
        {filtered.length === 0 && (
          <div className="empty" role="status">
            No matching projects. Try removing filters or changing your search.
          </div>
        )}
      </section>

      <footer className="footnote">
        <span>
          Tip: Click a card for highlights, media, and a one‑minute scan‑ready view.
        </span>
      </footer>

      {active && (
        <ProjectModal project={active} onClose={() => { setActiveId(null); onNavbarToggle?.show(); }} />
      )}

      {/* Inline styles for a self-contained MVP */}
      <style>{styles}</style>
    </div>
  );
};

// ---------------------- Subcomponents --------------------------------------

const Header: React.FC = () => (
  <header className="header">
    <div className="title">
      <h1>Projects</h1>
      <p>
        A curated selection of projects built in class, through internships, and on my own. Built
        end‑to‑end with a focus on product impact, reliability, and craft.
      </p>
    </div>
  </header>
);

const ProjectCard: React.FC<{
  p: Project;
  onOpen: () => void;
}> = ({ p, onOpen }) => {
  return (
    <article className="card" tabIndex={0} onClick={onOpen} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(); } }} aria-label={`${p.title} — open details`}>
      <div className="media">
        {p.image ? (
          <img src={p.image} alt="Project cover" loading="lazy" />
        ) : (
          <div className="media--placeholder" aria-hidden />
        )}
      </div>
      <div className="body">
        <h3 className="card-title">{p.title}</h3>
        {p.subtitle && <p className="muted">{p.subtitle}</p>}
        <p className="desc">{p.description}</p>
        <div className="chips">
          {p.tech.slice(0, 4).map(t => (
            <span className="chip" key={t}>{t}</span>
          ))}
          {p.tech.length > 4 && <span className="chip chip--more">+{p.tech.length - 4}</span>}
        </div>
        <div className="links" onClick={(e) => e.stopPropagation()}>
          {p.links.map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="button button--ghost">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};


const ProjectModal: React.FC<{
  project: Project;
  onClose: () => void;
}> = ({ project, onClose }) => {
  // close on escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // disable scroll on body when modal is open and scroll modal to bottom
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Scroll modal to bottom after it opens
    const modalElement = document.querySelector(".modal");
    if (modalElement) {
      setTimeout(() => {
        modalElement.scrollTo({ top: modalElement.scrollHeight, behavior: "smooth" });
      }, 100); // Small delay to ensure modal is fully rendered
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={`${project.title} details`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-header">
          <h2>{project.title}</h2>
          {project.subtitle && <p className="muted">{project.subtitle}</p>}
        </div>

        <div className="modal-media">
          {project.video ? (
            <video src={project.video} controls preload="none" />
          ) : project.image ? (
            <img src={project.image} alt="Project media" />
          ) : (
            <div className="media--placeholder" />
          )}
        </div>

        <div className="modal-content">
          <section>
            <h4>Impact</h4>
            <ul>
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </section>

          <section>
            <h4>Tech</h4>
            <div className="chips">
              {project.tech.map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </section>

          <section className="modal-links">
            {project.links.map(l => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="button">
                {l.label}
              </a>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

// ------------------------------ Styles -------------------------------------

const styles = `
:root{
  --bg: #0b0d12;
  --surface: #10131a;
  --muted: #9aa3b2;
  --text: #e8ecf2;
  --brand: #63b3ff;
  --ring: #3b82f6;
  --chip: #1b2230;
  --chipText: #c9d4e3;
  --shadow: 0 10px 30px rgba(0,0,0,.4);
  --radius: 16px;
}

*{box-sizing:border-box}

.projects-root{color:var(--text); background: radial-gradient(1000px 600px at 20% -10%, rgba(99,179,255,.08), transparent 60%), radial-gradient(800px 500px at 100% 0%, rgba(99,255,210,.06), transparent 60%), var(--bg); min-height:100vh;}
.header{max-width:1500px;margin:0 auto;padding:64px 24px 16px}
.title h1{font-size:40px;margin:0 0 6px;letter-spacing:.4px}
.title p{color:var(--muted);margin:0;font-size:16px}

.controls{max-width:1500px;margin:24px auto;display:flex;gap:16px;align-items:center;padding:0 24px}
.search{flex:1}
.search input{width:100%;padding:14px 16px;border-radius:12px;background:#0f131b;border:1px solid #1f2430;color:var(--text);outline:none;box-shadow:inset 0 0 0 1px transparent;}
.search input:focus{border-color:var(--ring);box-shadow:0 0 0 4px rgba(59,130,246,.15)}
.sort select{background:#0f131b;border:1px solid #1f2430;color:var(--text);padding:12px 12px;border-radius:12px}
.sr-only{position:absolute;left:-10000px}

.tags{max-width:1500px;margin:0 auto;padding:0 24px 8px;display:flex;flex-wrap:wrap;gap:8px}
.tag{background:var(--chip);color:var(--chipText);border:1px solid #20283a;border-radius:999px;padding:8px 12px;font-size:13px;cursor:pointer;transition:transform .08s ease, background .15s ease;}
.tag:hover{transform:translateY(-1px)}
.tag--active{background:#1f2a44;color:#e6f0ff;border-color:#29406d}
.tag--clear{background:#2b1f20;color:#ffd6d6;border-color:#5a2b2f}

.grid{max-width:1500px;margin:8px auto 48px;padding:0 24px;display:grid;grid-template-columns:repeat(12,1fr);gap:20px}
.card{grid-column:span 12; background:linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.0)); border:1px solid #1b2230;border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);display:flex;flex-direction:column;cursor:pointer;outline:none;transition:transform .15s ease, border-color .2s ease}
.card:focus{border-color:var(--ring); box-shadow:0 0 0 4px rgba(59,130,246,.15), var(--shadow)}
@media(min-width:720px){.card{grid-column:span 8}}
@media(min-width:1024px){.card{grid-column:span 4}}

.media{position:relative;aspect-ratio:16/9;background:#0c1017}
.media img, .media video{width:100%;height:100%;object-fit:cover;display:block}
.media--placeholder{width:100%;height:100%;background:repeating-linear-gradient(45deg,#0f1520,#0f1520 10px,#0d121b 10px,#0d121b 20px)}
.badge{position:absolute;right:12px;top:12px;background:rgba(0,0,0,.55);backdrop-filter: blur(6px); color:#ffd76a;padding:6px 10px;border-radius:999px;border:1px solid rgba(255,215,106,.35);font-weight:600;font-size:12px}

.body{padding:14px 14px 16px;display:flex;flex-direction:column;gap:10px}
.card-title{margin:0;font-size:18px;letter-spacing:.2px}
.muted{color:var(--muted);margin:0}
.desc{margin:4px 0 0;color:#c7cfdb;line-height:1.45}
.chips{display:flex;flex-wrap:wrap;gap:6px}
.chip{background:#121926;color:#c7d2e6;border:1px solid #1c2333;border-radius:8px;padding:4px 8px;font-size:12px}
.chip--more{opacity:.8}
.links{display:flex;flex-wrap:wrap;gap:8px;margin-top:4px}
.button{background:linear-gradient(180deg,#2b63d9,#1b4ab8); border:1px solid #2f55c8; color:white; padding:10px 12px; border-radius:10px; font-weight:600; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px}
.button:hover{filter:brightness(1.05)}
.button--ghost{background:transparent;border:1px solid #24314a;color:#dbe8ff}
.button--ghost:hover{background:#0f1726}

.empty{grid-column:1/-1; padding:24px;border:1px dashed #253048;border-radius:12px;color:#9fb0cc;text-align:center}

.footnote{max-width:1500px;margin:0 auto 48px;color:#8e9ab2;padding:0 24px}

/* Modal */
.modal-overlay{position:fixed;inset:0;background:rgba(5,9,15,.65);backdrop-filter: blur(4px);display:grid;place-items:center;padding:20px;animation:fadeIn .15s ease}
.modal{width:min(1200px,95%); max-height:90vh; overflow:auto; background:var(--surface); border:1px solid #1b2230; border-radius:20px; box-shadow: var(--shadow);}
.modal-header{padding:20px 20px 6px;border-bottom:1px solid #161b26}
.modal-media{aspect-ratio:16/9;background:#0e141f}
.modal-media img, .modal-media video{width:100%;height:100%;object-fit:cover}
.modal-content{display:grid;gap:16px;padding:16px 20px 22px}
.modal-content ul{margin:0 0 0 1em;padding:0;list-style-position:outside}
.modal-content li{margin:0 0 4px 0;padding:0;text-align:left}
.modal-content section h4{margin:0 0 8px;font-size:14px;letter-spacing:.3px;color:#a9b5c9;text-transform:uppercase}
.modal-links{display:flex;gap:10px;flex-wrap:wrap}
.modal-close{position:sticky;float:right;top:10px;margin:10px 10px 0 0;background:#0e1420;border:1px solid #22304a;color:#cfe0ff;border-radius:10px;padding:6px 10px;cursor:pointer}

@keyframes fadeIn{from{opacity:0} to{opacity:1}}
`;

export default ProjectsPage;
