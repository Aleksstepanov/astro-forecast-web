import { Box, Typography } from '@mui/material';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import { useForecastQuery } from '@/entities/forecast/model';
import s from './ForecastChart.module.scss';

const formatHour = (iso: string): string => {
  const m = iso.match(/T(\d{2}:\d{2})/);
  return m ? m[1] : iso;
};

type TChartPoint = {
  ts: string;
  time: string;
  score: number;
};

const MAX_POINTS = 48; // не перегружаем (2 суток почасово)

export const ForecastChart = () => {
  const forecast = useForecastQuery();
  const points = forecast.data?.timeseries ?? [];

  if (forecast.isLoading) {
    return (
      <Box className={s.card}>
        <Typography variant="h6" className={s.title}>
          График условий
        </Typography>
        <Typography variant="body2">Строим график…</Typography>
      </Box>
    );
  }

  if (forecast.isError) {
    return (
      <Box className={s.card}>
        <Typography variant="h6" className={s.title}>
          График условий
        </Typography>
        <Typography variant="body2">Ошибка загрузки</Typography>
      </Box>
    );
  }

  if (!points.length) {
    return (
      <Box className={s.card}>
        <Typography variant="h6" className={s.title}>
          График условий
        </Typography>
        <Typography variant="body2">Нет данных для графика</Typography>
      </Box>
    );
  }

  const data: TChartPoint[] = points.slice(0, MAX_POINTS).map((p) => ({
    ts: p.ts,
    time: formatHour(p.ts),
    score: p.observingScore,
  }));

  return (
    <Box className={s.card}>
      <Typography variant="h6" className={s.title}>
        График условий
      </Typography>

      <Box className={s.chart}>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data} margin={{ top: 8, right: 12, bottom: 8, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" interval="preserveStartEnd" minTickGap={24} />
            <YAxis domain={[0, 100]} tickCount={6} />
            <Tooltip
              labelFormatter={(label) => `Время: ${label}`}
              formatter={(value) => [`${value}`, 'Score']}
            />
            <Line type="monotone" dataKey="score" strokeWidth={2} dot={false} isAnimationActive />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <Typography variant="caption" className={s.hint}>
        Чем выше линия — тем лучше условия для наблюдения.
      </Typography>
    </Box>
  );
};
