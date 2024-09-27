import React, { useState } from "react";
import GeminiChatBot from "./GeminiChatBot";
import Ailogo from "../../assets/img/Ai.png";
export default function ChatbotButton() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible((prev) => !prev);
  };

  return (
    <div className="fixed bottom-5 left-5">
      {/* Button to open the chatbot */}
      {!isChatbotVisible && (
        <button
          onClick={toggleChatbot}
          type="button"
          className="w-16 transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img src={Ailogo} alt="Chatbot Icon" />
        </button>
      )}

      {/* Chatbot with close button and animation */}
      {isChatbotVisible && (
        <div className="fixed bottom-5  left-5   rounded-lg bg-white transform transition-transform duration-300 ease-in-out animate__animated animate__fadeInUp">
          <GeminiChatBot closeChatbot={toggleChatbot} />
        </div>
      )}
    </div>
  );
}
