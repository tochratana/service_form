import ChatbotButton from "../AI-chatbot/ChatbotButton";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../button/scroll/ScrollToTop";
import UnstickyNavbar from "../navbar/UnstickyNavbar";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function RootLayout() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Read from localStorage or default to false
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // Convert to boolean
  });

  // Toggle dark mode state and save to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode); // Save to localStorage
      return newMode;
    });
  };

  useEffect(() => {
    // Optionally apply dark mode to the document body
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <UnstickyNavbar />
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main
        className={`transition-colors duration-300 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <Outlet />
      </main>
      <ChatbotButton />
      <ScrollToTopButton />

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
