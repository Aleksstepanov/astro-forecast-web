import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

import { useForecastControlsModel } from '../model';

import s from './ForecastControls.module.scss';

export const ForecastControls = () => {
  const {
    locations,
    selectedLocationId,
    period,
    setPeriod,
    onSelectLocation,
    isLocationsLoading,
    isLocationsError,
  } = useForecastControlsModel();

  return (
    <Box className={s.card}>
      <Typography variant="h6" className={s.title}>
        Настройки
      </Typography>

      <Box className={s.fields}>
        {/* ГОРОД */}
        <FormControl size="small" fullWidth disabled={isLocationsLoading || isLocationsError}>
          <InputLabel>Город</InputLabel>

          <Select
            label="Город"
            value={selectedLocationId ?? ''}
            onChange={(e) => onSelectLocation(e.target.value || null)}
          >
            {locations.map((city) => (
              <MenuItem key={city.id} value={city.id}>
                {city.title}
              </MenuItem>
            ))}

            {!isLocationsLoading && !locations.length && (
              <MenuItem value="" disabled>
                Нет доступных городов
              </MenuItem>
            )}
          </Select>
        </FormControl>

        {/* ПЕРИОД */}
        <FormControl size="small" fullWidth>
          <InputLabel>Период</InputLabel>

          <Select label="Период" value={period} onChange={(e) => setPeriod(e.target.value as any)}>
            <MenuItem value="day">Сегодня</MenuItem>
            <MenuItem value="week">Неделя</MenuItem>
          </Select>
        </FormControl>

        <Divider />

        {/* ПОКА ЗАГЛУШКА */}
        <Typography variant="caption" className={s.hint}>
          По умолчанию — выбор города. Автогео будет по кнопке позже.
        </Typography>
      </Box>
    </Box>
  );
};
