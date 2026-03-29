import { useEffect, useState } from "react";
import styles from "./TypewriterText.module.css";

const words = ["Computer Science", "AI & Robotics", "Cybersecurity"];
const TYPING_SPEED  = 120;
const DELETING_SPEED = 50;
const PAUSE_TIME    = 1800;

const TypewriterText = () => {
  const [text, setText]         = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: number;

    if (!isDeleting && text === currentWord) {
      timeout = window.setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex(prev => (prev + 1) % words.length);
      return;
    }

    timeout = window.setTimeout(() => {
      setText(prev =>
        isDeleting
          ? prev.slice(0, -1)
          : currentWord.slice(0, prev.length + 1)
      );
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className={styles.wrapper}>
      <span className={styles.prefix}>&#62;</span>
      <span className={styles.text}>{text || '\u00A0'}</span>
      <span className={styles.cursor} aria-hidden="true" />
    </div>
  );
};

export default TypewriterText;
