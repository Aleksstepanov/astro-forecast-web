import { create } from 'zustand';
import type { TLocationsStore } from './types';

const initialState: Pick<TLocationsStore, 'selectedLocationId'> = {
  selectedLocationId: null,
};

export const useLocationsStore = create<TLocationsStore>((set) => ({
  ...initialState,

  selectLocation: (id) => set({ selectedLocationId: id }),
  clearSelection: () => set({ selectedLocationId: null }),
  reset: () => set(initialState),
}));
