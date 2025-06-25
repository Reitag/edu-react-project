"use client";

import { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./ProgressBar.module.css";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

      setProgress(Math.round(scrolled));
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        isAtTop ? styles.progressBarHidden : styles.progressBarContainer
      )}
    >
      <div
        className={styles["progressBarFill"]}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
