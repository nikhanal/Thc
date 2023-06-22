import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import styles from "../styles/Logo.module.css";
import Link from "next/link";

const Logo = ({ color }) => {
  return (
    <section className={styles.logo_section}>
      <Link
        href="/"
        className={styles.logo_section_link}
        style={{ color: color }}
      >
        <div className={styles.logo_section_logo}>
          <Image
            src={logo}
            alt="Thapathali Campus Logo"
            height={80}
            quality={100}
          ></Image>
        </div>
        <div className={styles.logo_section_text}>
          <span className={styles.logo_section_text1}>
            Tribhuwan University
          </span>
          <span className={styles.logo_section_text2}>
            Institute of Engineering
          </span>
          <span className={styles.logo_section_text3}>Thapathali Campus</span>
        </div>
      </Link>
    </section>
  );
};

export default Logo;
