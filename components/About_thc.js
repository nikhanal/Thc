import React from "react";
import Image from "next/image";
import styles from "../styles/About_thc.module.css";
import thcimg from "../assets/images/thc_img.png";

const About_thc = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>About Thapathali Campus</h1>
        </div>
        <div className={styles.paragraph}>
          <p>
            Institute of Engineering Thapathali Campus is a Paradise for
            Technology. Situated in between the Heart of Capital, it has been
            providing Undergraduate and Graduate Level of Technical Education.
            looking back, Thapathali Campus is the first Institute in Nepal
            Providing Engineering Degrees and technology training since 1930 AD.
            It is one of the constituent campus of Institute of Engineering
            under Tribhuvan University, which upgraded its programs to bachelor
            and master level along the course of time. Campus offers bachelor
            degree programs in industrial engineering, civil engineering,
            electronics & communication engineering, mechanical engineering,
            architecture and automobile engineering and master degree program in
            earthquake engineering.
          </p>
        </div>
      </div>
      <div className={styles.image}>
        <Image src={thcimg} alt="Thapathali Campus"></Image>
      </div>
    </div>
  );
};

export default About_thc;
