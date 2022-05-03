import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code From Anywhere</title>
        <meta name="description" content="Code From Anywhere" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Code From Anywhere is architecting, creating and distributing an
          elegant framework that lets others Develop and Market monetised
          software.
        </h1>
      </main>
    </div>
  );
};

export default Home;
