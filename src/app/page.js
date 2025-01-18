import Head from 'next/head';

import { Sour_Gummy } from 'next/font/google';

import Header from '../components/header';

// // Import Montserrat font
const gummy = Sour_Gummy({
  subsets: ['latin'],
  weight: ['400'], // Adjust weights as needed
  variable: '--font-montserrat', // Optional: Custom CSS variable for the font
});

export default function Home() {
  return (
    <div className={`min-h-screen bg-neutral-100`}>
      <Head>
        <title>Basic Homepage</title>
        <meta name="description" content="Nina Tostevin's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Header/>

      {/* Main Content */}
      <main className="flex items-start justify-center min-h-[75vh] md:items-center sm:items-center sm:pt-0 pt-32">
        <img
          // src="/jazzy.png"
          src="baller.png"
          alt="Main Visual"
          className="rounded-lg shadow-2xl sm:w-1/3 w-2/3"
        />
      </main>

    </div>
  );
}
