import { ROUTE_NAMES, type RouteName } from '@/shared/constants/routes';

export type NavItem = {
  label: string;
  route: RouteName;
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Прогноз', route: ROUTE_NAMES.FORECAST },
  { label: 'Как это работает', route: ROUTE_NAMES.HOW_IT_WORKS },
  { label: 'Privacy', route: ROUTE_NAMES.PRIVACY },
];
