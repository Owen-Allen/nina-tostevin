import Header from "@/components/header"

import { Montserrat, font, Knewave, Sour_Gummy } from 'next/font/google';


const gummy = Sour_Gummy({
    subsets: ['latin'],
    weight: ['400'], // Adjust weights as needed
    variable: '--font-montserrat', // Optional: Custom CSS variable for the font
});

export default function Works() {

    return (
        <div className={`min-h-screen bg-neutral-100`}>
            <Header />

            {/* Main Content */}
            <main className="flex sm:flex-row flex-col items-start justify-center min-h-[75vh] sm:items-center sm:py-0 py-12 sm:space-y-0 space-y-4"> 
                {/* 3 images, sketchbook, colour, short stories, books */}
                <div className="flex flex-col space-y-4 items-center">
                    <img
                        // src="/jazzy.png"
                        src="baller.png"
                        alt="Main Visual"
                        className={`rounded-lg shadow-2xl w-3/4`}
                    />
                    <a href="/works/sketchbook" className={`text-black ${gummy.className}`}>sketchbook</a>
                </div>
                <div className="flex flex-col space-y-4 items-center">
                    <img
                        // src="/jazzy.png"
                        src="baller.png"
                        alt="Main Visual"
                        className={`rounded-lg shadow-2xl w-3/4`}
                    />
                    <a href="/works/colour" className={`text-black ${gummy.className}`}>colour</a>
                </div>
                <div className="flex flex-col space-y-4 items-center">
                    <img
                        // src="/jazzy.png"
                        src="baller.png"
                        alt="Main Visual"
                        className={`rounded-lg shadow-2xl w-3/4`}
                    />
                    <a href="/works/stories" className={`text-black ${gummy.className}`}>stories</a>
                </div>
            </main>
        </div>
    )
}