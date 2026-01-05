import { z } from 'zod';

export const LocationDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  lat: z.number(),
  lon: z.number(),
  tz: z.string(),
});

export const LocationsDtoSchema = z.array(LocationDtoSchema);

export type TLocationDto = z.infer<typeof LocationDtoSchema>;
