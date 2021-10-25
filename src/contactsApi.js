import axios from "axios";

axios.defaults.baseURL = "https://616db77aa83a850017caa6c2.mockapi.io";

export async function fetchAllContacts() {
  const response = await axios.get("/contacts");
  return response;
}

export async function postContact({ name, number }) {
  return await axios({
    method: "post",
    url: "/contacts",
    data: {
      name,
      number,
    },
  });
}

export async function deleteContactById(id) {
  return await axios({
    method: "delete",
    url: `/contacts/${id}`,
  });
}
