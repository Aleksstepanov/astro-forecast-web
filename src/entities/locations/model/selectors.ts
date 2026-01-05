import type { TSelectrorsLocations } from './types';

export const selectSelectedLocationId = (s: TSelectrorsLocations) => s.selectedLocationId;
export const selectHasSelection = (s: TSelectrorsLocations) => s.selectedLocationId !== null;
