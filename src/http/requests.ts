import { AxiosResponse } from "axios";
import $http from "./index";

export const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const requests = {
    get: <T>(url: string, params?: any) => {
        return $http.get<T>(url, {
            params: params
        }).then(responseBody)
    }
};