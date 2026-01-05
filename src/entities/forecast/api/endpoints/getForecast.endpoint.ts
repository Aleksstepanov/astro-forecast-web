import type { TApiService } from '@/shared/utils/api';
import { ForecastResponseDtoSchema, type TForecastResponseDto } from '../schemas';
import { API, GET_FORECAST_REQUEST_ID } from '../consts';

export type TForecastQueryParams = {
  lat: number;
  lon: number;
  tz: string;
  period: 'day' | 'week';
};

export class GetForecastEndpoint {
  private readonly api: TApiService;

  public constructor(api: TApiService) {
    this.api = api;
  }

  get = async (params: TForecastQueryParams): Promise<TForecastResponseDto> => {
    const { data } = await this.api.get(API.GET_LIST(params), {
      requestId: GET_FORECAST_REQUEST_ID,
    });

    return ForecastResponseDtoSchema.parse(data);
  };
}
