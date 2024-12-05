"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "../server/Modal";
import Link from "next/link";

export default function AIFantasyContent({ fantasies }) {
  const [showMore, setShowMore] = useState(false);
  const [selectedFantasy, setSelectedFantasy] = useState(null);

  const displayedFantasies = showMore ? fantasies : fantasies.slice(0, 3);

  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h2 className="text-red-500 font-semibold text-sm uppercase">
            AI Fantasies
          </h2>
          <h1 className="text-4xl font-bold text-white mb-4">
            Live your dream experience.
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedFantasies.map((fantasy, index) => (
            <FantasyCard
              key={index}
              fantasy={fantasy}
              onClick={() => setSelectedFantasy(fantasy)}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="https://www.nectar.ai">
            <button
              className="bg-red-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-red-600 transition"
            >
              Create Fantasy
            </button>
          </Link>
          <button
            className="bg-gray-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-600 transition"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedFantasy && (
        <Modal fantasy={selectedFantasy} onClose={() => setSelectedFantasy(null)} />
      )}
    </section>
  );
}

function FantasyCard({ fantasy, onClick }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
      onClick={onClick}
    >
      {/* Card Image */}
      <Image
        src={fantasy.image}
        alt={fantasy.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
        {/* Title with Avatar */}
        <div className="flex items-center mb-2">
          <Image
            src={fantasy.avatar}
            alt={`${fantasy.title} avatar`}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full mr-2 border border-gray-700"
          />
          <h3 className="text-lg font-bold text-white">{fantasy.title}</h3>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {fantasy.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-gray-400 text-sm">
          {/* Views */}
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-1.73.44-3.47.44-5.2 0C5.57 18.5 4 15.91 4 12s1.57-6.5 3.8-7.93C9.53 3.57 11.27 3.57 13 4c1.73.44 3.47.44 5.2 0C18.43 5.5 20 8.09 20 12s-1.57 6.5-3.8 7.93c-1.73.44-3.47.44-5.2 0z" />
            </svg>
            <span>{fantasy.views}</span>
          </div>

          {/* Like Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLiked((prev) => !prev);
            }}
            className="flex items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${liked ? "text-red-500" : "text-gray-400"
                }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>{fantasy.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}


