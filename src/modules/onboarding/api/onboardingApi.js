import { useAxios } from "@/helpers/axios";

export const submitFutsalData = async (payload, id) => {
  const method = "put";
  const url = `venues/update/${id}`; // Corrected URL formatting, no quotes
  const response = await useAxios(url, method, payload);
  return response.data; // Assuming useAxios returns the Axios response object
};

export const getCurrentVenue = async (id) => {
  const method = "get";
  const url = `venues/current/${id}`;
  const response = await useAxios(url, method);
  return response.data;
} 
