import React from "react";
import styles from "../styles/VideoSec.module.css";

const VideoSec = () => {
  return (
    <div className={styles.videoHero}>
      <video
        className={styles.backgroundVideo}
        autoPlay="autoplay"
        loop="loop"
        muted
      >
        <source src="/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.content}>
        <p className={styles.subtitle}>
          Kick back, chill, and expand your horizons at our engineering haven!
        </p>
      </div>
    </div>
  );
};

export default VideoSec;
