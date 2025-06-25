import api from "../js/AxiosConfig";

export const getProducts = async (request) => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al obtener formularios");
  }
};