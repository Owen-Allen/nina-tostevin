import Header from "@/components/header"

import { Montserrat, font, Knewave, Sour_Gummy } from 'next/font/google';

const gummy = Sour_Gummy({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-gummy',
});

export default function Works() {

    return (
        <div className={`min-h-screen bg-neutral-100`}>
            <Header />

            {/* Main Content */}
            <main className="flex sm:flex-row flex-col items-start justify-center min-h-[75vh] sm:items-center sm:py-0 py-12 sm:space-y-0 space-y-4">
                {/* 3 images, sketchbook, colour, short stories, books */}
                <a href="/works/sketchbook" className="flex flex-col space-y-4 items-center">
                    <img
                        src="baller.png"
                        alt="Main Visual"
                        className={`rounded-lg shadow-2xl w-3/4`}
                    />
                    <div className={`text-black ${gummy.className}`}>sketchbook</div>
                </a>
                <a href="/works/colour" className="flex flex-col space-y-4 items-center">
                    <img
                        src="baller.png"
                        alt="Main Visual"
                        className={`rounded-lg shadow-2xl w-3/4`}
                    />
                    <div className={`text-black ${gummy.className}`}>colour</div>
                </a>
                <a href="/works/stories" className="flex flex-col space-y-4 items-center">
                    <img
                        src="baller.png"
                        alt="Main Visual"
                        className={`rounded-lg shadow-2xl w-3/4`}
                    />
                    <div className={`text-black ${gummy.className}`}>stories</div>
                </a>
            </main>
        </div>
    )
}