import { Box, Chip, Typography } from '@mui/material';
import s from './ForecastSummary.module.scss';

import { useForecastQuery } from '@/entities/forecast/model';
import { parseNarrative } from '../model';

export const ForecastSummary = () => {
  const forecast = useForecastQuery();
  const narrative = forecast.data?.narrative;

  if (forecast.isLoading) {
    return (
      <Box className={s.card}>
        <Typography variant="body2">Формируем вердикт…</Typography>
      </Box>
    );
  }

  if (forecast.isError) {
    return (
      <Box className={s.card}>
        <Typography variant="body2">Ошибка при получении прогноза</Typography>
      </Box>
    );
  }

  if (!narrative?.text) {
    return (
      <Box className={s.card}>
        <Typography variant="body2">Недостаточно данных для вердикта</Typography>
      </Box>
    );
  }

  const blocks = parseNarrative(narrative.text);

  return (
    <Box className={s.card}>
      <Box className={s.top}>
        <Typography variant="h6" className={s.title}>
          Вердикт
        </Typography>

        <Chip label="Анализ ИИ" size="small" />
      </Box>

      <Box className={s.content}>
        {blocks.map((b, i) => (
          <Box key={i} className={s.block}>
            {b.title && (
              <Typography variant="subtitle2" className={s.blockTitle}>
                {b.title}
              </Typography>
            )}
            <Typography variant="body2">{b.text}</Typography>
          </Box>
        ))}
      </Box>

      {narrative.model && (
        <Typography variant="caption" className={s.meta}>
          Анализ выполнен моделью: {narrative.model}
        </Typography>
      )}
    </Box>
  );
};
