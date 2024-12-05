"use client"

import { useEffect, useState } from "react";

const Navbar = ({ onSectionChange }) => {
  const [activeSection, setActiveSection] = useState("girls");
  useEffect(() => {
    const savedPreference = localStorage.getItem("contentPreference");
    if (savedPreference) {
      setActiveSection(savedPreference);
    }
  }, []);
  const handleSectionClick = (section) => {
    setActiveSection(section);
    onSectionChange(section);
  };

  return (
    <nav className="bg-black text-white py-4 px-8 flex space-x-6 ">
      {["girls", "anime", "guys"].map((section) => (
        <button
          key={section}
          className={`capitalize text-lg ${
            activeSection === section ? "text-red-500 font-bold" : "text-gray-400"
          } hover:text-red-500 transition`}
          onClick={() => handleSectionClick(section)}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
