'use client';

import { useState } from 'react';

const categories = [
  'Action',
  'Alien',
  'Anime',
  'Arab',
  'Asexual',
  'Assistant',
  'BBW',
  'BDSM',
  'Bisexual',
  'Bondage',
  'Books',
  'Breeding',
  'Bully',
  'CNC',
  'Chastity',
  'Cheating',
  'Dandere',
  'Demi Human',
  'Deredere',
  'Detective',
  'Dilf',
  'Dominant',
  'Elf',
  'Fandom',
];

export default function CategoryFilter({onCategoryChange}) {
  const [activeCategory, setActiveCategory] = useState('Action');

  return (
    <div className=" p-4 overflow-x-auto flex space-x-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${
            activeCategory === category
              ? 'bg-gray-800 text-white'
              : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white'
          }`}
          onClick={() => {setActiveCategory(category);onCategoryChange(category)}}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
