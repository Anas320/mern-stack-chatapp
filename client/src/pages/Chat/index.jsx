import React, { useEffect, useState } from "react";

import socket from "src/socket";
import { fetchAllMessages, sendMessage } from "src/service/messageService";

socket.on("connect", () => {
  console.log("Connected to the server");

  // Emit a test event
  socket.emit("testEvent", { message: "Hello, server!" });

  // Listen for a response from the server
  socket.on("testResponse", (data) => {
    console.log("Received response from server:", data);
  });
});

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    console.log(
      "process.env.REACT_APP_BACKEND_APP_URL:  ",
      process.env.REACT_APP_BACKEND_APP_URL
    );
    const fetchMessages = async () => {
      try {
        const data = await fetchAllMessages();
        console.log("fetchAllMessages : ", data);
        setMessages(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();

    socket.on("newMessage", (message) => {
      console.log("message : ", message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => socket.off("newMessage");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(content);
      setContent("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-4 bg-white rounded shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Chat</h1>
        <div className="mb-4">
          {messages?.map((message) => (
            <div key={message.id} className="mb-2">
              <strong>{message.username}:</strong> {message.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            placeholder="Type a message"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="flex-1 p-2 mr-2 border border-gray-300 rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 rounded text-white">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
