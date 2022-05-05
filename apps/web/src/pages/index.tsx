import type { NextPage } from "next";
import Head from "next/head";
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
        <a href="https://meet.jit.si/codefromanywhere">
        <button style={{backgroundColor:"blue",padding:10,width:300}}>
          Hang out
        </button></a>
      </main>
    </div>
  );
};

export default Home;
