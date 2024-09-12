import { sendGet, sendPost } from "./axiosClients";

export const getListUser = (data) => sendGet('/admin/account', data);
export const updateInfo = (id, data) => sendPost(`/admin/account/update-info/${id}`, data);
export const updateCoin = (data) => sendPost('/admin/account/update-coin', data);
export const updateStatus = (data) => sendPost('/admin/account/update-status', data);
