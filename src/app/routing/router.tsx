import { createBrowserRouter } from 'react-router-dom';
import { ForecastPage } from '@/pages/forecast/ui/ForecastPage';

export const router = createBrowserRouter([{ path: '/', element: <ForecastPage /> }]);
