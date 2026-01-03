import { Box, Typography } from '@mui/material';
import { ForecastControls } from '@/widgets/forecast-controls';
import { ForecastSummary } from '@/widgets/forecast-summary';
import { ForecastChartStub } from '@/widgets/forecast-chart-stub';
import { ForecastHourlyStub } from '@/widgets/forecast-hourly-stub';
import s from './ForecastPage.module.scss';

export const ForecastPage = () => {
  return (
    <Box className={s.root}>
      <Box className={s.header}>
        <Typography variant="h4" className={s.title}>
          Астропрогноз наблюдений
        </Typography>
        <Typography variant="body1" className={s.subtitle}>
          Выбери город и период — покажем лучшие окна и понятный вердикт.
        </Typography>
      </Box>

      <Box className={s.grid}>
        <Box className={s.controls}>
          <ForecastControls />
        </Box>

        <Box className={s.summary}>
          <ForecastSummary />
        </Box>

        <Box className={s.chart}>
          <ForecastChartStub />
        </Box>

        <Box className={s.hourly}>
          <ForecastHourlyStub />
        </Box>
      </Box>
    </Box>
  );
};
