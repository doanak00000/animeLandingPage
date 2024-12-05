
import Link from "next/link";
import { useEffect, useState } from "react";
const getCategories = () => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: "seductive posture, medium breasts",
                    description: "High Resolution, Portrait, Body stocking, On All Fours",
                    images: [
                        "/images/anime/milo.png",
                        "/images/anime/milo.png",
                        "/images/anime/milo.png",
                    ],
                },
                {
                    id: 2,
                    name: "focus face, smiling, bunny, pink hair",
                    description: "Nectar 2.5 Model, Full HD, Portrait, Bunny Costume",
                    images: [
                        "/images/girls/mellow.png",
                        "/images/girls/mellow.png",
                        "/images/girls/mellow.png",
                    ],
                },
                {
                    id: 3,
                    name: "seductive posture, medium breasts",
                    description: "Full HD, Portrait, Body stocking, On All Fours",
                    images: [
                        "/images/guys/jay.png",
                        "/images/guys/jay.png",
                        "/images/guys/jay.png",
                    ],
                },
            ]);
        }, 300); // Simulates 300ms delay
    });
};

const CreateAiImage = () => {

    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            const data = await getCategories();
            setCategories(data);
            setActiveCategory(data[0]);
            setLoading(false);
        };

        fetchCategories();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
                <p>Loading...</p>
            </div>
        );
    }


    return (
        <div className="flex flex-col py-8  text-white">
            <header className="mb-8">
                <h2 className="text-red-500 font-semibold text-sm uppercase">
                    Generate AI Image
                </h2>
                <h1 className="text-4xl font-bold text-white mb-4">
                    Beautiful erotic art in seconds.
                </h1>
                <p className="text-gray-400 max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                </p>
            </header>

            <div className="lg:flex w-full bg-gray-900 p-4">
                {/* Sidebar Categories */}
                <div className="w-full lg:w-1/3">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            onClick={() => setActiveCategory(category)}
                            className={`p-4 cursor-pointer ${activeCategory.id === category.id
                                ? "bg-gray-800 border-l-4 border-red-500 text-white"
                                : "bg-gray-900 text-gray-400 border-gray-500 border-l-4"
                                }`}
                        >
                            <h2 className="text-sm font-semibold capitalize">
                                {category.name}
                            </h2>
                            <p className="text-xs">{category.description}</p>
                        </div>
                    ))}
                    <Link href="https://www.nectar.ai">
                        <button className="mt-8 px-6 py-3 bg-red-600 text-white font-bold rounded-2xl shadow hover:bg-red-500">
                            Generate Image →
                        </button>
                    </Link>
                </div>

                {/* Image Gallery */}
                <div className="w-full lg:w-2/3 grid grid-cols-3 gap-4 p-4">
                    {activeCategory.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Category ${activeCategory.name} Image ${index + 1}`}
                            className="rounded-lg shadow-lg object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreateAiImage;
