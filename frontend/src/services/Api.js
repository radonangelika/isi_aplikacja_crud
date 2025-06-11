import axios from "axios";

const API = "https://salon-backend-87g8.onrender.com/api/klientki";

export const getAll = () => axios.get(API);
export const getById = (id) => axios.get(`${API}/${id}`);
export const create = (data) => axios.post(API, data);
export const update = (id, data) => axios.put(`${API}/${id}`, data);
export const remove = (id) => axios.delete(`${API}/${id}`);
