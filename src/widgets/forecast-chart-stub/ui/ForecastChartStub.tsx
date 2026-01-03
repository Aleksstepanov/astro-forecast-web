import { Box, Typography } from '@mui/material';
import s from './ForecastChartStub.module.scss';

export const ForecastChartStub = () => {
  return (
    <Box className={s.card}>
      <Typography variant="h6" className={s.title}>
        График условий
      </Typography>
      <Box className={s.stub}>
        <Typography variant="body2" className={s.muted}>
          Тут будет график score по времени (позже).
        </Typography>
      </Box>
    </Box>
  );
};
