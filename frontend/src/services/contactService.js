import api from "./api";

export async function submitEnquiry(formData) {
  const response = await api.post("/contact", formData);
  return response.data;
}