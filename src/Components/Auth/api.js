import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/users';

export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, user);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
