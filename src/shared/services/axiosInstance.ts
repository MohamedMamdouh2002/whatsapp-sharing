import { API_CONFIG } from '../..//config/api';
import axios from 'axios';
import { localStorageService } from './localStorageService ';
import { StorageKeys } from '../constants/localStorageConstants';

const axiosInstance = axios.create({
    baseURL: API_CONFIG.BASE_URL,
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (token) {
            prom.resolve(token);
        } else {
            prom.reject(error);
        }
    });

    failedQueue = [];
};

axiosInstance.interceptors.request.use(config => {
    const token = localStorageService.getItem<any>(StorageKeys.TOKEN)?.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            const storedTokens = localStorageService.getItem<any>(StorageKeys.TOKEN);
            // const storedTokens = localStorageService.getItem<UserToken>(StorageKeys.TOKEN);

            if (!storedTokens?.refreshToken) {
                localStorageService.removeItem(StorageKeys.TOKEN);
                return Promise.reject(error);
            }

            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                }).then(token => {
                    originalRequest.headers['Authorization'] = 'Bearer ' + token;
                    return axiosInstance(originalRequest);
                });
            }

            isRefreshing = true;

            try {
                const res = await axios.post(`${API_CONFIG.BASE_URL}/auth/RefreshToken`, {
                    refreshToken: storedTokens.refreshToken,
                });

                const newToken:any = res.data;
                // const newToken: UserToken = res.data;
                localStorageService.setItem(StorageKeys.TOKEN, newToken);

                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken.accessToken}`;
                processQueue(null, newToken.accessToken);
                return axiosInstance(originalRequest);
            } catch (err) {
                processQueue(err, null);
                localStorageService.removeItem(StorageKeys.TOKEN);
                return Promise.reject(err);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;