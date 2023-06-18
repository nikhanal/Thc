import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import styles from "../styles/Logo.module.css";

const Logo = () => {
  return (
    <section className={styles.logo_section}>
      <div className={styles.logo_section_logo}>
        <Image
          src={logo}
          alt="Thapathali Campus Logo"
          height={80}
          quality={100}
        ></Image>
      </div>
      <div className={styles.logo_section_text}>
        <span className={styles.logo_section_text1}>Tribhuwan University</span>
        <span className={styles.logo_section_text2}>
          Institute of Engineering
        </span>
        <span className={styles.logo_section_text3}>Thapathali Campus</span>
      </div>
    </section>
  );
};

export default Logo;
