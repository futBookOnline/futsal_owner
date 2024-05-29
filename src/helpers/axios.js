import axios from "axios";

export const useAxios = async (url, method, payload) => {
  const apiUrl = `https://futsal-backend.onrender.com/${url}`;
  const httpMethod = method.toUpperCase();
  let result;
  switch (httpMethod) {
    case "GET":
      result = await axios.get(apiUrl);
      break;
    case "POST":
      result = await axios.post(apiUrl, payload);
      break;
  }
  return result;
};
