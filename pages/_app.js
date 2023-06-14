import Nav from "../components/Nav";
import SubNav from "../components/SubNav";
import "../styles/globals.css";
import Facts from "../components/Fact";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SubNav />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
