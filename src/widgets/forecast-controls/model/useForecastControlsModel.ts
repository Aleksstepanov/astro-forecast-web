import { useEffect } from 'react';
import { useLocationsMethod } from '@/entities/locations/model';
import { useLocationsStore } from '@/entities/locations/model/store';
import { useForecastStore } from '@/entities/forecast/model/store';
import type { TLocationUi } from '@/entities/locations/model/types';

export const useForecastControlsModel = () => {
  const locationsQ = useLocationsMethod();
  const locations = locationsQ.data ?? [];

  const selectedLocationId = useLocationsStore((s) => s.selectedLocationId);
  const selectLocation = useLocationsStore((s) => s.selectLocation);
  const clearSelection = useLocationsStore((s) => s.clearSelection);

  const period = useForecastStore((s) => s.params.period);
  const setPeriod = useForecastStore((s) => s.setPeriod);

  // текущие coords в forecast store — чтобы не сетить то же самое по кругу
  const lat = useForecastStore((s) => s.params.lat);
  const lon = useForecastStore((s) => s.params.lon);
  const tz = useForecastStore((s) => s.params.tz);

  const setCoords = useForecastStore((s) => s.setCoords);
  const resetForecast = useForecastStore((s) => s.reset);

  useEffect(() => {
    if (!selectedLocationId) return;

    const loc: TLocationUi | null = locations.find((x) => x.id === selectedLocationId) ?? null;

    if (!loc) return;

    // ✅ КЛЮЧ: не обновляем store, если значения уже такие же
    if (lat === loc.lat && lon === loc.lon && tz === loc.tz) return;

    setCoords(loc.lat, loc.lon, loc.tz);
  }, [selectedLocationId, locations, lat, lon, tz, setCoords]);

  const onSelectLocation = (id: string | null) => {
    if (!id) {
      clearSelection();
      resetForecast(); // чтобы coords не остались “призраком”
      return;
    }
    selectLocation(id);
    // coords НЕ ставим тут — ставит effect, и только если надо
  };

  return {
    locations,
    selectedLocationId,
    period,
    setPeriod,
    onSelectLocation,
    isLocationsLoading: locationsQ.isLoading,
    isLocationsError: locationsQ.isError,
    locationsError: locationsQ.error,
  };
};
