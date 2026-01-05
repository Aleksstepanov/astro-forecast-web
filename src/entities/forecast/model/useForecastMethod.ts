import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useApiService } from '@/app/providers/ApiServiceProvider';
import { GetForecastEndpoint } from '@/entities/forecast/api/endpoints/getForecast.endpoint';
import { bindQuery } from '@/shared/utils/api';

import { useForecastStore } from './store';
import { parseForecastQuery, mapForecastDtoToUi } from './utils';

export const useForecastQuery = () => {
  const api = useApiService();
  const endpoint = new GetForecastEndpoint(api);

  const params = useForecastStore((s) => s.params);
  const query = useMemo(() => parseForecastQuery(params), [params]);

  const q = useQuery({
    queryKey: ['forecast', params.lat, params.lon, params.tz, params.period],
    queryFn: () => endpoint.get(query!),
    enabled: !!query,
    staleTime: 10 * 60 * 1000,
    retry: 1,
  });

  return bindQuery(q, {
    map: mapForecastDtoToUi,
    hasData: (data) => !!data?.timeseries?.length,
  });
};
