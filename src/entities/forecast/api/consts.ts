import type { TForecastQuery } from '../api';

export const API = {
  GET_LIST: (params: TForecastQuery) =>
    `/forecast?lat=${params.lat}&lon=${params.lon}&tz=${params.tz}&period=${params.period}`,
} as const;

export const GET_FORECAST_REQUEST_ID = Symbol('forecast.getList');
