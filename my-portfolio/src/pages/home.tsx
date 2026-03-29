import TypewriterText from "../components/TypewriterText";
import "../App.css";

export default function Home() {
  return (
    <div className="home-root">
      <h1 className="sr-only">Thomas (Tommy) Parisi – Software Developer</h1>

      <div className="home-hero">
        <div className="home-typewriter">
          <TypewriterText />
        </div>

        <h2 className="home-name">Thomas Parisi</h2>

        <p className="home-tagline">
          Welcome to my portfolio!
        </p>

        <p className="home-bio">
          I am a Senior at the University of Delaware studying Computer Science
          with a concentration in Artificial Intelligence and Robotics
          and a Minor in Cybersecurity. I am a passionate full-stack developer with
          a wide range of expertise. Please take a look around at all of my projects
          and experience. If you have any questions, check out the contact page and
          send me a message!
        </p>

        <div className="home-cta">
          <a href="/projects" className="btn-ghost no-select">
            Explore My Work <span aria-hidden="true">→</span>
          </a>
          <a href="/contact" className="btn-solid no-select">
            Get in touch
          </a>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-dot" />
      </div>

      <style>{`
        .home-root {
          min-height: calc(100vh - 64px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem 6rem;
          position: relative;
        }

        .home-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 720px;
          gap: 1.25rem;
        }

        .home-typewriter {
          margin-bottom: 0.5rem;
        }

        .home-name {
          font-family: 'Minecraft', 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 7vw, 5rem);
          font-weight: normal;
          color: #fff;
          letter-spacing: 0.04em;
          line-height: 1.05;
          margin: 0;
        }

        .home-tagline {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: #6b7280;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .home-bio {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: clamp(0.95rem, 1.8vw, 1.05rem);
          color: rgba(232, 236, 242, 0.75);
          line-height: 1.7;
          margin: 0;
          max-width: 600px;
        }

        .home-cta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0.35;
        }

        .scroll-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #63b3ff;
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50%       { opacity: 1;   transform: translateY(6px); }
        }

        @media (max-width: 480px) {
          .home-root {
            padding: 2.5rem 1.25rem 5rem;
          }

          .home-cta {
            flex-direction: column;
            width: 100%;
          }

          .home-cta a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
