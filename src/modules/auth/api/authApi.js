import { useAxios } from "@/helpers/axios.js";

export const sendVerificationEmail = async (email) => {
  const method = "post";
  const url = "email/verification";
  const subject = "Verification your email"
  const payload = {email,subject}
  const response = await useAxios(url, method, payload);
  return response;
};


export const registerFutsalOwner = async (payload) => {
  const method = "post";
  const url = "owners/register";
  const response = await useAxios(url, method, payload);
  return response.data;
};


export const createFutsalProfile = async(payload) => {
  const method = "post"
  const url = "venues/add"
  const response = await useAxios(url, method, payload)
  return response
}