import { z } from 'zod';

export const ForecastMetaDtoSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  tz: z.string(),
  period: z.enum(['day', 'week']),
  generatedAt: z.string(),
  source: z.string(),
});

export const ForecastPointDtoSchema = z.object({
  ts: z.string(),
  cloud: z.number(),
  humidity: z.number(),
  wind: z.number(),
  observingScore: z.number(),
  comfortScore: z.number(),
  reasons: z.array(z.string()),
});

export const ForecastNarrativeDtoSchema = z
  .object({
    source: z.string(),
    text: z.string(),
    model: z.string().optional(),
  })
  .optional();

export const ForecastResponseDtoSchema = z.object({
  meta: ForecastMetaDtoSchema,
  timeseries: z.array(ForecastPointDtoSchema),
  narrative: ForecastNarrativeDtoSchema,
});

export type TForecastResponseDto = z.infer<typeof ForecastResponseDtoSchema>;
export type TForecastMetaDto = z.infer<typeof ForecastMetaDtoSchema>;
export type TForecastPointDto = z.infer<typeof ForecastPointDtoSchema>;
export type TForecastNarrativeDto = z.infer<typeof ForecastNarrativeDtoSchema>;
