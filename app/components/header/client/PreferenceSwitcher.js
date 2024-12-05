"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const PreferenceSwitcher = ({ onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasPreference = localStorage.getItem("contentPreference");
    if (!hasPreference) {
      setIsVisible(true);
    }
  }, []);

  const handleSelect = (preference) => {
    localStorage.setItem("contentPreference", preference);
    onSelect(preference);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">I'm interested in</h2>
        <div className="grid grid-cols-3 gap-4">
          {["girls", "guys", "anime"].map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="bg-gray-700 hover:bg-gray-600 text-white py-4 px-6 rounded-lg capitalize transition-all"
            >
              <Image
                src="/images/anime/milo.png"
                alt={option}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreferenceSwitcher;
