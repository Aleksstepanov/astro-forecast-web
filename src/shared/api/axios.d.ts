import 'axios';
import type { TRequestId } from './types';

declare module 'axios' {
  export interface InternalAxiosRequestConfig {
    requestId?: TRequestId;
  }
}
