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

        <div className={styles.notescard}>
          <a
            href="https://github.com/josephineleung/blog"
            target="blank"
            rel="noopener noreferrer"
          >
            <h2>Onboarding Flow Notes &rarr;</h2>
            <p>
              <b>Getting Started with Next.js</b>
              <br />- I didn&rsquo;t set up my terminal to accept this command: <i>npx create-next-app --example https://github.com/vercel/platforms/tree/main platforms</i>.
              Having a message like &ldquo;You need to have a Node environment on your
              computer&rdquo; would have been helpful. Since I don&rsquo;t have Node
              installed locally, I have to install it first.
              <br />
              <br />- Before installing Node, I have to install Xcode command line
              tools.
              <br />
              <br />- After installing Node.js, I&rsquo;m asked to &rsquo;input the command.&rsquo; The
              directions don&rsquo;t mention this so I&rsquo;m unsure if
              it&rsquo;s okay to install the package.
              <br />
              <br />- The version I installed is too new, so I need to install an older version.
              <br />
              <br />- After installation, I would add a suggestion for the user to
              type &ldquo;ls&rdquo; and verify that the folder <i>platforms</i> has been
              created.
              <br />
              <br />- The instructions at the bottom incude{" "}
              <i>
                Note: Don&apos;t forget to convert the .env.example file
                that&rsquo;s located at the root of the repo into a .env file
                &ndash;&nbsp;it&apos;ll come in handy later.
              </i>{" "}
              How would I do that?
              <br />
              <br />
              <b>Using a Template</b>
              <br />- Using the examples in the Next.js documentation is much
              easier, since it uses a 1-click deployment.
              <br />
              <br />- I ran into too many errors using the available examples
              from the Next.js examples repo.
              <br />
              <br />- I decided to start with a totally new Next.js project.
              <br />
              <br />- I was able to deploy with no problem.
              <br />
              <br />- Cute milestone message with confetti.
              <br />
              <br />- I edited my site in VS code.
              <br />
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
