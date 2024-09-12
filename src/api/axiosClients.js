import axios from "axios";
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    paramsSerializer: {
        serialize: (params) => {
            return new URLSearchParams(params).toString();
        },
    },
});

function getCookieValue(cookieName) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        // Check if the cookie starts with the provided name
        if (cookie.startsWith(cookieName + "=")) {
            // Extract and return the cookie value
            return cookie.substring(cookieName.length + 1);
        }
    }

    // Return null if the cookie is not found
    return null;
}

axiosClient.interceptors.request.use(async (config) => {
    // const token = getCookieValue('access_token')
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["ngrok-skip-browser-warning"] = true;
    // config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vc2hhcmUuZGFvbWluaHR1LmNvbS9hcGkvdXNlcnMvYXV0aC9sb2dpbi9mYWNlYm9vay9jYWxsYmFjayIsImlhdCI6MTY4NjcyNzk0NiwiZXhwIjoxNjg3MDg3OTQ2LCJuYmYiOjE2ODY3Mjc5NDYsImp0aSI6IjlDNHk0ajNMMUxFQjIyS0QiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.jEKionOM4BKhZ7zIO_s4-ERWH5Dcw4u7vKrbtgUTJf0`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response.data;
    },
    (error) => {
        if (error.response.status && error.response.status === 401) {
            window.localStorage.removeItem("access_token");
        }
        throw error;
    }
);
export const sendGet = (url, params) => axiosClient.get(url, { params });
export const sendPost = (url, params, queryParams) =>
    axiosClient.post(url, params, { params: queryParams });
export const sendPut = (url, params) => axiosClient.put(url, params);
export const sendPatch = (url, params) => axiosClient.patch(url, params);
export const sendDelete = (url, params) => axiosClient.delete(url, params);
export default axiosClient;