import { createBrowserRouter } from 'react-router-dom';
import { ForecastPage } from '@/pages/forecast';
import { HowItWorksPage } from '@/pages/how-it-works';
import { PrivacyPage } from '@/pages/privacy';
import { ROUTES } from '@/shared/constants/';
import { AppLayout } from '@/shared/ui/layouts';

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <AppLayout />,
    children: [
      { index: true, element: <ForecastPage /> },
      { path: ROUTES.HOW_IT_WORKS, element: <HowItWorksPage /> },
      { path: ROUTES.PRIVACY, element: <PrivacyPage /> },
    ],
  },
]);
