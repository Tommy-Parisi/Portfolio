import TypewriterText from "../components/TypewriterText";
import headshotImage from "/public/assets/profile-image.jpg";
import "../App.css";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="sr-only">Thomas (Tommy) Parisi – Software Developer</h1>
        <TypewriterText></TypewriterText>
      </header>
      
      <div className="home-layout">
        <div className="image-container">
          <img 
            src={headshotImage}
            alt="Thomas Parisi software developer headshot - University of Delaware Computer Science student" 
            className="rounded-lg shadow-lg w-32 h-auto object-cover profile-image"
          />
        </div>

        <div className="text-container home-text">
          <p>
            Welcome to my portfolio! My name is Thomas Parisi. <br /><br />
            I am a Senior at the University of Delaware studying Computer Science 
            with a concentration in Artificial Intelligence and Robotics 
            and a Minor in Cybersecurity. I am a passionate full-stack developer with
            a wide range of expertise. <br /><br />
            Please take a look around at all of my projects and experience. 
            If you have any questions, check out the contact page and send me a message!
          </p>
          
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            <a 
              href="/projects" 
              className="explore-button no-select"
            >
              <span className="no-select">Explore My Work</span>
              <span className="no-select" style={{ 
                fontSize: '1.4rem', 
                transition: 'transform 0.3s ease',
                display: 'inline-block'
              }}></span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .home-layout {
          display: flex;
          flex-direction: row;
          gap: 2rem;
        }
        
        .image-container {
          flex: 0 0 50%;
          display: flex;
          justify-content: center;
        }
        
        .text-container {
          flex: 0 0 50%;
        }
        
        .profile-image {
          max-width: 512px;
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .home-layout {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .image-container,
          .text-container {
            flex: 1 1 auto;
          }
          
          .profile-image {
            max-width: 300px;
          }
        }
        
        @media (max-width: 480px) {
          .home-layout {
            gap: 1rem;
          }
          
          .profile-image {
            max-width: 250px;
          }
          
          .home-text p {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </main>
  );
}
