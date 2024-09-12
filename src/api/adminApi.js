import { sendGet, sendPost } from "./axiosClients";

export const getListUser = (data) => sendGet('/admin/account', data);
export const updateInfo = (data) => sendPost('/admin/account/update-info', data);
export const updateCoin = (data) => sendPost('/admin/account/update-coin', data);
export const updateStatus = (data) => sendPost('/admin/account/update-status', data);
