// AuthLayout.jsx (New Layout)
import { useEffect, useState } from "react";

export default function AuthLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Read from localStorage or default to false
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // Convert to boolean
  });

  useEffect(() => {
    // Optionally apply dark mode to the document body
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <main
        className={`transition-colors duration-300 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        {children} {/* Render the login or signup form here */}
      </main>
    </div>
  );
}
