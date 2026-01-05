import axios, { type AxiosError, type CreateAxiosDefaults, CanceledError } from 'axios';
import type { IApiExceptionData } from './exceptions';
import { AbortException, ApiException, UnauthorizedException } from './exceptions';
import { AbortRegistry } from './abortRegistry';
import type { TApiService } from './types';

export const createApiService = (config?: CreateAxiosDefaults): TApiService => {
  const instance: TApiService = axios.create(config);
  console.log('config', config)
  const abortRegistry = AbortRegistry.getRegistry();

  instance.interceptors.request.use((axiosConfig) => {
    if (axiosConfig.requestId) {
      abortRegistry.runController(axiosConfig.requestId);
      const abortController = abortRegistry.registerController(axiosConfig.requestId);
      axiosConfig.signal = abortController.signal;
    }

    instance.onRequest?.(axiosConfig);
    return axiosConfig;
  });

  instance.interceptors.response.use(
    (axiosResponse) => {
      if (axiosResponse.config.requestId) {
        abortRegistry.clearController(axiosResponse.config.requestId);
      }
      return instance.onResponse?.(axiosResponse) || axiosResponse;
    },
    async (axiosError: AxiosError<IApiExceptionData>) => {
      axiosError =
        (instance.onFailure?.(axiosError) as AxiosError<IApiExceptionData>) || axiosError;

      if (axiosError instanceof CanceledError) {
        throw new AbortException();
      }

      if (axiosError.response?.status === 401) {
        await instance.onAuthFailure?.(axiosError);
        throw new UnauthorizedException(axiosError.message, {
          data: axiosError.response?.data,
        });
      }

      throw new ApiException(axiosError.message, {
        status: axiosError.response?.status,
        data: axiosError.response?.data,
      });
    },
  );

  return instance;
};
