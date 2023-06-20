import React, { useState } from "react";
import styles from "../styles/H_Academics.module.css";
import Image from "next/image";
import arc_pic from "../public/arch-hero.jpg";
import elec_pic from "../public/elec_pic.jpeg";
import default_bg from "../public/default_bg.jpeg";
import auto_pic from "../public/auto_pic.jpeg";
import mech_pic from "../public/mech_pic.jpeg";
import civil_pic from "../public/civil_pic.jpeg";
import industrial_pic from "../public/industrial_pic.jpeg";
import applied_pic from "../public/applied_pic.jpeg";
import { BsArrowRight } from "react-icons/bs";

import Link from "next/link";

const H_Academic = () => {
  const [overlayContents, setSetOverlayContents] = useState({
    BackgroundImage: default_bg,
    Title: "Academics at Thapathali Campus",
    Paragraph:
      "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
    isButton: true,
  });

  const handleButtonHover = (BackgroundImage, Title, Paragraph, isButton) => {
    setSetOverlayContents({
      BackgroundImage,
      Title,
      Paragraph,
      isButton,
    });
  };

  return (
    <div className={styles.outerSection}>
      <div className={styles.innerSection}>
        <Image
          src={overlayContents.BackgroundImage}
          alt="Background"
          className={styles.backgroundImage}
        />
        <div className={styles.imageOverlay} />
        <div className={styles.textOverlay}>
          <div className={styles.textOverlayTexts}>
            <h1>{overlayContents.Title}</h1>
            <p>{overlayContents.Paragraph}</p>
          </div>
          {overlayContents.isButton && (
            <div className={styles.textOverlayButtons}>
              <button>Explore Undergraduate Programs</button>
              <button>Explore Graduate Programs</button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.overlay} />
      <div className={styles.buttons}>
        <Link href="/architecture">
          <button
            onMouseEnter={() =>
              handleButtonHover(
                arc_pic,
                "Department Of Architecture",
                "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
                false
              )
            }
            onMouseLeave={() =>
              handleButtonHover(
                default_bg,
                "Academics at Thapathali Campus",
                "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
                true
              )
            }
          >
            Architecture
            {/* <BsArrowRight className={styles.icon} /> */}
          </button>
        </Link>
        <Link href="/autmobile">
          <button
            onMouseEnter={() =>
              handleButtonHover(
                auto_pic,
                "Department Of Automobile Engineering",
                "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
                false
              )
            }
            onMouseLeave={() =>
              handleButtonHover(
                default_bg,
                "Academics at Thapathali Campus",
                "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
                true
              )
            }
          >
            Automobile
            {/* <BsArrowRight className={styles.icon} /> */}
          </button>
        </Link>
        <Link href="/appliedsciences">
          <button
            onMouseEnter={() =>
              handleButtonHover(
                applied_pic,
                "Department Of Applied Sciences",
                "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
                false
              )
            }
            onMouseLeave={() =>
              handleButtonHover(
                default_bg,
                "Academics at Thapathali Campus",
                "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
                true
              )
            }
          >
            Applied Sciences
            {/* <BsArrowRight className={styles.icon} /> */}
          </button>
        </Link>
        <Link href="/electronicsandcomputer">
          <button
            onMouseEnter={() =>
              handleButtonHover(
                elec_pic,
                "Department Of Electronics And Computer Engineering",
                "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
                false
              )
            }
            onMouseLeave={() =>
              handleButtonHover(
                default_bg,
                "Academics at Thapathali Campus",
                "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
                true
              )
            }
          >
            Electronics & Computer
            {/* <BsArrowRight className={styles.icon} /> */}
          </button>
        </Link>
        <Link href="/civil">
          <button
            onMouseEnter={() =>
              handleButtonHover(
                civil_pic,
                "Department Of Civil Engineering",
                "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
                false
              )
            }
            onMouseLeave={() =>
              handleButtonHover(
                default_bg,
                "Academics at Thapathali Campus",
                "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
                true
              )
            }
          >
            Cvil
            {/* <BsArrowRight className={styles.icon} /> */}
          </button>
        </Link>
        <Link href="/industrial">
          <button
            onMouseEnter={() =>
              handleButtonHover(
                industrial_pic,
                "Department Of Industrial Engineering",
                "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
                false
              )
            }
            onMouseLeave={() =>
              handleButtonHover(
                default_bg,
                "Academics at Thapathali Campus",
                "Academics thrive at a renowned engineering institute, emphasizing technical excellence and fostering innovation in education.",
                true
              )
            }
          >
            Industrial
            {/* <BsArrowRight className={styles.icon} /> */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default H_Academic;
