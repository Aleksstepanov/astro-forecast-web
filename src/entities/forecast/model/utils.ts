import type { TForecastResponseDto } from '../api/schemas';
import { ForecastQuerySchema } from '../api/schemas';
import type { TForecastQuery } from '../api/schemas';
import type { TForecastUi, TForecastParams } from './types';

export const mapForecastDtoToUi = (src: TForecastResponseDto): TForecastUi => ({
  meta: src.meta,
  timeseries: src.timeseries,
  narrative: src.narrative,
});

export const parseForecastQuery = (p: TForecastParams): TForecastQuery | null => {
  const res = ForecastQuerySchema.safeParse(p);
  return res.success ? res.data : null;
};
