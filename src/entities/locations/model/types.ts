export type TLocationId = string;

export type TLocationsStore = {
  // state
  selectedLocationId: TLocationId | null;

  // actions
  selectLocation: (id: TLocationId) => void;
  clearSelection: () => void;
  reset: () => void;
};

export type TSelectrorsLocations = { selectedLocationId: TLocationId | null };

export type TLocationUi = {
  id: string;
  title: string;
  lat: number;
  lon: number;
  tz: string;
};
