import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Learn more about contacting me!" />
      </Head>

      <main className="bg-contact-gradient h-screen pl-40 text-white text-xl py-40">
        <h1>Contact Me :</h1>
        <p>
          Gmail: Sajjad.javazi.01@gmail.com <br />
          Linkedin: /Sajjadjavazi <br />
          Github: /Sajjadjavazi
        </p>
        <Link href="/">
          <p className='mt-6'>Back to Home</p>
        </Link>
      </main>
    </div>
  );
}
