import axios from "axios";

axios.defaults.baseURL = "https://616db77aa83a850017caa6c2.mockapi.io";

export async function fetchAllContacts() {
  const response = await axios.get("/contacts");
  return response;
}
