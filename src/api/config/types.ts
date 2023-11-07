export type HttpHeaders = {
    [key: string]: string;
};

export type RequestConfig = {
    headers: HttpHeaders;
};

export interface IApiClient {
    post<TRequest, TResponse>(
        path: string,
        object: TRequest,
        config?: RequestConfig,
    ): Promise<TResponse>;
    patch<TRequest, TResponse>(
        path: string,
        object: TRequest,
    ): Promise<TResponse>;
    put<TRequest, TResponse>(
        path: string,
        object: TRequest,
    ): Promise<TResponse>;
    get<TResponse>(path: string): Promise<TResponse>;
}
