import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me" />
      </Head>

      <main className="bg-about-gradient h-screen pl-40 text-white text-xl py-40">
        <h1>About Me :</h1>
        <p>
          I`m a passionate developer with experience in React, Next.js, and more. I enjoy building web applications and learning new technologies.
        </p>
        <Link href="/">
          <p className='mt-6'>Back to Home</p>
        </Link>
      </main>
    </div>
  );
}
