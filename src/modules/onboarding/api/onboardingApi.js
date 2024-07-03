// import { useAxios } from "@/helpers/axios";

// export const submitFutsalData = async (payload, id) => {
//   console.log("the id is:", id);
//   const method = "put"
//   const url = `venues/update/${id}`
//   const response = await useAxios(url, method, payload)
//   return response
// }

import { useAxios } from "@/helpers/axios";

export const submitFutsalData = async (payload, id) => {
  console.log("the id is:", id);
  const method = "put";
  const url = `venues/update/${id}`; // Corrected URL formatting, no quotes
  const response = await useAxios(url, method, payload);
  return response; // Assuming useAxios returns the Axios response object
};
