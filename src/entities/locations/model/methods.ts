import { useQuery } from '@tanstack/react-query';
import { useApiService } from '@/app/providers/ApiServiceProvider';
import { GetLocationsEndpoint } from '../api/endpoints';
import { bindQuery } from '@/shared/utils/api';
import { mapLocationDtoToUi } from './utils';

export const useLocationsMethod = () => {
  const api = useApiService();
  const endpoint = new GetLocationsEndpoint(api);

  const q = useQuery({
    queryKey: ['locations'],
    queryFn: endpoint.getList,
    staleTime: 24 * 60 * 60 * 1000,
    retry: 1,
  });

  return bindQuery(q, {
    map: (raw) => raw.map(mapLocationDtoToUi),
    hasData: (data) => !!data?.length,
  });
};
