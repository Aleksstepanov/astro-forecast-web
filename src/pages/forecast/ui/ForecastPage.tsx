import { Box, Typography } from '@mui/material';
import { ForecastControls } from '@/widgets/forecast-controls';
import { ForecastSummary } from '@/widgets/forecast-summary';
import { ForecastChart } from '@/widgets/forecast-chart';
import { ForecastHourly } from '@/widgets/forecast-hourly';
import s from './ForecastPage.module.scss';
import { useForecastQuery } from '@/entities/forecast/model';
import { ForecastLoadingOverlay } from '@/widgets/forecast-loading-overlay';

export const ForecastPage = () => {
  const forecast = useForecastQuery();

  return (
    <Box className={s.root}>
      <Box className={s.header}>
        <Typography variant="h4" fontWeight={800}>
          Астропрогноз наблюдений
        </Typography>
        <Typography color="text.secondary">
          Лучшее время для наблюдения звёзд — без лишней магии.
        </Typography>
      </Box>

      <ForecastLoadingOverlay active={forecast.isFetching} />

      <Box className={s.grid}>
        <Box className={s.controls}>
          <ForecastControls />
        </Box>

        <Box className={s.summary}>
          <ForecastSummary />
        </Box>

        <Box className={s.chart}>
          <ForecastChart />
        </Box>

        <Box className={s.hourly}>
          <ForecastHourly />
        </Box>
      </Box>
    </Box>
  );
};
