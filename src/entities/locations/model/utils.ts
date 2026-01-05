import type { TLocationDto } from '@/entities/locations/api/schemas';
import type { TLocationUi } from '@/entities/locations/model/types.ts';

export const mapLocationDtoToUi = (src: TLocationDto): TLocationUi => ({
  id: src.id,
  title: src.title,
  tz: src.tz,
});
