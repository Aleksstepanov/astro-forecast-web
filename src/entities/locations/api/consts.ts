export const API = {
  GET_LIST: () => '/locations',
} as const;

export const GET_LOCATIONS_REQUEST_ID = Symbol('locations.getList');
