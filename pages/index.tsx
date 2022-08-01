import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josephine Leung</title>
        <meta name="description" content="I&apos;m a product manager in the San Francisco Bay Area" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I&apos;m{" "}
          <a href="https://www.linkedin.com/in/jforjosephine/" target="blank" rel="noopener noreferrer">
            Josephine Leung!
          </a>
        </h1>

        <div className={styles.grid}>
          <a
            href="https://www.ravelry.com/people/jforjosephine/queue"
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>Knitting &rarr;</h2>
            <p>View my WIP, yarn stash, and knitting queue on Ravelry.</p>
          </a>

          <a
            href="https://letterboxd.com/jforjosephine/"
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>Movies &rarr;</h2>
            <p>I keep my movie-watching diary and wishlist on Letterboxd.</p>
          </a>
        </div>

        <div className={styles.notescard}>
          <a href="https://github.com/josephineleung/blog" target="blank" rel="noopener noreferrer">
            <h2>Notes &rarr;</h2>
            <p>
              <b>Getting Started with Next.js</b>
              <br />
              1. I didn&rsquo;t  set up my terminal to accept this command. Having a message like "You need to have a Node env on your computer" would have been helpful. Sine I don&rsquo;t have
              Node installed locally, I have to install it first.
              <br />
              2. Before installing Node, I have to install Xcode command line
              tools.
              <br />
              3. After installing Node.js, I&rsquo;m asked to input command. The directions don&rsquo;t mention this so I&rsquo;m unsure if it&rsquo;s okay to install the
              package.
              <br />
              4. The I installed is too new. I need to install an older version.
              <br />
              5. After installation, I would add a suggestion for the user to type &ldquo;ls&rdquo; to make sure the
              platforms folder has been created.
              <br />
              6. The instructions at the bottom incude <i>Note: Don&apos;t forget to convert the .env.example file
              that&rsquo;s located at the root of the repo into a .env file
              &ndash;&nbsp;it&apos;ll come in handy later.</i> How would I do that?
              <br />
              <br />
              <b>Using a Template</b>
              <br />- Using the examples in the Next.js documentation is much easier, since it uses a 1-click deployment.
              <br />- I ran into too many errors from the available examples from
              the Next.js examples repo.
              <br />- I decided to start from totally new Next.js project.
              <br />- I was able to deploy with no problem.
              <br />- Good milestone message.
              <br />- Good preview.
              <br />- I edited my site in VS code.
              <br />- I used my terminal to push my changes to github.

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
