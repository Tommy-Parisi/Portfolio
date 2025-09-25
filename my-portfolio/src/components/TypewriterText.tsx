import { useEffect, useState } from "react";
import styles from "./TypewriterText.module.css";
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const words = ["Computer Science", "AI & Robotics", "Cybersecurity"];
const TYPING_SPEED = 150;
const DELETING_SPEED = 75;
const PAUSE_TIME = 1500;

const TypewriterText = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [muted, setMuted] = useState(false); 

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingTimeout: number;

    if (isDeleting) {
      typingTimeout = window.setTimeout(() => {
        setText((prev) => {
          const newText = prev.slice(0, -1);

          if (prev.length > 0 && !muted) {
            const click = new Audio('/sounds/delete.mp3');
            click.volume = 0.5;
            click.play().catch(() => {});
          }

          return newText;
        });
      }, DELETING_SPEED);
    } else {
      typingTimeout = window.setTimeout(() => {
        const nextChar = currentWord[text.length];
        if (nextChar) {
          setText((prev) => prev + nextChar);

          if (!muted) {
            const click = new Audio('/sounds/typewriter.wav');
            click.volume = 0.5;
            click.play().catch((err) => console.warn('Type sound failed:', err));
          }
        }
      }, TYPING_SPEED);
    }

    if (!isDeleting && text === currentWord) {
      typingTimeout = window.setTimeout(() => setIsDeleting(true), PAUSE_TIME);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, muted]); 

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        minWidth: '300px', 
        position: 'relative',
      }}
    >
      <div style={{ width: '1.5rem' }} />

      <div
        style={{
          flexGrow: 1,
          textAlign: 'right',
          fontFamily: "'Minecraft', monospace",
          fontSize: '2rem',
          letterSpacing: '1px',
        }}
        className={styles.typewriter}
      >
        <span>{text || '\u00A0'}</span>
        <span className={styles.cursor}>|</span>
      </div>
      <button
        onClick={() => setMuted((prev) => !prev)}
        aria-label={muted ? 'Unmute sounds' : 'Mute sounds'}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5rem',
          color: 'white',
          flexShrink: 0,
          width: '1.5rem',
        }}
      >
        {muted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

export default TypewriterText;
