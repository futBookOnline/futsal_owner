import { useAxios } from "@/helpers/axios.js";

export const sendVerificationEmail = async (email) => {
  const method = "post";
  const url = "email/verification";
  const subject = "Verification your email";
  const payload = { email, subject };
  const response = await useAxios(url, method, payload);
  return response;
};

export const checkIfEmailExists = async (email) => {
  const method = "post";
  const url = "owners/emailExists";
  const payload = { email };
  try {
    const response = await useAxios(url, method, payload);
    return response.data.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      return false; // Email does not exist
    }
  }
};

export const registerFutsalOwner = async (payload) => {
  const method = "post";
  const url = "owners/register";
  const response = await useAxios(url, method, payload);
  return response.data;
};

export const createFutsalProfile = async (payload) => {
  const method = "post";
  const url = "venues/add";
  const response = await useAxios(url, method, payload);
  return response?.data;
};

export const login = async (payload) => {
  const method = "post"
  const url = "owners/login"
  const response = await useAxios(url, method, payload)
  return response?.data
}
