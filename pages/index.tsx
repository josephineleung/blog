import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I&apos;m{" "}
          <a href="https://www.linkedin.com/in/jforjosephine/" target="blank">
            Josephine Leung!
          </a>
        </h1>

        <div className={styles.grid}>
          <a
            href="https://www.ravelry.com/people/jforjosephine/queue"
            className={styles.card}
            target="_blank"
          >
            <h2>Knitting &rarr;</h2>
            <p>View my WIP, yarn stash, and knitting queue on Ravelry.</p>
          </a>

          <a
            href="https://letterboxd.com/jforjosephine/"
            className={styles.card}
            target="_blank"
          >
            <h2>Movies &rarr;</h2>
            <p>I keep my movie-watching diary and wishlist on Letterboxd.</p>
          </a>
        </div>

        <div className={styles.notescard}>
          <a href="https://github.com/josephineleung/blog" target="_blank">
            <h2>Notes &rarr;</h2>
            <p>
              <b>Getting Started with Next.js</b>
              <br />
              1. I wouldn&rsquo;t have set up my terminal to accept this command
              (make sure you have a Node env on your computer). Don&rsquo;t have
              Node installed locally, so have to install it first.
              <br />
              2. Before installing Node, have to install Xcode command line
              tools
              <br />
              3. After installing Node.js, input command. Okay to install
              package?
              <br />
              4. Installed node is too new. I need to install an older version
              <br />
              5. After install, suggest &ldquo;ls&rdquo; to make sure the
              platforms folder has been created
              <br />
              6. Note: Don't forget to convert the .env.example file
              that&rsquo;s located at the root of the repo into a .env file
              &ndash;&nbsp;it'll come in handy later. How would I do that?
              <br />
              <br />
              <b>Using a Template</b>
              <br />- Next.js documentation much easier because it uses the
              platform.
              <br />- Ran into too many errors from the available examples from
              the Vercel examples repo
              <br />- Decided to start from totally new Next.js project
              <br />- Deployed with no problem
              <br />- Good milestone message
              <br />- Good preview
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
