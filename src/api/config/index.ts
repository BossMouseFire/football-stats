import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { IApiClient, RequestConfig } from './types';
import { axiosConfig } from './axiosConfig';

class ApiClient implements IApiClient {
    private client: AxiosInstance;

    constructor(apiConfiguration: AxiosInstance) {
        this.client = apiConfiguration;
    }

    async post<TRequest, TResponse>(
        path: string,
        payload: TRequest,
        config?: RequestConfig,
    ): Promise<TResponse> {
        const response = config
            ? await this.client.post<TResponse>(path, payload, config)
            : await this.client.post<TResponse>(path, payload);
        return response.data;
    }

    async patch<TRequest, TResponse>(
        path: string,
        payload: TRequest,
    ): Promise<TResponse> {
        const response = await this.client.patch<TResponse>(path, payload);
        return response.data;
    }

    async put<TRequest, TResponse>(
        path: string,
        payload?: TRequest,
        config?: AxiosRequestConfig,
    ): Promise<TResponse> {
        const response = await this.client.put<TResponse>(
            path,
            payload,
            config,
        );
        return response.data;
    }

    async get<TResponse>(
        path: string,
        config?: AxiosRequestConfig,
    ): Promise<TResponse> {
        const response = await this.client.get<TResponse>(path, config);
        return response.data;
    }
}

const api = new ApiClient(axiosConfig);

export default api;
