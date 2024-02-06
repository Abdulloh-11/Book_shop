import axios from 'axios'
import {BASE_URL} from "./configuration";

const instance = axios.create({
    baseURL: `${BASE_URL}/api/`,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

instance.interceptors.request.use(function (config) {
    if (config) {
        // config.headers['Authorization'] = accessToken ? `Bearer ${accessToken}` : null
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(
    response => response,
    error => {
        if (error?.response?.status === 401) {
            let location = window.location.pathname
            if (location !== '/login') {
                window.location.replace('/login')
                localStorage.clear()
            }
        } else if (error?.response?.status <= 499 && error?.response?.status !== 404) {
            // alert("Serverda nomaʼlum xatolik yuz berdi")
        } else if (error?.response?.status !== 404) {
            // alert("Serverda nomaʼlum xatolik yuz berdi")
        }
        return Promise.reject(error)
    }
)

export {instance as axios}