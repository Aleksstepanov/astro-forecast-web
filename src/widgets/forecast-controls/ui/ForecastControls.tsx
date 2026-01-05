import { useEffect } from 'react';
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

import {
  useLocationsMethod,
  useLocationsStore,
  selectSelectedLocationId,
} from '@/entities/locations/model'; // или где ты его положил

export const ForecastControls = () => {
  const locations = useLocationsMethod(); // { data, isLoading, isError, error, ... }

  const selectedLocationId = useLocationsStore(selectSelectedLocationId);
  const selectLocation = useLocationsStore((st) => st.selectLocation);

  // дефолт: первый город (или потом сделаем "Москва" по id/slug)
  useEffect(() => {
    if (!locations.data?.length) return;
    if (selectedLocationId) return;

    selectLocation(locations.data[0]!.id);
  }, [locations.data, selectedLocationId, selectLocation]);

  const cityValue = selectedLocationId ?? '';

  return (
    <Box className={s.card}>
      <Typography variant="h6" className={s.title}>
        Настройки
      </Typography>

      <Box className={s.fields}>
        <FormControl size="small" fullWidth disabled={locations.isLoading || locations.isError}>
          <InputLabel>Город</InputLabel>

          <Select label="Город" value={cityValue} onChange={(e) => selectLocation(e.target.value)}>
            {locations.data?.map((city) => (
              <MenuItem key={city.id} value={city.id}>
                {city.title}
              </MenuItem>
            ))}

            {!locations.isLoading && !locations.data?.length && (
              <MenuItem value="" disabled>
                Нет доступных городов
              </MenuItem>
            )}
          </Select>

          {locations.isError && (
            <Typography variant="caption" sx={{ mt: 1 }}>
              Ошибка загрузки городов: {locations.error?.message}
            </Typography>
          )}
        </FormControl>

        <FormControl size="small" fullWidth>
          <InputLabel>Период</InputLabel>
          <Select label="Период" defaultValue="day">
            <MenuItem value="day">Сегодня</MenuItem>
            <MenuItem value="week">Неделя</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          size="medium"
          fullWidth
          disabled={!selectedLocationId || locations.isLoading || locations.isError}
        >
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
