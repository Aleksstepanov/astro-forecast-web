import type { TApiService } from '@/shared/utils/api';
import { API, GET_LOCATIONS_REQUEST_ID } from '../consts';
import { LocationsDtoSchema } from '../schemas';
import type { TLocationDto } from '../schemas';

export class GetLocationsEndpoint {
  private readonly api: TApiService;

  public constructor(api: TApiService) {
    this.api = api;
  }

  public getList = async (): Promise<TLocationDto[]> => {
    const { data } = await this.api.get(API.GET_LIST(), {
      requestId: GET_LOCATIONS_REQUEST_ID,
    });

    return LocationsDtoSchema.parse(data);
  };
}
