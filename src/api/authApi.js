import { sendPost } from "./axiosClients";

export const login = (data) => sendPost('/admin/auth/login', data);
export const register = (data) => sendPost('/admin/auth/register', data);
