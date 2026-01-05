import { Box, Typography } from '@mui/material';
import s from './ForecastHourly.module.scss';

import { useForecastQuery } from '@/entities/forecast/model';
import { formatHour } from '../model';

const MAX_ROWS = 12; // чтобы не захламлять экран

export const ForecastHourly = () => {
  const forecast = useForecastQuery();
  const points = forecast.data?.timeseries ?? [];

  if (forecast.isLoading) {
    return (
      <Box className={s.card}>
        <Typography variant="h6" className={s.title}>
          Почасовой прогноз
        </Typography>
        <Typography variant="body2">Загружаем данные…</Typography>
      </Box>
    );
  }

  if (forecast.isError) {
    return (
      <Box className={s.card}>
        <Typography variant="h6" className={s.title}>
          Почасовой прогноз
        </Typography>
        <Typography variant="body2">Ошибка загрузки</Typography>
      </Box>
    );
  }

  if (!points.length) {
    return (
      <Box className={s.card}>
        <Typography variant="h6" className={s.title}>
          Почасовой прогноз
        </Typography>
        <Typography variant="body2">Нет данных для отображения</Typography>
      </Box>
    );
  }

  return (
    <Box className={s.card}>
      <Typography variant="h6" className={s.title}>
        Почасовой прогноз
      </Typography>

      <Box className={s.list}>
        {points.slice(0, MAX_ROWS).map((p) => (
          <Box key={p.ts} className={s.row}>
            <Typography variant="body2" className={s.time}>
              {formatHour(p.ts)}
            </Typography>

            <Typography variant="body2" className={s.meta}>
              Облачность {p.cloud}% · ветер {p.wind} м/с
            </Typography>

            <Typography variant="body2" className={s.score}>
              {p.observingScore}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
