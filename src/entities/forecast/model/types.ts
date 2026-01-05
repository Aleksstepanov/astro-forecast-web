export type TForecastPeriod = 'day' | 'week';

export type TForecastParams = {
  lat: number | null;
  lon: number | null;
  tz: string | null;
  period: TForecastPeriod;
};

export type TForecastMetaUi = {
  lat: number;
  lon: number;
  tz: string;
  period: TForecastPeriod;
  generatedAt: string;
  source: string;
};

export type TForecastPointUi = {
  ts: string;
  cloud: number;
  humidity: number;
  wind: number;
  observingScore: number;
  comfortScore: number;
  reasons: string[];
};

export type TForecastNarrativeUi = {
  source: string;
  text: string;
  model?: string;
};

export type TForecastUi = {
  meta: TForecastMetaUi;
  timeseries: TForecastPointUi[];
  narrative?: TForecastNarrativeUi;
};

export type TForecastStore = {
  params: TForecastParams;

  setPeriod: (period: TForecastPeriod) => void;
  setCoords: (lat: number, lon: number, tz: string) => void;
  reset: () => void;
};
