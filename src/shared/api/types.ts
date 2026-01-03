import type { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { IApiExceptionData } from './exceptions';

export type TRequestId = string | symbol;

export type TApiService = AxiosInstance &
  Partial<{
    onRequest: (arg0: InternalAxiosRequestConfig) => void;
    onResponse: (arg0: AxiosResponse) => AxiosResponse;
    onFailure: (arg0: AxiosError<IApiExceptionData>) => AxiosError<IApiExceptionData> | void;
    onAuthFailure: (arg0: AxiosError<IApiExceptionData>) => void | Promise<void>;
  }>;
