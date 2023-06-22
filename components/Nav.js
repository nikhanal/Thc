import React, { useState, useContext } from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Logo from "./Logo";
import { Context_Search } from "../context/Context_Search";

const Nav = () => {
  const { search, setSearch } = useContext(Context_Search);
  const [menuOpen, setMenuOpen] = useState(1);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleSearch = () => {
    setSearch(!search);
  };
  console.log(search);
  return (
    <>
      <nav className={styles.nav}>
        <Logo className={styles.logo_section} color="black" />
        <section className={styles.link_section}>
          <div className={styles.link_div}>
            <Link href="/" className={styles.links_section_link}>
              Academic
              {/* <FaAngleDown className={styles.link_div_icon} /> */}
            </Link>
            <div className={styles.on_hover_content}>
              <Link href="/" className={styles.on_hover_link}>
                Undergraduate Programs
              </Link>
              <Link href="/" className={styles.on_hover_link}>
                Graduate Programs
              </Link>
              <div className={styles.link_inner_div}>
                <Link href="/academics" className={styles.on_hover_link}>
                  Academic Departments
                </Link>
                <div className={styles.on_hover_inner_content}>
                  <Link href="/architecture" className={styles.on_hover_link}>
                    Department of Architecture
                  </Link>
                  <Link
                    href="/automobile&mechcanical"
                    className={styles.on_hover_link}
                  >
                    Department of Automobile & Mechanical Engineering
                  </Link>
                  <Link href="/civil" className={styles.on_hover_link}>
                    Department of Cvil Engineering
                  </Link>
                  <Link
                    href="/electronics&computer"
                    className={styles.on_hover_link}
                  >
                    Department of Electronics & Computer Engineering
                  </Link>
                  <Link href="/industrial" className={styles.on_hover_link}>
                    Department of Industrial Engineering
                  </Link>
                  <Link href="/appliedscience" className={styles.on_hover_link}>
                    Department of Applied Science
                  </Link>
                </div>
              </div>

              <Link href="/" className={styles.on_hover_link}>
                Center & Institutes
              </Link>
              <Link href="/" className={styles.on_hover_link}>
                Library & Collections
              </Link>
            </div>
          </div>
          <div className={styles.link_div}>
            <Link href="/" className={styles.links_section_link}>
              Admission
              {/* <FaAngleDown className={styles.link_div_icon} /> */}
            </Link>
            <div className={styles.on_hover_content}>
              <Link href="/" className={styles.on_hover_link}>
                Undergraduate Admission
              </Link>
              <Link href="/" className={styles.on_hover_link}>
                Graduate Admission
              </Link>
              <Link href="/" className={styles.on_hover_link}>
                Fee Structures & Aid
              </Link>
              <Link href="/" className={styles.on_hover_link}>
                Professional Admission
              </Link>
            </div>
          </div>
          <div className={styles.link_div}>
            <Link href="/notices" className={styles.links_section_link}>
              Notices
              {/* <FaAngleDown className={styles.link_div_icon} /> */}
            </Link>
            {/* <div className={styles.on_hover_content}>
            <Link href="/" className={styles.on_hover_link}>
              Link 1
            </Link>
            <Link href="/" className={styles.on_hover_link}>
              Link 1
            </Link>
            <Link href="/" className={styles.on_hover_link}>
              Link 1
            </Link>
            <Link href="/" className={styles.on_hover_link}>
              Link 1
            </Link>
          </div> */}
          </div>{" "}
          <div className={styles.link_div}>
            <Link href="/" className={styles.links_section_link}>
              Resources
              {/* <FaAngleDown className={styles.link_div_icon} /> */}
            </Link>
            {/* <div className={styles.on_hover_content}>
            <Link href="/" className={styles.on_hover_link}>
              Link 1
            </Link>
            <Link href="/" className={styles.on_hover_link}>
              Link 1
            </Link>
            <Link href="/" className={styles.on_hover_link}>
              Link 1
            </Link>
            <Link href="/" className={styles.on_hover_link}>
              Link 1
            </Link>
          </div> */}
          </div>
          <div className={styles.link_div}>
            <Link href="/" className={styles.links_section_link}>
              Societies
              {/* <FaAngleDown className={styles.link_div_icon} /> */}
            </Link>
            <div className={styles.on_hover_content}>
              <Link href="/" className={styles.on_hover_link}>
                Free Student Union
              </Link>
              <Link href="/" className={styles.on_hover_link}>
                ECAST
              </Link>
              <Link href="/" className={styles.on_hover_link}>
                Tensor
              </Link>
              <Link href="/" className={styles.on_hover_link}>
                CESS
              </Link>
              <Link href="/" className={styles.on_hover_link}>
                ASIS
              </Link>
              <Link href="/" className={styles.on_hover_link}>
                Industrial Societies
              </Link>
            </div>
          </div>
          <div className={styles.link_div}>
            <Link href="/" className={styles.links_section_link}>
              Units
              {/* <FaAngleDown className={styles.link_div_icon} /> */}
            </Link>
            {/* <div className={styles.on_hover_content}>
            <Link href="/" className={styles.on_hover_link}>
              Link 1
            </Link>
            <Link href="/" className={styles.on_hover_link}>
              Link 1
            </Link>
            <Link href="/" className={styles.on_hover_link}>
              Link 1
            </Link>
            <Link href="/" className={styles.on_hover_link}>
              Link 1
            </Link>
          </div> */}
          </div>
        </section>
        <section className={styles.section_right}>
          <div className={styles.search_section} onClick={handleSearch}>
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
        {!menuOpen && (
          <menu className={styles.menu_section}>
            <Link href="/" className={styles.menu_section_link}>
              ACADEMIC
            </Link>
            <Link href="/" className={styles.menu_section_link}>
              ADMISSION
            </Link>
            <Link href="/" className={styles.menu_section_link}>
              NOTICES
            </Link>
            <Link href="/" className={styles.menu_section_link}>
              RESOURCES
            </Link>
            <Link href="/" className={styles.menu_section_link}>
              SOCIETIES
            </Link>
            <Link href="/" className={styles.menu_section_link}>
              UNITS
            </Link>
          </menu>
        )}
      </nav>
    </>
  );
};

export default Nav;
