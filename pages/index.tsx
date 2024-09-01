import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>personal homepage</title>
        <meta name="description" content="My first NEXTJS project!" />
      </Head>

      <main>
        <nav></nav>
        <div className="bg-radial-gradient h-screen text-center text-white text-xl py-60">
          <h1>Sajjad Javazi</h1>
          <p>
            My name is Sajjad, I`m a Front-end developer.
          </p>
          <div className="mt-20 bg-amber-400 p-6 rounded-full mx-40">
          <Link href="/about">
            <p>
              <h3>About Me &rarr;</h3>
              <p>Find out more about who I am and what I do.</p>
            </p>
          </Link>
          <Link href="/contact">
            <p className="mt-10">
              <h3>Contact Me &rarr;</h3>
              <p>Get in touch with me for collaboration or queries.</p>
            </p>
          </Link>
        </div>
        </div>
        
      </main>
    </div>
  );
}
