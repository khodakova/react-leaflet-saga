import axios, {AxiosError} from "axios";

const API_URL = 'http://localhost:4000';

const $http = axios.create({
    baseURL: API_URL,
});

// перехватчик на ответы
$http.interceptors.response.use(
    async (response) => {
        return response;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

export default $http;