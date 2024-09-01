import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>personal homepage</title>
        <meta name="description" content="My first NEXTJS project!" />
      </Head>

      <main>
        <nav></nav>
        <div className="bg-radial-gradient h-screen text-center text-white text-xl py-80">
          <h1>Sajjad Javazi</h1>
          <p>
            My name is Sajjad, I`m a Front-end developer.
          </p>
        </div>
      </main>
    </div>
  );
}
