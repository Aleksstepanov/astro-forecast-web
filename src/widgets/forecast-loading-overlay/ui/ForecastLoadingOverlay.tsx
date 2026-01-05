import { Box, CircularProgress, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import s from './ForecastLoadingOverlay.module.scss';

type Props = {
  active: boolean;
};

export const ForecastLoadingOverlay = ({ active }: Props) => {
  if (!active) return null;

  return (
    <Box className={s.overlay}>
      <Box className={s.card}>
        <AutoAwesomeIcon className={s.icon} />
        <CircularProgress size={28} />
        <Typography variant="body2" align="center">
          Считаем лучшие условия для наблюдений…
        </Typography>
      </Box>
    </Box>
  );
};
