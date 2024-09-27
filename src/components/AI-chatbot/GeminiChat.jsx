import React, { useState } from "react";
import axios from "axios";

const GeminiChat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "AIzaSyCBw8CFbUNreTcCNGq4eTJRDrnymJIXhTU"; // Replace with your actual API key
  const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: message }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setResponse(result.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Wifi Slow Please wait");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="gemini-chat">
      <h1>Gemini Chat</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here"
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Asking..." : "Send"}
        </button>
      </form>
      {response && (
        <div className="response">
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
