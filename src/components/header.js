
import { Montserrat, font, Knewave, Sour_Gummy } from 'next/font/google';

const gummy = Sour_Gummy({
    subsets: ['latin'],
    weight: ['400'], // Adjust weights as needed
    variable: '--font-montserrat', // Optional: Custom CSS variable for the font
});

export default function Header() {
    return (
        <header className="sm:mx-0 mx-4">
            <nav className="container mx-auto py-4 flex justify-between items-center">
                <a href="/" className={`${gummy.className} whitespace-nowrap tracking-wide text-4xl sm:text-7xl text-black`}>Nina Tostevin</a>
                <ul className={`flex flex-col  sm:mt-8 space-y-4 text-lg ${gummy.className}`}>
                    <li>
                        <a href="/" className="text-gray-700 text-lg hover:text-red-800">Home</a>
                    </li>
                    <li>
                        <a href="/works" className="text-gray-700 text-lg hover:text-red-800">Works</a>
                    </li>
                    <li>
                        <a href="/about" className="text-gray-700 text-lg hover:text-red-800">About</a>
                    </li>
                    <li>
                        <a href="mailto:nina.tost@icloud.com" className="whitespace-nowrap text-gray-700 text-lg hover:text-red-800">Email me!</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}