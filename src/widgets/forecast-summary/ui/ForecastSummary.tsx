import { Box, Chip, Typography } from '@mui/material';
import s from './ForecastSummary.module.scss';

export const ForecastSummary = () => {
  return (
    <Box className={s.card}>
      <Box className={s.top}>
        <Typography variant="h6" className={s.title}>
          Вердикт
        </Typography>

        <Chip label="Можно наблюдать" size="small" />
      </Box>

      <Typography variant="body2" className={s.text}>
        В ближайшие часы ожидаются неплохие условия: облачность умеренная, ветер слабый. Лучшее окно
        — примерно с 21:00 до 23:00.
      </Typography>

      <Box className={s.reasons}>
        <Chip label="Облачность: ок" size="small" variant="outlined" />
        <Chip label="Ветер: слабый" size="small" variant="outlined" />
        <Chip label="Влажность: норм" size="small" variant="outlined" />
      </Box>
    </Box>
  );
};
