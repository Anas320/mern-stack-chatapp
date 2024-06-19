import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_APP_URL;

export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const loginApi = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    return response.data.token;
  } catch (err) {
    console.error(err);
  }
};
