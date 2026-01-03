import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import s from './ForecastControls.module.scss';

export const ForecastControls = () => {
  return (
    <Box className={s.card}>
      <Typography variant="h6" className={s.title}>
        Настройки
      </Typography>

      <Box className={s.fields}>
        <FormControl size="small" fullWidth>
          <InputLabel>Город</InputLabel>
          <Select label="Город" defaultValue="moscow">
            <MenuItem value="moscow">Москва</MenuItem>
            <MenuItem value="spb">Санкт-Петербург</MenuItem>
            <MenuItem value="penza">Пенза</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" fullWidth>
          <InputLabel>Период</InputLabel>
          <Select label="Период" defaultValue="day">
            <MenuItem value="day">Сегодня</MenuItem>
            <MenuItem value="week">Неделя</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" size="medium" fullWidth>
          Показать прогноз
        </Button>

        <Divider />

        <Button variant="text" size="small" fullWidth>
          Автоопределение (позже)
        </Button>

        <Typography variant="caption" className={s.hint}>
          По умолчанию — выбор города. Автогео будет только по кнопке.
        </Typography>
      </Box>
    </Box>
  );
};
