import TypewriterText from "../components/TypewriterText";
import "../App.css";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <TypewriterText></TypewriterText>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
        <div style={{ flex: '0 0 50%', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/assets/profile-image.jpg" 
            alt="Profile" 
            className="rounded-lg shadow-lg w-32 h-auto object-cover"
            style={{ maxWidth: '512px', width: '100%' }}
          />
        </div>

        <div style={{ flex: '0 0 50%' }} className="home-text">
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
    </main>
  );
}
