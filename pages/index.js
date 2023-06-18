import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import VideoSec from "../components/VideoSec";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thapathali Campus</title>
      </Head>
      <VideoSec />
    </>
  );
}
