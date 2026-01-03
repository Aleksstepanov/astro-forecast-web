export const ROUTES = {
  ROOT: '/',
  HOW_IT_WORKS: '/how-it-works',
  PRIVACY: '/privacy',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export const ROUTE_NAMES = {
  FORECAST: 'forecast',
  HOW_IT_WORKS: 'how-it-works',
  PRIVACY: 'privacy',
} as const;

export type RouteName = (typeof ROUTE_NAMES)[keyof typeof ROUTE_NAMES];

export const ROUTE_MAP = {
  [ROUTE_NAMES.FORECAST]: ROUTES.ROOT,
  [ROUTE_NAMES.HOW_IT_WORKS]: ROUTES.HOW_IT_WORKS,
  [ROUTE_NAMES.PRIVACY]: ROUTES.PRIVACY,
} as const satisfies Record<RouteName, RoutePath>;
