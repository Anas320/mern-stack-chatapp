import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_APP_URL;

// Function to get the authentication token from local storage
const getToken = () => {
  return localStorage.getItem("token");
};

// Function to set the authorization header with the token
const authHeader = () => {
  const token = getToken();
  if (token) {
    return { Authorization: `${token}` };
  } else {
    return {};
  }
};

// Function to fetch messages
const fetchAllMessages = async () => {
  try {
    const response = await axios.get(`${API_URL}/messages`, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

// Function to send a new message
const sendMessage = async (messageContent) => {
  try {
    const response = await axios.post(
      `${API_URL}/messages`,
      { content: messageContent },
      {
        headers: authHeader(),
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export { fetchAllMessages, sendMessage };
