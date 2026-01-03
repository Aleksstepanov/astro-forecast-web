import { Box, Typography } from '@mui/material';
import s from './ForecastHourlyStub.module.scss';

export const ForecastHourlyStub = () => {
  return (
    <Box className={s.card}>
      <Typography variant="h6" className={s.title}>
        Почасовой прогноз
      </Typography>

      <Box className={s.list}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Box key={i} className={s.row}>
            <Typography variant="body2" className={s.time}>
              21:{i}0
            </Typography>
            <Typography variant="body2" className={s.meta}>
              Облачность 35% · ветер 2 м/с
            </Typography>
            <Typography variant="body2" className={s.score}>
              0.{8 - i}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
