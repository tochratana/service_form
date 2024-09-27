import { useState, useEffect } from "react";

const ScrollToDownButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled beyond 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the bottom smoothly
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scroll behavior
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-10 right-20 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
          aria-label="Scroll to bottom"
        >
          ↓
        </button>
      )}
    </div>
  );
};

export default ScrollToDownButton;
