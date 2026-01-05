import 'axios';
import type { TRequestId } from './types';

declare module 'axios' {
  export interface AxiosRequestConfig {
    requestId?: TRequestId;
  }

  export interface InternalAxiosRequestConfig {
    requestId?: TRequestId;
  }
}
