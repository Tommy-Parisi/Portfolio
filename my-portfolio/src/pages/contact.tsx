import React, { useState } from "react";

const ContactPage: React.FC = () => {
  return (
    <main className="contact-root">
      <Hero />
      <ContactLinks />
      <style>{styles}</style>
    </main>
  );
};

const Hero: React.FC = () => (
  <header className="hero">
    <div className="hero-inner">
      <div className="eyebrow">Contact</div>
      <h1>Let's connect</h1>
      <p className="tagline">
        I'm interested in contributing through a <strong>Software Engineering or Cybersecurity </strong>role,
        where I can build and ship impactful features, apply AI and ML, or help secure and protect critical systems.
        I bring experience developing production-ready tools and backend systems, as well as performing cybersecurity analysis, 
        research, and defense. I thrive in fast-paced, collaborative environments where I can bridge the gap between building innovative 
        technology and ensuring its security.
      </p>
      <p className="sub">
        Reach out through any of the platforms below. Let's build!
      </p>
    </div>
  </header>
);

const ContactLinks: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  
  const email = "tcparisi55@gmail.com";
  const phone = "(302) 545-7734";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // Ignore clipboard errors
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch {
      // Ignore clipboard errors
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-grid">
        
        {/* Email */}
        <div className="contact-card" onClick={copyEmail}>
          <div className="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <p>{emailCopied ? "Copied!" : email}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="contact-card" onClick={copyPhone}>
          <div className="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="contact-info">
            <h3>Phone</h3>
            <p>{phoneCopied ? "Copied!" : phone}</p>
          </div>
        </div>

        {/* GitHub */}
        <a href="https://github.com/Tommy-Parisi" target="_blank" rel="noreferrer" className="contact-card">
          <div className="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="contact-info">
            <h3>GitHub</h3>
            <p>Tommy-Parisi</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/thomas-parisi-771a76261/" target="_blank" rel="noreferrer" className="contact-card">
          <div className="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="contact-info">
            <h3>LinkedIn</h3>
            <p>Thomas Parisi</p>
          </div>
        </a>

        {/* Resume */}
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="contact-card">
          <div className="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="contact-info">
            <h3>Resume</h3>
            <p>Download PDF</p>
          </div>
        </a>

        {/* Projects */}
        <a href="/projects" className="contact-card">
          <div className="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="contact-info">
            <h3>Projects</h3>
            <p>View my work</p>
          </div>
        </a>

      </div>
    </section>
  );
};

const styles = `
:root{
  --bg:#0b0d12;--surface:#10131a;--muted:#9aa3b2;--text:#e8ecf2;--brand:#63b3ff;--ring:#3b82f6;--chip:#1b2230;--chipText:#c9d4e3;--radius:16px;--shadow:0 10px 30px rgba(0,0,0,.4);
}

*{box-sizing:border-box}

.contact-root{
  color:var(--text);
  background:radial-gradient(1200px 600px at 10% -10%, rgba(99,179,255,.08), transparent 60%), 
             radial-gradient(900px 500px at 100% 0%, rgba(99,255,210,.06), transparent 60%), 
             var(--bg);
  min-height:100vh;
}

.hero{
  max-width:1200px;
  margin:0 auto;
  padding:72px 24px 48px;
  text-align:center;
}

.hero-inner{
  max-width:1000px;
  margin:0 auto;
}

.eyebrow{
  color:#b9c7dd;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-size:12px;
  margin-bottom:8px;
}

.hero h1{
  font-size:48px;
  line-height:1.05;
  margin:0 0 16px;
}

.tagline{
  color:#cdd6e6;
  font-size:18px;
  line-height:1.55;
  margin:0 0 12px;
}

.sub{
  color:#9fb0cc;
  margin:0;
  font-size:16px;
}

.contact-section{
  max-width:1200px;
  margin:0 auto;
  padding:0 24px 80px;
}

.contact-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
  gap:20px;
  max-width:900px;
  margin:0 auto;
}

.contact-card{
  background:linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.01));
  border:1px solid #1b2230;
  border-radius:16px;
  padding:24px;
  display:flex;
  align-items:center;
  gap:16px;
  text-decoration:none;
  color:inherit;
  cursor:pointer;
  transition:all 0.3s ease;
  box-shadow:0 4px 12px rgba(0,0,0,.1);
}

.contact-card:hover{
  transform:translateY(-2px);
  border-color:#2a3441;
  box-shadow:0 8px 25px rgba(0,0,0,.15);
  background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
}

.contact-icon{
  width:48px;
  height:48px;
  border-radius:12px;
  background:linear-gradient(135deg, #2b63d9, #1b4ab8);
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  flex-shrink:0;
}

.contact-info h3{text-align:left;
  margin:0 0 4px 0;
  font-size:16px;
  font-weight:600;
  color:var(--text);
}

.contact-info p{
  margin:0;
  font-size:14px;
  color:var(--muted);
}

@media(max-width:768px){
  .contact-grid{
    grid-template-columns:1fr;
  }
  
  .hero h1{
    font-size:36px;
  }
  
  .tagline{
    font-size:16px;
  }
}

@media(max-width:640px){
  .contact-card{
    padding:20px;
  }
  
  .contact-icon{
    width:40px;
    height:40px;
  }
}
`;

export default ContactPage;
