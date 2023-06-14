import React, { useState } from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import logo from "../public/logo.svg";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(1);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={styles.nav}>
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
          <span className={styles.logo_section_text1}>
            Tribhuwan University
          </span>
          <span className={styles.logo_section_text2}>
            Institute of Engineering
          </span>
          <span className={styles.logo_section_text3}>Thapathali Campus</span>
        </div>
      </section>
      <section className={styles.link_section}>
        <div className={styles.link_div}>
          <Link href="/" className={styles.links_section_link}>
            Academic
          </Link>
          <FaAngleDown className={styles.link_div_icon} />
        </div>
        <div className={styles.link_div}>
          <Link href="/" className={styles.links_section_link}>
            Admission
          </Link>
          <FaAngleDown className={styles.link_div_icon} />
        </div>
        <div className={styles.link_div}>
          <Link href="/" className={styles.links_section_link}>
            Notice
          </Link>
          <FaAngleDown className={styles.link_div_icon} />
        </div>
        <div className={styles.link_div}>
          <Link href="/" className={styles.links_section_link}>
            Socities
          </Link>
          <FaAngleDown className={styles.link_div_icon} />
        </div>
        <div className={styles.link_div}>
          <Link href="/" className={styles.links_section_link}>
            Resources
          </Link>
          <FaAngleDown className={styles.link_div_icon} />
        </div>
        <div className={styles.link_div}>
          <Link href="/" className={styles.links_section_link}>
            Units
          </Link>
          <FaAngleDown className={styles.link_div_icon} />
        </div>
      </section>
      <section className={styles.section_right}>
        <div className={styles.search_section}>
          <FaSearch className={styles.search_icon} />
        </div>
        {menuOpen ? (
          <div className={styles.menu} onClick={handleToggleMenu}>
            <AiOutlineMenu className={styles.menu_icon_on} />
          </div>
        ) : (
          <div className={styles.menu} onClick={handleToggleMenu}>
            <IoMdClose className={styles.menu_icon_close} />
          </div>
        )}
      </section>
    </nav>
  );
};

export default Nav;
