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
          {/* lets add an input field on top where you can fill in your name,
           and when clicking to go to jitsi, it also calls a little endpoint 
           that gives anyone with the cfa app that wants to be notified a push 
           notification "{name} joined the hangout!" ^^ */}

          <button
            style={{
              backgroundColor: "lightblue",
              padding: 15,
              width: 300,
              borderRadius: 10,
            }}
          >
            Hang out
          </button>
        </a>

        <a href="https://sensible.to">
          <button
            style={{
              backgroundColor: "lightgreen",
              padding: 15,
              width: 300,
              borderRadius: 10,
            }}
          >
            Sensible
          </button>
        </a>
        <a href="https://www.youtube.com/channel/UCDw844XEAwsJLkftu9pq2vA">
          <button
            style={{
              backgroundColor: "lightgreen",
              padding: 15,
              width: 300,
              borderRadius: 10,
            }}
          >
            Livestream & Videos
          </button>
        </a>
      </main>
    </div>
  );
};

export default Home;
