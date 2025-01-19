import Head from 'next/head';

import { Sour_Gummy } from 'next/font/google';

import Header from '@/components/header';

// // Import Montserrat font
const gummy = Sour_Gummy({
    subsets: ['latin'],
    weight: ['400'], // Adjust weights as needed
    variable: '--font-montserrat', // Optional: Custom CSS variable for the font
});

export default function Sketchbook() {
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
            <main className="flex items-start justify-center min-h-[75vh] md:items-center sm:items-center sm:pt-0">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-3/4 py-12">
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC025.TIFF" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC026.TIFF" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC031.TIFF" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC032.TIFF" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC033.TIFF" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC038.TIFF" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC041.TIFF" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC043.TIFF" alt=""/>
                        </div>
                            <img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC044.TIFF" alt=""/>
                        <div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC025.TIFF" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC025.TIFF" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC025.TIFF" alt=""/>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    );
}
