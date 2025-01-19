import Head from 'next/head';

import { Sour_Gummy } from 'next/font/google';

import Header from '@/components/header';
import ImageZoom from '@/components/imageZoom';

const gummy = Sour_Gummy({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-gummy',
});

export default function Colour() {
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-5/6 sm:w-3/4 py-12">
                    <div className="grid gap-4">
                        <div>
                            <ImageZoom><img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC025.TIFF" alt="" /></ImageZoom>
                        </div>
                        <div>
                            <ImageZoom><img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC026.TIFF" alt="" /></ImageZoom>
                        </div>
                        <div>
                            <ImageZoom><img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC031.TIFF" alt="" /></ImageZoom>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <ImageZoom><img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC032.TIFF" alt="" /></ImageZoom>
                        </div>
                        <div>
                            <ImageZoom><img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC033.TIFF" alt="" /></ImageZoom>
                        </div>
                        <div>
                            <ImageZoom><img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC038.TIFF" alt="" /></ImageZoom>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <ImageZoom><img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC041.TIFF" alt="" /></ImageZoom>
                        </div>
                        <div>
                            <ImageZoom><img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC043.TIFF" alt="" /></ImageZoom>
                        </div>
                        <ImageZoom><img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC044.TIFF" alt="" /></ImageZoom>
                        <div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <ImageZoom><img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC025.TIFF" alt="" /></ImageZoom>
                        </div>
                        <div>
                            <ImageZoom><img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC025.TIFF" alt="" /></ImageZoom>
                        </div>
                        <div>
                            <ImageZoom><img className="h-auto max-w-full rounded-lg" src="/sketchbook/DOC025.TIFF" alt="" /></ImageZoom>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    );
}
