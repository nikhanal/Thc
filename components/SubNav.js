import Link from "next/link";
import React from "react";
import styles from "../styles/SubNav.module.css";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
const SubNav = ({ display }) => {
  return (
    <nav className={styles.subNav} style={{ display: display }}>
      <section className={styles.section_left}>
        <div>
          <Link href="/">
            <IoLibraryOutline />
            <span>Library</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <BsFillJournalBookmarkFill />
            <span>Journal</span>
          </Link>
        </div>
      </section>
      <section className={styles.section_right}>
        <div>
          <Link href="/">
            <RiFilePaper2Line />
            <span>MSc.Admission</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <RiFilePaper2Line />
            <span>BE/BArch Admission</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <FaUserGraduate />
            <span>My Portal</span>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default SubNav;
