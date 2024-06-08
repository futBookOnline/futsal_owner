import { useAxios } from "@/helpers/axios.js";

export const registerFutsal = async (payload) => {
  const method = "post";
  const url = "owners/register";
  const response = await useAxios(url, method, payload);
  return response;
};

export const sendVerificationEmail = async (email) => {
  const method = "post";
  const url = "email/verification";
  const subject = "Verification your email"
  const payload = {email,subject}
  const response = await useAxios(url, method, payload);
  return response;
};
