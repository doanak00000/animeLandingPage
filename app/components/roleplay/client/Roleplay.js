'use client';

import { useState, useEffect } from 'react';
import CategoryFilter from './CategoryFilter';
import Card from './Card';
import Link from 'next/link';

const getCharacters = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    name: 'Jennifer Robbie',
                    description:
                        "Get to know me better 🤍 This is what I'm up to when my husband's away",
                    category: 'Alien',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Eliza Kennedy',
                    description:
                        "Hi, my name is Elizabeth, but my friends call me Eliza! My family is super traditional, so c...",
                    category: 'Arab',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Eunji Kim',
                    description:
                        'Hi! You can call me Eunji 🌟 21 years old from Korea! ❤️ I love taking photos and admire th...',
                    category: 'Action',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Eunji Kim',
                    description:
                        'Hi! You can call me Eunji 🌟 21 years old from Korea! ❤️ I love taking photos and admire th...',
                    category: 'Action',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Eunji Kim',
                    description:
                        'Hi! You can call me Eunji 🌟 21 years old from Korea! ❤️ I love taking photos and admire th...',
                    category: 'Action',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Eunji Kim',
                    description:
                        'Hi! You can call me Eunji 🌟 21 years old from Korea! ❤️ I love taking photos and admire th...',
                    category: 'Action',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Eunji Kim',
                    description:
                        'Hi! You can call me Eunji 🌟 21 years old from Korea! ❤️ I love taking photos and admire th...',
                    category: 'Action',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Eunji Kim',
                    description:
                        'Hi! You can call me Eunji 🌟 21 years old from Korea! ❤️ I love taking photos and admire th...',
                    category: 'Action',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Eunji Kim',
                    description:
                        'Hi! You can call me Eunji 🌟 21 years old from Korea! ❤️ I love taking photos and admire th...',
                    category: 'Action',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Eunji Kim',
                    description:
                        'Hi! You can call me Eunji 🌟 21 years old from Korea! ❤️ I love taking photos and admire th...',
                    category: 'Action',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Eunji Kim',
                    description:
                        'Hi! You can call me Eunji 🌟 21 years old from Korea! ❤️ I love taking photos and admire th...',
                    category: 'Action',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Katie Adams',
                    description:
                        "Hi! I'm Katie - I'm a cheerleader and I'm ready to cheer you up anytime :)",
                    category: 'Assistant',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Mika Tanaka',
                    description: "Hi! I'm Mika, a curious and adventurous soul who loves exploring!",
                    category: 'Anime',
                    image: '/images/fantasy/fantasy.png',
                },
                {
                    name: 'Liam Smith',
                    description: "Hi! I'm Liam, a private detective solving mysteries one clue at a time.",
                    category: 'Detective',
                    image: '/images/fantasy/fantasy.png',
                },
            ]);
        }, 300); // Simulate a 300ms delay
    });
};

export default function Roleplay() {
    const [characters, setCharacters] = useState([]);
    const [activeCategory, setActiveCategory] = useState('Action');
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        // Fetch data on component mount
        const fetchCharacters = async () => {
            const data = await getCharacters();
            setCharacters(data);
        };

        fetchCharacters();
    }, []);

    // Filter characters by active category
    const filteredCharacters = characters.filter(
        (character) => character.category === activeCategory
    );

    console.log("filteredCharacters", filteredCharacters)

    // Decide how many characters to display
    const visibleCharacters = showMore
        ? filteredCharacters
        : filteredCharacters.slice(0, 4);

    return (
        <section className="bg-black text-white ">
            <header className="mb-8">
                <h2 className="text-red-500 font-semibold text-sm uppercase">
                    AI Roleplay
                </h2>
                <h1 className="text-4xl font-bold text-white mb-4">
                    Recommended for you
                </h1>
            </header>
            <CategoryFilter onCategoryChange={setActiveCategory} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {visibleCharacters.length > 0 ? (
                    visibleCharacters.map((character, index) => (
                        <Card key={index} character={character} />
                    ))
                ) : (
                    <p className="text-gray-400 col-span-full">
                        No characters found for "{activeCategory}".
                    </p>
                )}
            </div>

            <div className="mt-8 flex justify-center gap-4">
                <Link href="https://www.nectar.ai">
                    <button
                        className="bg-red-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-red-600 transition"
                    >
                        Create AI boyfriend
                    </button>
                </Link>
                {filteredCharacters.length > 4 && (
                    <button
                        className="bg-gray-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-600 transition"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                )}
            </div>
        </section>
    );
}
