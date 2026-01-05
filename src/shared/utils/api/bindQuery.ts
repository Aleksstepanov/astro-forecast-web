import type { UseQueryResult } from '@tanstack/react-query';
import { normalizeApiError, type TApiError } from './normalizeApiError';

export type TBoundQuery<TData, TRaw = unknown> = {
  data: TData | null;
  raw: TRaw | null;

  isLoading: boolean; // первый запрос
  isFetching: boolean; // любые фетчи
  isError: boolean;

  error: TApiError | null;

  hasData: boolean;

  refetch: () => void;
};

type BindQueryOptions<TRaw, TData> = {
  map?: (raw: TRaw) => TData;
  hasData?: (data: TData | null, raw: TRaw | null) => boolean;
};

export const bindQuery = <TRaw, TData = TRaw>(
  q: UseQueryResult<TRaw>,
  opts: BindQueryOptions<TRaw, TData> = {},
): TBoundQuery<TData, TRaw> => {
  const raw = q.data ?? null;

  const data = raw && opts.map ? opts.map(raw) : (raw as unknown as TData | null);

  const hasData =
    opts.hasData?.(data, raw) ?? (Array.isArray(data) ? data.length > 0 : data !== null);

  return {
    data,
    raw,

    isLoading: q.isPending,
    isFetching: q.isFetching,
    isError: q.isError,

    error: q.error ? normalizeApiError(q.error) : null,

    hasData,

    refetch: () => void q.refetch(),
  };
};
