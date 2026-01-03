import { Container, Stack, Typography } from '@mui/material';

export const ForecastPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h4">Astro Forecast</Typography>
        <Typography color="text.secondary">
          Скелет поднят. Дальше подключаем shared/api и делаем Forecast entity.
        </Typography>
      </Stack>
    </Container>
  );
};
