import { sendGet } from "./axiosClients";

export const getListUser = (data) => sendGet('/admin/account', data);
