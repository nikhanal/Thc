import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import VideoSec from "../components/VideoSec";
import H_Academic from "../components/H_Academic";
import MessageChief from "../components/MessageChief";
import Testimonial from "../components/Testimonial";
import About_thc from "../components/About_thc";
import Keypnts from "../components/Keypnts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thapathali Campus</title>
      </Head>
      <VideoSec />
      <MessageChief />
      <About_thc />
      <Keypnts />
      <H_Academic />
      <Testimonial />
    </>
  );
}
