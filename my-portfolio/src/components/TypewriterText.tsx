import { useEffect, useState } from "react";
import styles from "./TypewriterText.module.css";

const words = ["Computer Science", "AI & Robotics", "Cybersecurity"]
const TYPING_SPEED = 150;
const DELETING_SPEED = 75;
const PAUSE_TIME = 1500;

const TypewriterText = () => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let typingTimeout: number;
        
        if (isDeleting) {
            typingTimeout = window.setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
            }, DELETING_SPEED);
        } else {
            typingTimeout = window.setTimeout(() => {
                setText((prev) => currentWord.slice(0, prev.length + 1));
            }, TYPING_SPEED);
        }

        //when typing is done
        if (!isDeleting && text == currentWord) {
            typingTimeout = window.setTimeout(() => setIsDeleting(true), PAUSE_TIME);
        }
        
        //when deleting is done
        if (isDeleting && text == '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, wordIndex]);

    return (
        <div className={styles.typewriter}>
            <span> {text}</span>
            <span className={styles.cursor} >|</span>
        </div>
    );
};

export default TypewriterText;