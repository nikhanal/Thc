import React, { useContext } from "react";
import styles from "../styles/Search.module.css";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Context_Search } from "../context/Context_Search";
const Search = ({ display }) => {
  const { search, setSearch } = useContext(Context_Search);
  const handleCross = () => {
    setSearch(0);
  };
  return (
    <div className={styles.search} style={{ display: display }}>
      <section className={styles.top_section}>
        <div className={styles.cross} onClick={handleCross}>
          <IoMdClose className={styles.cross_icon} />
        </div>
      </section>
      {/* <section className={styles.mid_section}></section> */}

      <section className={styles.bottom_section}>
        <div className={styles.input_div}>
          <div className={styles.search_div}>
            <FaSearch className={styles.search_icon} />
          </div>
          <input
            type="text"
            placeholder="Search Keywords"
            className={styles.input}
          />
        </div>
        <div className={styles.enter_search}>
          <span>Search</span>
        </div>
      </section>
    </div>
  );
};
export default Search;
