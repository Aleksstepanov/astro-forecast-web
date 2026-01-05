import { z } from 'zod';

export const ForecastQuerySchema = z.object({
  lat: z.number(),
  lon: z.number(),
  tz: z.string().min(1),
  period: z.enum(['day', 'week']),
});

export type TForecastQuery = z.infer<typeof ForecastQuerySchema>;
