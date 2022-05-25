import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_REGISTER_API;

const RegisterApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

/**
 * Send a request to the server to register a new user
 * 
 * @param {Object} user
 * @returns promise
 * 
 * @example
 * user = {
 *  email: string, required
 *  firstname: string, required
 *  lastname: string, required
 *  wallet: string, required
 *  phone: string, optional
 * }
 */
async function register(user) {
  const response = await RegisterApi.post("/infouser", user);
  return response.data;
}

export default register
