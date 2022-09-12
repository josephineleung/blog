import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josephine Leung</title>
        <meta
          name="description"
          content="I'm a product manager in the San Francisco Bay Area"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I&apos;m{" "}
          <a
            href="https://www.linkedin.com/in/jforjosephine/"
            target="blank"
            rel="noopener noreferrer"
          >
            Josephine Leung!
          </a>
        </h1>

        <div className={styles.grid}>
          <a
            href="https://www.ravelry.com/people/jforjosephine/queue"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Knitting &rarr;</h2>
            <p>View my WIP, yarn stash, and knitting queue on Ravelry.</p>
          </a>

          <a
            href="https://letterboxd.com/jforjosephine/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Movies &rarr;</h2>
            <p>I keep my movie-watching diary and wishlist on Letterboxd.</p>
          </a>
        </div>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span className={styles.logo}>
          Created with
            <Image src="/vercel.svg" alt="Vercel Logo" width={25} height={16} />
          by Josephine Leung
          </span>
          
          
        </a>
      </footer>
    </div>
  );
};

export default Home;
