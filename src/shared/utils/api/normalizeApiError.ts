import { isAxiosError } from 'axios';

export type TApiError = {
  message: string;
  status?: number;
  code?: string;
  details?: unknown;
};

type ApiErrorPayload = {
  message?: string | string[];
  error?: string;
  title?: string;
  code?: string;
  errorCode?: string;
};

const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null;

export const normalizeApiError = (err: unknown): TApiError => {
  // axios error
  if (isAxiosError(err)) {
    const status = err.response?.status;
    const data = err.response?.data;

    let message = err.message;
    let code: string | undefined;

    if (isObject(data)) {
      const payload = data as ApiErrorPayload;

      if (Array.isArray(payload.message)) {
        message = payload.message.join(', ');
      } else if (typeof payload.message === 'string') {
        message = payload.message;
      } else if (typeof payload.error === 'string') {
        message = payload.error;
      } else if (typeof payload.title === 'string') {
        message = payload.title;
      }

      code = payload.code ?? payload.errorCode;
    }

    return {
      message: message || 'Request failed',
      status,
      code,
      details: data,
    };
  }

  // обычная JS ошибка
  if (err instanceof Error) {
    return { message: err.message };
  }

  // вообще непонятно что
  return {
    message: 'Unknown error',
    details: err,
  };
};
