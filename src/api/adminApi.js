import { sendGet, sendPost } from "./axiosClients";

export const getListUser = (data) => sendGet('/admin/account', data);
export const updateInfo = (id, data) => sendPost(`/admin/account/update-info/${id}`, data);
export const updateCoin = (id, data) => sendPost(`/admin/account/update-coin/${id}`, data);
export const updateStatus = (id, data) => sendPost(`/admin/account/update-status/${id}`, data);
