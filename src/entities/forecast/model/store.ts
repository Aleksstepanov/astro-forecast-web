import { create } from 'zustand';
import type { TForecastParams, TForecastStore } from './types';

const initialParams: TForecastParams = {
  lat: null,
  lon: null,
  tz: null,
  period: 'week',
};

export const useForecastStore = create<TForecastStore>((set) => ({
  params: initialParams,

  setPeriod: (period) => set((s) => ({ params: { ...s.params, period } })),

  setCoords: (lat, lon, tz) => set((s) => ({ params: { ...s.params, lat, lon, tz } })),

  reset: () => set({ params: initialParams }),
}));
