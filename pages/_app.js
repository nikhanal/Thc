import Nav from "../components/Nav";
import SubNav from "../components/SubNav";
import "../styles/globals.css";
import { useContext } from "react";
import {
  Context_Search,
  Context_Search_Provider,
} from "../context/Context_Search";
import Footer from "../components/Footer";
import Search from "../components/Search";

function MyApp({ Component, pageProps }) {
  return (
    <Context_Search_Provider>
      <ContentWrapper Component={Component} pageProps={pageProps} />
    </Context_Search_Provider>
  );
}

function ContentWrapper({ Component, pageProps }) {
  const { search, setSearch } = useContext(Context_Search);
  return (
    <>
      {search ? (
        <>
          <Search />
        </>
      ) : (
        <>
          <SubNav />
          <Nav />
        </>
      )}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
