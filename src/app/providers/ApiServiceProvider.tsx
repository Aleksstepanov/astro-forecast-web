import React, { createContext, useContext, useMemo } from 'react';
import { createApiService } from '@/shared/utils/api'; // твоя фабрика из архива
import type { TApiService } from '@/shared/utils/api'; // тип, если у тебя он экспортируется

type ApiServiceProviderProps = React.PropsWithChildren;

const ApiServiceContext = createContext<TApiService | null>(null);

export const ApiServiceProvider = ({ children }: ApiServiceProviderProps) => {
  const apiService = useMemo(() => {
    const BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL || '' : '';
    console.log('import.meta.env.VITE_API_URL', import.meta.env.VITE_API_URL);
    return createApiService({
      baseURL: `${BASE_URL}/api/`,
    });
  }, []);

  return <ApiServiceContext.Provider value={apiService}>{children}</ApiServiceContext.Provider>;
};

export const useApiService = (): TApiService => {
  const api = useContext(ApiServiceContext);
  if (!api) {
    throw new Error('ApiServiceProvider is missing in AppProviders tree');
  }
  return api;
};
