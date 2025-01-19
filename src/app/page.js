import Head from 'next/head';

import { Sour_Gummy } from 'next/font/google';

import Header from '@/components/header';
import ImageZoom from '@/components/imageZoom';

const gummy = Sour_Gummy({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-gummy',
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
            <Header />

            {/* Main Content */}
            <main className="flex items-start justify-center min-h-[75vh] sm:items-center sm:pt-0 pt-32">
                <ImageZoom className="lg:w-1/3 w-2/3 flex flex-col justify-center items-center">
                    <img
                        src="baller.png"
                        alt="Main Visual"
                        className="rounded-lg shadow-2xl"
                    />
                </ImageZoom>
            </main>
        </div>
    );
}
