import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import News from "../components/News";
import Facts from "../components/Fact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thapathali Campus</title>
      </Head>
      <News />
      <Facts />
    </>
  );
}
