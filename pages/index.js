import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import VideoSec from "../components/VideoSec";
import H_Academic from "../components/H_Academic";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thapathali Campus</title>
      </Head>
      <VideoSec />
      <H_Academic />
    </>
  );
}
