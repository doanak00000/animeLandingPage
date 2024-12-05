"use client";
import { useState, useEffect } from "react";
import PreferenceSwitcher from "./PreferenceSwitcher";

export default function ClientWrapper({ children }) {
  const [currentSection, setCurrentSection] = useState("girls");
  
  useEffect(() => {
    const savedPreference = localStorage.getItem("contentPreference");
    if (savedPreference) {
      setCurrentSection(savedPreference);
    }
  }, []);

  return (
    <>
      <PreferenceSwitcher onSelect={setCurrentSection} />
      {children(currentSection, setCurrentSection)}
    </>
  );
}
