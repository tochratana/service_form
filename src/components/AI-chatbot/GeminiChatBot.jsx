import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Send, User, Bot } from "lucide-react";
import CleanResponse from "./CleanResponse";

const API_KEY = "AIzaSyBHlB7ByOUO14eBDUwaMuTeuZXZ8TcZPjw"; // Replace with your actual API key
const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

const GeminiChatBot = ({ closeChatbot }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Check for exit phrases
    const exitPhrases = ["bye", "okay bye", "goodbye", "see you", "later"];
    const userMessage = { role: "user", content: input };

    // Close the chatbot if input matches exit phrases
    if (exitPhrases.some((phrase) => input.toLowerCase().includes(phrase))) {
      closeChatbot();
      setMessages((prev) => [...prev, userMessage]); // Optionally show the farewell message
      setInput("");
      return;
    }

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: input }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const aiMessageText = result.data.candidates[0].content.parts[0].text;

      // Check if the last AI message is the same
      if (
        messages[messages.length - 1]?.role === "ai" &&
        messages[messages.length - 1]?.content === aiMessageText
      ) {
        setIsLoading(false);
        return; // Prevent adding duplicate AI messages
      }

      const aiMessage = {
        role: "ai",
        content: aiMessageText,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        role: "ai",
        content: "An error occurred while fetching the response.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-[300px] shadow-xl rounded-lg overflow-hidden">
      <button
        onClick={closeChatbot}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition"
      >
        ✖
      </button>

      <div className="flex flex-col h-[400px] max-h-[80vh]">
        <div className="px-4 py-3 border-b bg-primary-500 text-white rounded-t-lg">
          <h2 className="text-lg font-semibold">Chatbot Assistant</h2>
        </div>
        <div
          className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2"
          id="chatDisplay"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start mb-4 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className={`flex items-start space-x-2 max-w-full`}>
                <div
                  className={`p-2 rounded-full ${
                    message.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="h-6 w-6" />
                  ) : (
                    <Bot className="h-6 w-6" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    message.role === "user" ? "bg-blue-100" : "bg-gray-100"
                  } max-w-[70%] shadow-md transition duration-200`}
                >
                  {message.role === "user" ? (
                    message.content
                  ) : (
                    <CleanResponse content={message.content} />
                  )}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center justify-start mb-4">
              <div className="bg-gray-200 p-3 rounded-lg">
                <div className="animate-pulse flex space-x-2">
                  <div className="rounded-full bg-gray-400 h-2 w-2"></div>
                  <div className="rounded-full bg-gray-400 h-2 w-2"></div>
                  <div className="rounded-full bg-gray-400 h-2 w-2"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="px-3 py-2 border-t">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg text-sm"
                id="chatInput"
              />
              <button
                className="bg-primary-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
                id="sendButton"
                disabled={isLoading}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GeminiChatBot;
