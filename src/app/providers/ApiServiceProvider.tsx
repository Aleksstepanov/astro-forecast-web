import React, { createContext, useContext, useMemo } from 'react';
import { createApiService } from '@/shared/utils/api';
import type { TApiService } from '@/shared/utils/api';

type ApiServiceProviderProps = React.PropsWithChildren;

const ApiServiceContext = createContext<TApiService | null>(null);

export const ApiServiceProvider = ({ children }: ApiServiceProviderProps) => {
  const apiService = useMemo(() => {
    const apiBase = import.meta.env.VITE_API_BASE ?? '/api';
    return createApiService({ baseURL: apiBase });
  }, []);

  return <ApiServiceContext.Provider value={apiService}>{children}</ApiServiceContext.Provider>;
};

export const useApiService = (): TApiService => {
  const api = useContext(ApiServiceContext);
  if (!api) throw new Error('ApiServiceProvider is missing in AppProviders tree');
  return api;
};
