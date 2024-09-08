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
        <div className="bg-radial-gradient h-screen py-50 text-white text-xl">
          <Link href="/joke">
            <button className="m-12 bg-slate-300 p-3 ml-10 text-black rounded-lg">click to read fun jokes</button>
          </Link>
          <div className="text-center">
            <h1>Sajjad Javazi</h1>
            <p>
              My name is Sajjad, I`m a Front-end developer.
            </p>
            <div className="mt-20 bg-amber-400 p-6 rounded-full mx-40">
              <Link href="/about">
                <div>
                  <h3>About Me &rarr;</h3>
                  <p>Find out more about who I am and what I do.</p>
                </div>
              </Link>
              <Link href="/contact">
                <div className="mt-10">
                  <h3>Contact Me &rarr;</h3>
                  <p>Get in touch with me for collaboration or queries.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
